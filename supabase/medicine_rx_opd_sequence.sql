-- =============================================================================
-- Add OPD-0001, OPD-0002, … sequential visit IDs (for DBs that already ran an
-- older medicine_rx_setup.sql). Safe to re-run.
-- =============================================================================

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
