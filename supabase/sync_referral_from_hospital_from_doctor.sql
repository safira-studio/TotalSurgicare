-- =============================================================================
-- Fix referrals.from_hospital_id when it drifted from referring doctor’s tenant
-- (e.g. hospital reassignment). Safe to re-run.
-- After fixing referrals: delete pending referral_settlements rows for affected months
-- and run “Close month” again if amounts/counts must match.
-- =============================================================================

update public.referrals r
set from_hospital_id = d.hospital_id,
    updated_at = now()
from public.doctors d
where r.referring_doctor_id = d.id
  and r.from_hospital_id is distinct from d.hospital_id;
