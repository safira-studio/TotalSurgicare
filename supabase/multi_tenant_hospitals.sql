-- =============================================================================
-- TotalSurgicare — Multi-hospital tenancy (single Supabase project)
-- Run AFTER: prescription_setup.sql, medicine_rx_setup.sql, referrals_tracking.sql
-- Safe to re-run: uses IF NOT EXISTS / DROP POLICY IF EXISTS where applicable.
-- =============================================================================

-- ---------------------------------------------------------------------------
-- 1. Hospitals (onboarded sites)
-- ---------------------------------------------------------------------------
create table if not exists public.hospitals (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  slug        text not null,
  active      boolean not null default true,
  created_at  timestamptz not null default now()
);

create unique index if not exists hospitals_slug_lower_key on public.hospitals (lower(trim(slug)));

comment on table public.hospitals is
  'Onboarded hospital / clinic site; tenant key for RLS-scoped patient and referral data.';

insert into public.hospitals (name, slug, active)
select 'Totalsurgicare Hospital', 'default', true
where not exists (
  select 1 from public.hospitals h where lower(trim(h.slug)) = 'default'
);

-- Idempotent display-name refresh for databases seeded before rename.
update public.hospitals
set name = 'Totalsurgicare Hospital'
where lower(trim(slug)) = 'default';

-- ---------------------------------------------------------------------------
-- 2. Tenant column on doctors
-- ---------------------------------------------------------------------------
alter table public.doctors
  add column if not exists hospital_id uuid references public.hospitals(id);

update public.doctors d
set hospital_id = (select h.id from public.hospitals h where h.active order by h.created_at limit 1)
where d.hospital_id is null;

alter table public.doctors
  alter column hospital_id set not null;

create index if not exists doctors_hospital_id_idx on public.doctors (hospital_id);

-- ---------------------------------------------------------------------------
-- 3. clinic_patients, medicine_prescriptions, prescriptions
-- ---------------------------------------------------------------------------
alter table public.clinic_patients
  add column if not exists hospital_id uuid references public.hospitals(id);

update public.clinic_patients cp
set hospital_id = d.hospital_id
from public.doctors d
where cp.registered_by = d.id
  and cp.hospital_id is null;

update public.clinic_patients cp
set hospital_id = (select h.id from public.hospitals h where h.active order by h.created_at limit 1)
where cp.hospital_id is null;

alter table public.clinic_patients
  alter column hospital_id set not null;

create index if not exists clinic_patients_hospital_created_idx
  on public.clinic_patients (hospital_id, created_at desc);

alter table public.medicine_prescriptions
  add column if not exists hospital_id uuid references public.hospitals(id);

update public.medicine_prescriptions mp
set hospital_id = d.hospital_id
from public.doctors d
where mp.doctor_id = d.id
  and mp.hospital_id is null;

update public.medicine_prescriptions mp
set hospital_id = (select h.id from public.hospitals h where h.active order by h.created_at limit 1)
where mp.hospital_id is null;

alter table public.medicine_prescriptions
  alter column hospital_id set not null;

create index if not exists medicine_prescriptions_hospital_created_idx
  on public.medicine_prescriptions (hospital_id, created_at desc);

alter table public.prescriptions
  add column if not exists hospital_id uuid references public.hospitals(id);

update public.prescriptions p
set hospital_id = d.hospital_id
from public.doctors d
where p.doctor_id = d.id
  and p.hospital_id is null;

update public.prescriptions p
set hospital_id = (select h.id from public.hospitals h where h.active order by h.created_at limit 1)
where p.hospital_id is null;

alter table public.prescriptions
  alter column hospital_id set not null;

-- ---------------------------------------------------------------------------
-- 4. Referrals: from / to hospital
-- ---------------------------------------------------------------------------
alter table public.referrals
  add column if not exists from_hospital_id uuid references public.hospitals(id);

alter table public.referrals
  add column if not exists to_hospital_id uuid references public.hospitals(id);

update public.referrals r
set from_hospital_id = d.hospital_id
from public.doctors d
where r.referring_doctor_id = d.id
  and r.from_hospital_id is null;

update public.referrals r
set to_hospital_id = r.from_hospital_id
where r.to_hospital_id is null
  and r.from_hospital_id is not null;

update public.referrals r
set from_hospital_id = (select h.id from public.hospitals h where h.active order by h.created_at limit 1),
    to_hospital_id = (select h.id from public.hospitals h where h.active order by h.created_at limit 1)
where r.from_hospital_id is null;

alter table public.referrals
  alter column from_hospital_id set not null;

alter table public.referrals
  alter column to_hospital_id set not null;

create index if not exists referrals_to_hospital_pending_idx
  on public.referrals (to_hospital_id, created_at desc)
  where status = 'pending';

create index if not exists referrals_from_hospital_created_idx
  on public.referrals (from_hospital_id, created_at desc);

-- ---------------------------------------------------------------------------
-- 5. Auth trigger: assign hospital on signup
-- ---------------------------------------------------------------------------
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  default_hid uuid;
  meta_hid uuid;
begin
  select h.id
  into default_hid
  from public.hospitals h
  where h.active = true
  order by h.created_at
  limit 1;

  meta_hid := null;
  if new.raw_user_meta_data ? 'hospital_id' then
    begin
      select h.id
      into meta_hid
      from public.hospitals h
      where h.id = (new.raw_user_meta_data->>'hospital_id')::uuid
        and h.active = true;
    exception
      when invalid_text_representation then
        meta_hid := null;
    end;
  end if;

  insert into public.doctors (id, full_name, clinic_name, phone, reg_no, hospital_id)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', 'Doctor'),
    new.raw_user_meta_data->>'clinic_name',
    coalesce(new.raw_user_meta_data->>'phone', ''),
    new.raw_user_meta_data->>'reg_no',
    coalesce(meta_hid, default_hid)
  )
  on conflict (id) do nothing;

  return new;
end;
$$;

-- ---------------------------------------------------------------------------
-- 6. Helper for RLS
-- ---------------------------------------------------------------------------
create or replace function public.current_hospital_id()
returns uuid
language sql
stable
security definer
set search_path = public
as $$
  select d.hospital_id from public.doctors d where d.id = auth.uid();
$$;

revoke all on function public.current_hospital_id() from public;
grant execute on function public.current_hospital_id() to authenticated;

-- ---------------------------------------------------------------------------
-- 7. Row Level Security updates
-- ---------------------------------------------------------------------------

-- clinic_patients: same-hospital staff see clinic queue / lookups
drop policy if exists "clinic_patients_select_own_registrations" on public.clinic_patients;
drop policy if exists "clinic_patients_select_same_hospital" on public.clinic_patients;
create policy "clinic_patients_select_same_hospital"
  on public.clinic_patients for select to authenticated
  using (hospital_id = public.current_hospital_id());

drop policy if exists "clinic_patients_insert_own" on public.clinic_patients;
create policy "clinic_patients_insert_own"
  on public.clinic_patients for insert to authenticated
  with check (
    registered_by = auth.uid()
    and hospital_id = public.current_hospital_id()
  );

-- referrals: sender or either hospital staff (read); updates typically via service role
drop policy if exists "referrals_select_referring" on public.referrals;
drop policy if exists "referrals_select_hospital_scope" on public.referrals;
create policy "referrals_select_hospital_scope"
  on public.referrals for select to authenticated
  using (
    referring_doctor_id = auth.uid()
    or from_hospital_id = public.current_hospital_id()
    or to_hospital_id = public.current_hospital_id()
  );

-- ---------------------------------------------------------------------------
-- 8. Hospitals catalog (read for referral picker)
-- ---------------------------------------------------------------------------
alter table public.hospitals enable row level security;

drop policy if exists "hospitals_select_active_authenticated" on public.hospitals;
create policy "hospitals_select_active_authenticated"
  on public.hospitals for select to authenticated
  using (active = true);
