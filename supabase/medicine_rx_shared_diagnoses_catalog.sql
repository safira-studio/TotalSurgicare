-- =============================================================================
-- TotalSurgicare — Shared diagnoses catalog (same model as public.medicines)
--
-- One clinic-wide table: no doctor_id. When any doctor adds a row, every
-- other doctor sees it in search (OPD prescribing uses /api/diagnoses).
--
-- Parity with medicines:
--   • id (uuid), name (text), created_at (timestamptz)
--   • unique on lower(trim(name)) so duplicate spellings collapse
--   • RLS: authenticated may SELECT all rows, INSERT new rows (no per-doctor filter)
--
-- Run in Supabase SQL Editor when you want diagnoses-only setup, or after any
-- partial install. Safe to re-run (drops named policies before recreate).
--
-- If you have not run medicine_rx_setup.sql yet, you can run this file alone
-- for the catalog; you still need medicine_rx_setup.sql (or
-- medicine_rx_complaints_diagnoses.sql) for medicine_prescriptions.diagnoses_lines.
-- =============================================================================

create table if not exists public.diagnoses (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  created_at  timestamptz not null default now()
);

create unique index if not exists diagnoses_name_lower_key
  on public.diagnoses (lower(trim(name)));

comment on table public.diagnoses is
  'Shared diagnosis dictionary for the clinic (like medicines); visible to all authenticated doctors.';

alter table public.diagnoses enable row level security;

-- Align with medicines_* policy naming and behavior
drop policy if exists "diagnoses_select_own" on public.diagnoses;
drop policy if exists "diagnoses_insert_own" on public.diagnoses;
drop policy if exists "diagnoses_select_authenticated" on public.diagnoses;
drop policy if exists "diagnoses_insert_authenticated" on public.diagnoses;

create policy "diagnoses_select_authenticated"
  on public.diagnoses for select
  to authenticated
  using (true);

create policy "diagnoses_insert_authenticated"
  on public.diagnoses for insert
  to authenticated
  with check (true);
