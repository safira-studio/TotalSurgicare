-- =============================================================================
-- One-off: map two auth users to hospitals by email (run in Supabase SQL Editor)
-- Requires: seed_mock_second_hospital.sql already applied (mock-hospital-b exists)
-- =============================================================================

-- Hospital A (first login): default site
update public.doctors d
set hospital_id = (
  select h.id from public.hospitals h
  where lower(trim(h.slug)) = 'default'
  limit 1
)
where d.id = (
  select u.id from auth.users u
  where lower(u.email) = lower('totalsurgicare@gmail.com')
);

-- Hospital B (second login): mock testing hospital
update public.doctors d
set hospital_id = (
  select h.id from public.hospitals h
  where lower(trim(h.slug)) = 'mock-hospital-b'
  limit 1
)
where d.id = (
  select u.id from auth.users u
  where lower(u.email) = lower('faizanvit8@gmail.com')
);

-- Verify (should show two rows with different slugs)
select u.email, d.full_name, h.slug, h.name
from public.doctors d
join auth.users u on u.id = d.id
join public.hospitals h on h.id = d.hospital_id
where lower(u.email) in (
  lower('totalsurgicare@gmail.com'),
  lower('faizanvit8@gmail.com')
)
order by u.email;
