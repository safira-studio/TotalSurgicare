-- =============================================================================
-- TotalSurgicare — Walk-in clinic patient + medicine prescription module
-- Run in Supabase SQL Editor after prescription_setup.sql (needs public.doctors).
-- Medicines: ONE shared catalog for all doctors in the project.
-- Safe to re-run: policies are dropped before recreate.
-- =============================================================================

-- ---------------------------------------------------------------------------
-- 1. Walk-in patients (reception) — lookup by public_code
-- ---------------------------------------------------------------------------
create table if not exists public.clinic_patients (
  id              uuid primary key default gen_random_uuid(),
  public_code     text not null unique,
  full_name       text not null,
  age             int not null check (age >= 0 and age <= 130),
  bp              text,
  mobile          text,
  allergies       text,
  registered_by   uuid not null references public.doctors(id) on delete cascade,
  created_at      timestamptz not null default now()
);

create index if not exists clinic_patients_registered_by_created_idx
  on public.clinic_patients (registered_by, created_at desc);

-- Cleared from doctor "today" queue after a medicine Rx PDF is created for this visit.
alter table public.clinic_patients
  add column if not exists medicine_rx_done_at timestamptz null;

comment on column public.clinic_patients.medicine_rx_done_at is
  'Set when a medicine prescription is issued; hides this visit from the daily Medicine Rx queue.';

comment on table public.clinic_patients is
  'Reception-registered walk-in; patient returns with public_code for doctor lookup.';

-- Sequential OPD visit IDs (OPD-0001, OPD-0002, …). Allocated in DB for concurrency safety.
create sequence if not exists public.clinic_opd_serial
  as bigint
  increment by 1
  minvalue 1
  start with 1;

create or replace function public.next_clinic_opd_code()
returns text
language sql
security definer
set search_path = public
as $$
  select 'OPD-' || lpad(nextval('public.clinic_opd_serial')::text, 4, '0');
$$;

comment on function public.next_clinic_opd_code() is
  'Returns next clinic_patients.public_code in form OPD-0001; invoke via service role from API.';

revoke all on function public.next_clinic_opd_code() from public;
grant execute on function public.next_clinic_opd_code() to service_role;

do $sync_opd_seq$
declare
  mx bigint;
begin
  select coalesce(max(substring(cp.public_code from 5)::bigint), 0)
  into mx
  from public.clinic_patients cp
  where length(cp.public_code) >= 6
    and lower(left(cp.public_code, 4)) = 'opd-'
    and substring(cp.public_code from 5) ~ '^[0-9]+$';
  if mx > 0 then
    perform setval('public.clinic_opd_serial', mx, true);
  end if;
end;
$sync_opd_seq$;

-- ---------------------------------------------------------------------------
-- 2. Medicine catalog — shared by all doctors (clinic-wide)
-- ---------------------------------------------------------------------------
create table if not exists public.medicines (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  created_at  timestamptz not null default now()
);

-- Legacy: older installs had medicines.doctor_id (NOT NULL). CREATE TABLE IF NOT EXISTS
-- does not reshape an existing table — dedupe by name, drop column, then clinic-wide index.
do $medicines_legacy$
begin
  if exists (
    select 1
    from information_schema.columns
    where table_schema = 'public'
      and table_name = 'medicines'
      and column_name = 'doctor_id'
  ) then
    delete from public.medicines a
    using public.medicines b
    where a.id > b.id
      and lower(trim(a.name)) = lower(trim(b.name));
    alter table public.medicines drop constraint if exists medicines_doctor_id_fkey;
    drop index if exists medicines_doctor_name_lower_key;
    drop index if exists medicines_doctor_id_idx;
    alter table public.medicines drop column doctor_id cascade;
  end if;
end;
$medicines_legacy$;

create unique index if not exists medicines_name_lower_key
  on public.medicines (lower(trim(name)));

comment on table public.medicines is
  'Shared medicine dictionary for the clinic; visible to all authenticated doctors.';

-- ---------------------------------------------------------------------------
-- 2b. Diagnoses catalog (shared, like medicines)
-- ---------------------------------------------------------------------------
create table if not exists public.diagnoses (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  created_at  timestamptz not null default now()
);

create unique index if not exists diagnoses_name_lower_key
  on public.diagnoses (lower(trim(name)));

comment on table public.diagnoses is
  'Shared diagnosis labels for OPD prescribing; searchable by all authenticated doctors.';

-- ---------------------------------------------------------------------------
-- 3. Medicine prescriptions (PDF + lines jsonb)
-- ---------------------------------------------------------------------------
create table if not exists public.medicine_prescriptions (
  id                 uuid primary key default gen_random_uuid(),
  doctor_id          uuid not null references public.doctors(id) on delete cascade,
  clinic_patient_id  uuid not null references public.clinic_patients(id) on delete restrict,
  lines              jsonb not null default '[]'::jsonb,
  complaints         text,
  diagnoses_lines    jsonb not null default '[]'::jsonb,
  pdf_path           text,
  created_at         timestamptz not null default now()
);

-- lines: [{
--   "medicine_id", "name",
--   "before_food", "after_food", "morning", "afternoon", "evening",
--   "one_spoon", "two_spoons": bool
-- }]
-- Legacy rows may still have "timing": "before_food" only.
-- diagnoses_lines: [{ "diagnosis_id": uuid, "name": "..." }]

alter table public.medicine_prescriptions
  add column if not exists complaints text;

alter table public.medicine_prescriptions
  add column if not exists diagnoses_lines jsonb not null default '[]'::jsonb;

comment on column public.medicine_prescriptions.complaints is
  'Chief complaints / narrative (typed or transcribed).';

comment on column public.medicine_prescriptions.diagnoses_lines is
  'Selected diagnoses for this prescription.';

create index if not exists medicine_prescriptions_doctor_created_idx
  on public.medicine_prescriptions (doctor_id, created_at desc);

comment on table public.medicine_prescriptions is
  'Drug Rx PDFs linked to a clinic_patient visit row.';

-- ---------------------------------------------------------------------------
-- 4. Row Level Security
-- ---------------------------------------------------------------------------
alter table public.clinic_patients enable row level security;
alter table public.medicines enable row level security;
alter table public.diagnoses enable row level security;
alter table public.medicine_prescriptions enable row level security;

drop policy if exists "clinic_patients_select_own_registrations" on public.clinic_patients;
create policy "clinic_patients_select_own_registrations"
  on public.clinic_patients for select
  using (registered_by = auth.uid());

drop policy if exists "clinic_patients_insert_own" on public.clinic_patients;
create policy "clinic_patients_insert_own"
  on public.clinic_patients for insert
  with check (registered_by = auth.uid());

drop policy if exists "medicines_select_authenticated" on public.medicines;
create policy "medicines_select_authenticated"
  on public.medicines for select to authenticated
  using (true);

drop policy if exists "medicines_insert_authenticated" on public.medicines;
create policy "medicines_insert_authenticated"
  on public.medicines for insert to authenticated
  with check (true);

drop policy if exists "diagnoses_select_authenticated" on public.diagnoses;
create policy "diagnoses_select_authenticated"
  on public.diagnoses for select to authenticated
  using (true);

drop policy if exists "diagnoses_insert_authenticated" on public.diagnoses;
create policy "diagnoses_insert_authenticated"
  on public.diagnoses for insert to authenticated
  with check (true);

drop policy if exists "medicine_rx_select_own" on public.medicine_prescriptions;
create policy "medicine_rx_select_own"
  on public.medicine_prescriptions for select
  using (doctor_id = auth.uid());

drop policy if exists "medicine_rx_insert_own" on public.medicine_prescriptions;
create policy "medicine_rx_insert_own"
  on public.medicine_prescriptions for insert
  with check (doctor_id = auth.uid());

drop policy if exists "medicine_rx_delete_own" on public.medicine_prescriptions;
create policy "medicine_rx_delete_own"
  on public.medicine_prescriptions for delete
  using (doctor_id = auth.uid());
