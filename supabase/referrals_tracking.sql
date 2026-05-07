-- Referral tracking: outbound referrals from medicine Rx (OPD) with completion by
-- magic link (completion_token) or by logged-in doctor whose profile phone matches target.
-- Run in Supabase SQL Editor after medicine_rx_setup.sql. Safe to re-run (IF NOT EXISTS).

-- ---------------------------------------------------------------------------
-- 1. Persist referral fields on medicine_prescriptions (for PDF re-issue / audit)
-- ---------------------------------------------------------------------------
alter table public.medicine_prescriptions
  add column if not exists referral_name text;

alter table public.medicine_prescriptions
  add column if not exists referral_mobile text;

comment on column public.medicine_prescriptions.referral_name is
  'Referred-to doctor display name at time of Rx (optional).';

comment on column public.medicine_prescriptions.referral_mobile is
  'Referred-to doctor mobile at time of Rx, normalized 10-digit Indian (optional).';

-- ---------------------------------------------------------------------------
-- 2. referrals
-- ---------------------------------------------------------------------------
create table if not exists public.referrals (
  id                      uuid primary key default gen_random_uuid(),
  medicine_prescription_id uuid references public.medicine_prescriptions(id) on delete set null,
  referring_doctor_id     uuid not null references public.doctors(id) on delete cascade,
  referring_doctor_name   text not null,
  referring_clinic_name   text,
  patient_name            text not null,
  patient_mobile          text,
  target_doctor_name      text not null,
  target_doctor_mobile    text not null,
  diagnoses_summary       text not null default '',
  complaints_snippet      text,
  public_code             text not null,
  completion_token        uuid not null default gen_random_uuid(),
  status                  text not null default 'pending'
    check (status in ('pending', 'completed', 'cancelled')),
  completed_at            timestamptz,
  created_at              timestamptz not null default now(),
  updated_at              timestamptz not null default now()
);

create unique index if not exists referrals_public_code_key
  on public.referrals (public_code);

create unique index if not exists referrals_completion_token_key
  on public.referrals (completion_token);

create index if not exists referrals_referring_doctor_created_idx
  on public.referrals (referring_doctor_id, created_at desc);

create index if not exists referrals_target_mobile_idx
  on public.referrals (target_doctor_mobile)
  where status = 'pending';

create index if not exists referrals_patient_mobile_idx
  on public.referrals (patient_mobile)
  where status = 'pending';

comment on table public.referrals is
  'Tracks specialist referrals from OPD medicine prescriptions; completion via secure token or inbound desk.';

-- ---------------------------------------------------------------------------
-- 3. referral_notifications (referring doctor inbox)
-- ---------------------------------------------------------------------------
create table if not exists public.referral_notifications (
  id           uuid primary key default gen_random_uuid(),
  doctor_id    uuid not null references public.doctors(id) on delete cascade,
  referral_id  uuid not null references public.referrals(id) on delete cascade,
  read_at      timestamptz,
  created_at   timestamptz not null default now()
);

create index if not exists referral_notifications_doctor_unread_idx
  on public.referral_notifications (doctor_id, created_at desc)
  where read_at is null;

create unique index if not exists referral_notifications_referral_unique
  on public.referral_notifications (referral_id);

comment on table public.referral_notifications is
  'One row per completed referral; referring doctor marks read from dashboard.';

-- ---------------------------------------------------------------------------
-- 4. Row Level Security (browser access only for own rows; server uses service role)
-- ---------------------------------------------------------------------------
alter table public.referrals enable row level security;

drop policy if exists "referrals_select_referring" on public.referrals;
create policy "referrals_select_referring"
  on public.referrals for select to authenticated
  using (referring_doctor_id = auth.uid());

alter table public.referral_notifications enable row level security;

drop policy if exists "referral_notifications_select_own" on public.referral_notifications;
create policy "referral_notifications_select_own"
  on public.referral_notifications for select to authenticated
  using (doctor_id = auth.uid());

drop policy if exists "referral_notifications_update_own" on public.referral_notifications;
create policy "referral_notifications_update_own"
  on public.referral_notifications for update to authenticated
  using (doctor_id = auth.uid())
  with check (doctor_id = auth.uid());
