-- =============================================================================
-- One-time migration: per-doctor medicines → clinic-wide shared medicines
-- Run ONLY if you already applied an older medicine_rx_setup.sql that had
-- medicines.doctor_id. Safe to re-run: drops old + new policy names before create.
-- =============================================================================

begin;

drop policy if exists "medicines_select_own" on public.medicines;
drop policy if exists "medicines_insert_own" on public.medicines;
drop policy if exists "medicines_select_authenticated" on public.medicines;
drop policy if exists "medicines_insert_authenticated" on public.medicines;

-- De-duplicate by name (case-insensitive), keep arbitrary surviving row
delete from public.medicines a
using public.medicines b
where a.id > b.id
  and lower(trim(a.name)) = lower(trim(b.name));

alter table public.medicines drop constraint if exists medicines_doctor_id_fkey;

drop index if exists medicines_doctor_name_lower_key;
drop index if exists medicines_doctor_id_idx;

-- CASCADE drops any remaining FKs / indexes tied to doctor_id if names differ.
alter table public.medicines drop column if exists doctor_id cascade;

create unique index if not exists medicines_name_lower_key
  on public.medicines (lower(trim(name)));

create policy "medicines_select_authenticated"
  on public.medicines for select to authenticated
  using (true);

create policy "medicines_insert_authenticated"
  on public.medicines for insert to authenticated
  with check (true);

commit;
