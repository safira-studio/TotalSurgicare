-- =============================================================================
-- Diagnostic: money / settlements / multi-hospital readiness
-- Run in Supabase SQL Editor. Read the result rows (item / status / detail).
-- =============================================================================

with
expect_tables as (
  select unnest(array[
    'hospitals',
    'doctors',
    'referrals',
    'referral_settlements',
    'referral_settlement_terms',
    'referral_settlement_events'
  ]) as table_name
),
tbl as (
  select t.table_name
  from information_schema.tables t
  where t.table_schema = 'public'
    and t.table_type = 'BASE TABLE'
),
check_tables as (
  select
    e.table_name,
    case when tbl.table_name is not null then 'OK' else 'MISSING' end as status
  from expect_tables e
  left join tbl on tbl.table_name = e.table_name
),
docs_hosp as (
  select
    case when exists (
      select 1 from information_schema.columns c
      where c.table_schema = 'public' and c.table_name = 'doctors' and c.column_name = 'hospital_id'
    ) then 'OK' else 'MISSING' end as doctors_hospital_id
),
refs_pair as (
  select
    case when exists (
      select 1 from information_schema.columns c
      where c.table_schema = 'public' and c.table_name = 'referrals' and c.column_name = 'from_hospital_id'
    ) then 'OK' else 'MISSING' end as referrals_from_hospital_id,
    case when exists (
      select 1 from information_schema.columns c
      where c.table_schema = 'public' and c.table_name = 'referrals' and c.column_name = 'to_hospital_id'
    ) then 'OK' else 'MISSING' end as referrals_to_hospital_id
)
select 1 as sort, 'table:' || table_name as item, status,
  case when status = 'OK' then 'present' else 'run missing migration SQL from repo' end as detail
from check_tables

union all
select 2, 'column:doctors.hospital_id', doctors_hospital_id,
  case when doctors_hospital_id = 'OK' then 'present' else 'run multi_tenant_hospitals.sql' end
from docs_hosp

union all
select 3, 'column:referrals.from_hospital_id', referrals_from_hospital_id,
  case when referrals_from_hospital_id = 'OK' then 'present' else 'run multi_tenant_hospitals.sql' end
from refs_pair

union all
select 4, 'column:referrals.to_hospital_id', referrals_to_hospital_id,
  case when referrals_to_hospital_id = 'OK' then 'present' else 'run multi_tenant_hospitals.sql' end
from refs_pair

union all
select 5, 'data:hospitals_row_count', 'INFO',
  coalesce((select count(*)::text || ' rows' from public.hospitals), 'N/A')
where exists (select 1 from tbl where table_name = 'hospitals')

union all
select 6, 'data:hospital_slugs', 'INFO',
  coalesce((select string_agg(lower(trim(slug)), ', ' order by slug) from public.hospitals), 'none')
where exists (select 1 from tbl where table_name = 'hospitals')

union all
select 7, 'data:mock-hospital-b', 'INFO',
  case
    when exists (select 1 from tbl where table_name = 'hospitals')
      then coalesce(
        (select case when exists (
          select 1 from public.hospitals h where lower(trim(h.slug)) = 'mock-hospital-b'
        ) then 'present — OK for two-hospital tests' else 'MISSING — run seed_mock_second_hospital.sql' end),
        '?')
    else 'skipped'
  end

union all
select 8, 'data:test_users_hospitals', 'INFO',
  case
    when not exists (select 1 from tbl where table_name = 'doctors')
      then 'skipped — doctors table missing'
    else coalesce((
      select string_agg(u.email || ' → ' || coalesce(h.slug, '?'), '; ' order by u.email)
      from auth.users u
      left join public.doctors d on d.id = u.id
      left join public.hospitals h on h.id = d.hospital_id
      where lower(u.email) in (
        lower('totalsurgicare@gmail.com'),
        lower('faizanvit8@gmail.com')
      )
    ), 'no matching auth users or doctors row missing — sign in once per account')
  end

union all
select 9, 'data:settlement_terms_rows', 'INFO',
  coalesce((select count(*)::text || ' pair(s) configured' from public.referral_settlement_terms), 'N/A')
where exists (select 1 from tbl where table_name = 'referral_settlement_terms')

union all
select 10, 'data:settlement_terms_default_to_mock', 'INFO',
  case
    when not exists (select 1 from tbl where table_name = 'referral_settlement_terms')
      then 'skipped'
    when exists (
      select 1
      from public.referral_settlement_terms t
      join public.hospitals hf on hf.id = t.from_hospital_id
      join public.hospitals ht on ht.id = t.to_hospital_id
      where lower(trim(hf.slug)) = 'default' and lower(trim(ht.slug)) = 'mock-hospital-b'
    ) then 'present — amounts will compute for default→mock'
    else 'MISSING — insert referral_settlement_terms for default→mock (see testing instructions)'
  end

union all
select 11, 'data:referral_settlements_rows', 'INFO',
  coalesce((select count(*)::text || ' settlement(s)' from public.referral_settlements), 'N/A')
where exists (select 1 from tbl where table_name = 'referral_settlements')

union all
select 12, 'data:completed_cross_hospital_referrals', 'INFO',
  coalesce((
    select count(*)::text || ' completed (from≠to, any time)'
    from public.referrals r
    where r.status = 'completed'
      and r.from_hospital_id is not null
      and r.to_hospital_id is not null
      and r.from_hospital_id <> r.to_hospital_id
  ), 'N/A')
where exists (select 1 from tbl where table_name = 'referrals')

order by sort;
