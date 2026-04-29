-- Run once if clinic_patients exists but medicine_rx_done_at is missing
-- (e.g. you installed medicine_rx before the doctor queue feature).

alter table public.clinic_patients
  add column if not exists medicine_rx_done_at timestamptz null;

comment on column public.clinic_patients.medicine_rx_done_at is
  'Set when a medicine prescription is issued; hides this visit from the daily Medicine Rx queue.';
