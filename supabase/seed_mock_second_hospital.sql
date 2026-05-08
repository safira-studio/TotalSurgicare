-- =============================================================================
-- DEV / QA ONLY — second onboarded hospital for cross-hospital referral tests
-- Run in Supabase SQL Editor after multi_tenant_hospitals.sql (hospitals table exists).
-- Safe to re-run: inserts only when slug mock-hospital-b is missing.
-- Remove or skip in production if you do not want a demo hospital row.
-- =============================================================================

insert into public.hospitals (name, slug, active)
select 'Doctor''s Hospital', 'mock-hospital-b', true
where not exists (
  select 1 from public.hospitals h where lower(trim(h.slug)) = 'mock-hospital-b'
);

-- Idempotent display-name refresh for databases seeded before rename.
update public.hospitals
set name = 'Doctor''s Hospital'
where lower(trim(slug)) = 'mock-hospital-b';

-- Optional: tie a second doctor account to Doctor's Hospital (slug mock-hospital-b) so you can log in as “the other site”.
-- 1) Create/sign up the second user in the app (or Auth → Users).
-- 2) Replace <USER_UUID> with auth.users.id and run:
--
-- update public.doctors
-- set hospital_id = (select id from public.hospitals where lower(trim(slug)) = 'mock-hospital-b' limit 1)
-- where id = '<USER_UUID>';
