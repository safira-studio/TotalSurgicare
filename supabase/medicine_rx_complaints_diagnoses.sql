-- =============================================================================
-- OPD chart: complaints (text) + shared diagnoses catalog + diagnoses_lines jsonb
-- Run in Supabase SQL Editor after medicine_rx_setup.sql. Safe to re-run.
-- =============================================================================

-- Shared diagnosis dictionary (clinic-wide, like medicines)
create table if not exists public.diagnoses (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  created_at  timestamptz not null default now()
);

create unique index if not exists diagnoses_name_lower_key
  on public.diagnoses (lower(trim(name)));

comment on table public.diagnoses is
  'Shared diagnosis labels for OPD prescribing; searchable by all authenticated doctors.';

alter table public.medicine_prescriptions
  add column if not exists complaints text;

alter table public.medicine_prescriptions
  add column if not exists diagnoses_lines jsonb not null default '[]'::jsonb;

comment on column public.medicine_prescriptions.complaints is
  'Chief complaints / narrative for the visit (typed or transcribed).';

comment on column public.medicine_prescriptions.diagnoses_lines is
  'JSON array: [{ "diagnosis_id": uuid, "name": "..." }, ...]';

alter table public.diagnoses enable row level security;

drop policy if exists "diagnoses_select_authenticated" on public.diagnoses;
create policy "diagnoses_select_authenticated"
  on public.diagnoses for select to authenticated
  using (true);

drop policy if exists "diagnoses_insert_authenticated" on public.diagnoses;
create policy "diagnoses_insert_authenticated"
  on public.diagnoses for insert to authenticated
  with check (true);
