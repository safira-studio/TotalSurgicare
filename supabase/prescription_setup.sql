-- =============================================================================
-- TotalSurgicare — Prescription Module: Supabase Setup SQL
-- Run this in the Supabase Dashboard → SQL Editor (or via supabase CLI)
-- Safe to re-run: policies are dropped before recreate.
-- =============================================================================

-- -----------------------------------------------------------------------
-- 1. doctors table (profile row per auth.users entry)
-- -----------------------------------------------------------------------
create table if not exists public.doctors (
  id                        uuid primary key references auth.users(id) on delete cascade,
  full_name                 text not null,
  clinic_name               text,
  phone                     text not null,          -- WhatsApp number (10 digits)
  reg_no                    text,
  letterhead_path           text,                   -- Storage path inside 'letterheads' bucket
  letterhead_has_doctor_info boolean not null default false,  -- true = letterhead already has name/clinic/contact printed; false = PDF overlay adds it
  created_at                timestamptz default now()
);

-- Migration for existing deployments (safe to run on an already-created table):
alter table if exists public.doctors
  add column if not exists letterhead_has_doctor_info boolean not null default false;

-- Horizontal offset (0–1 fraction of page width) for the doctor info block on
-- blank letterheads. Default 0.50 puts it right of centre, safely past most logos.
alter table if exists public.doctors
  add column if not exists doctor_header_xfrac float not null default 0.50;

-- Vertical offset (0–1 fraction of page height from top) for the doctor info block.
-- Default 0.04 = 4% from the top, sitting in the letterhead header band.
alter table if exists public.doctors
  add column if not exists doctor_header_yfrac float not null default 0.04;

comment on table public.doctors is
  'One row per registered doctor; mirrors auth.users via id FK.';

-- -----------------------------------------------------------------------
-- 2. prescriptions table
-- -----------------------------------------------------------------------
create table if not exists public.prescriptions (
  id             uuid primary key default gen_random_uuid(),
  doctor_id      uuid not null references public.doctors(id) on delete cascade,
  patient_name   text not null,
  patient_age    int,
  patient_mobile text not null,         -- 10 digits, no country code
  tests          jsonb not null default '[]'::jsonb,  -- array of test IDs
  pdf_path       text,                  -- Storage path inside 'prescriptions' bucket
  created_at     timestamptz default now()
);

comment on table public.prescriptions is
  'Each prescription created by a doctor for a patient.';

create index if not exists prescriptions_doctor_id_created_at_idx
  on public.prescriptions (doctor_id, created_at desc);

-- -----------------------------------------------------------------------
-- 3. Row Level Security
-- -----------------------------------------------------------------------
alter table public.doctors enable row level security;
alter table public.prescriptions enable row level security;

-- doctors: each doctor can read/update only their own row
drop policy if exists "doctors_select_own" on public.doctors;
create policy "doctors_select_own"
  on public.doctors for select
  using (id = auth.uid());

drop policy if exists "doctors_update_own" on public.doctors;
create policy "doctors_update_own"
  on public.doctors for update
  using (id = auth.uid())
  with check (id = auth.uid());

-- prescriptions: each doctor can insert and read only their own rows
drop policy if exists "prescriptions_select_own" on public.prescriptions;
create policy "prescriptions_select_own"
  on public.prescriptions for select
  using (doctor_id = auth.uid());

drop policy if exists "prescriptions_insert_own" on public.prescriptions;
create policy "prescriptions_insert_own"
  on public.prescriptions for insert
  with check (doctor_id = auth.uid());

-- -----------------------------------------------------------------------
-- 4. Trigger: auto-create doctors row on auth.users signup
--    The signup form passes profile data via options.data (raw_user_meta_data).
-- -----------------------------------------------------------------------
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.doctors (id, full_name, clinic_name, phone, reg_no)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', 'Doctor'),
    new.raw_user_meta_data->>'clinic_name',
    coalesce(new.raw_user_meta_data->>'phone', ''),
    new.raw_user_meta_data->>'reg_no'
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- -----------------------------------------------------------------------
-- 5. Storage buckets
--    Run these in Supabase Dashboard → Storage, or via the MCP / CLI.
--    SQL below works if you're using supabase_storage schema directly.
-- -----------------------------------------------------------------------

-- NOTE: Bucket creation via SQL is only supported in Supabase CLI / self-hosted.
-- For cloud Supabase, create the buckets manually in Dashboard → Storage:
--
--   Bucket name: letterheads     | Public: OFF  | File size limit: 4 MB
--   Bucket name: prescriptions   | Public: OFF  | File size limit: 20 MB
--
-- Then add the following Storage RLS policies (Dashboard → Storage → Policies):
--
-- For 'letterheads':
--   SELECT — (bucket_id = 'letterheads' and auth.uid()::text = (storage.foldername(name))[1])
--   INSERT — same condition
--   UPDATE — same condition
--   DELETE — same condition
--
-- For 'prescriptions':
--   SELECT — (bucket_id = 'prescriptions' and auth.uid()::text = (storage.foldername(name))[1])
--   INSERT — same condition
--
-- The prescriptions bucket is private; PDFs are served only via signed URLs.

-- -----------------------------------------------------------------------
-- 6. Auth settings reminder
-- -----------------------------------------------------------------------
-- Go to: Authentication → Providers → Email
--   ✅ Enable email sign-ups
--   ☐ Confirm email  (UNCHECK for MVP — re-enable before production)
--
-- This allows doctors to sign in immediately after signup.
