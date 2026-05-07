-- =============================================================================
-- TotalSurgicare — Cash referral settlements (monthly, OTP handshake)
-- Run AFTER: multi_tenant_hospitals.sql, referrals_tracking.sql
-- Safe to re-run: uses IF NOT EXISTS / DROP POLICY IF EXISTS where applicable.
-- =============================================================================

-- ---------------------------------------------------------------------------
-- 1. referral_settlement_terms (pricing per hospital pair)
-- ---------------------------------------------------------------------------
create table if not exists public.referral_settlement_terms (
  id                uuid primary key default gen_random_uuid(),
  from_hospital_id   uuid not null references public.hospitals(id) on delete cascade,
  to_hospital_id     uuid not null references public.hospitals(id) on delete cascade,
  pricing_mode       text not null check (pricing_mode in ('per_referral', 'flat_monthly')),
  rate_minor         bigint not null default 0,
  flat_amount_minor  bigint,
  updated_at         timestamptz not null default now(),
  constraint referral_settlement_terms_unique_pair unique (from_hospital_id, to_hospital_id),
  constraint referral_settlement_terms_mode_check check (
    (pricing_mode = 'per_referral' and rate_minor >= 0 and flat_amount_minor is null)
    or (pricing_mode = 'flat_monthly' and flat_amount_minor is not null and flat_amount_minor >= 0)
  )
);

create index if not exists referral_settlement_terms_from_idx
  on public.referral_settlement_terms (from_hospital_id);

create index if not exists referral_settlement_terms_to_idx
  on public.referral_settlement_terms (to_hospital_id);

-- ---------------------------------------------------------------------------
-- 2. referral_settlements (monthly frozen snapshot + OTP lifecycle)
-- ---------------------------------------------------------------------------
create table if not exists public.referral_settlements (
  id                    uuid primary key default gen_random_uuid(),
  from_hospital_id       uuid not null references public.hospitals(id) on delete cascade,
  to_hospital_id         uuid not null references public.hospitals(id) on delete cascade,
  period_month           text not null,
  referral_count         integer not null check (referral_count >= 0),
  amount_minor           bigint not null check (amount_minor >= 0),
  status                text not null default 'pending_cash'
    check (status in ('pending_cash', 'settled', 'disputed')),

  otp_hash               text,
  otp_salt               text,
  otp_expires_at         timestamptz,
  otp_issued_at          timestamptz,
  otp_issued_by          uuid references auth.users(id) on delete set null,
  otp_consumed_at        timestamptz,
  otp_confirm_failures   integer not null default 0 check (otp_confirm_failures >= 0),
  otp_lock_until         timestamptz,

  closed_at              timestamptz not null default now(),
  closed_by              uuid references auth.users(id) on delete set null,
  settled_at             timestamptz,
  settled_by             uuid references auth.users(id) on delete set null,
  disputed_at            timestamptz,
  disputed_by            uuid references auth.users(id) on delete set null,

  created_at             timestamptz not null default now(),
  updated_at             timestamptz not null default now(),

  constraint referral_settlements_period_format check (
    period_month ~ '^[0-9]{4}-(0[1-9]|1[0-2])$'
  ),
  constraint referral_settlements_unique_month unique (from_hospital_id, to_hospital_id, period_month),
  constraint referral_settlements_otp_pairing check (
    (otp_hash is null and otp_salt is null) or (otp_hash is not null and otp_salt is not null)
  ),
  constraint referral_settlements_otp_times check (
    otp_expires_at is null or otp_issued_at is null or otp_expires_at > otp_issued_at
  )
);

create index if not exists referral_settlements_to_period_idx
  on public.referral_settlements (to_hospital_id, period_month);

create index if not exists referral_settlements_from_period_idx
  on public.referral_settlements (from_hospital_id, period_month);

-- ---------------------------------------------------------------------------
-- 3. referral_settlement_events (append-only audit)
-- ---------------------------------------------------------------------------
create table if not exists public.referral_settlement_events (
  id             uuid primary key default gen_random_uuid(),
  settlement_id  uuid not null references public.referral_settlements(id) on delete cascade,
  actor_user_id  uuid references auth.users(id) on delete set null,
  event_type     text not null,
  payload        jsonb not null default '{}'::jsonb,
  created_at     timestamptz not null default now()
);

create index if not exists referral_settlement_events_settlement_created_idx
  on public.referral_settlement_events (settlement_id, created_at desc);

-- ---------------------------------------------------------------------------
-- 4. RLS (authenticated SELECT only; all writes via service role)
-- ---------------------------------------------------------------------------
alter table public.referral_settlement_terms enable row level security;
alter table public.referral_settlements enable row level security;
alter table public.referral_settlement_events enable row level security;

drop policy if exists "referral_settlement_terms_select_hospital_scope" on public.referral_settlement_terms;
create policy "referral_settlement_terms_select_hospital_scope"
  on public.referral_settlement_terms for select to authenticated
  using (
    from_hospital_id = public.current_hospital_id()
    or to_hospital_id = public.current_hospital_id()
  );

drop policy if exists "referral_settlements_select_hospital_scope" on public.referral_settlements;
create policy "referral_settlements_select_hospital_scope"
  on public.referral_settlements for select to authenticated
  using (
    from_hospital_id = public.current_hospital_id()
    or to_hospital_id = public.current_hospital_id()
  );

drop policy if exists "referral_settlement_events_select_hospital_scope" on public.referral_settlement_events;
create policy "referral_settlement_events_select_hospital_scope"
  on public.referral_settlement_events for select to authenticated
  using (
    exists (
      select 1
      from public.referral_settlements s
      where s.id = settlement_id
        and (
          s.from_hospital_id = public.current_hospital_id()
          or s.to_hospital_id = public.current_hospital_id()
        )
    )
  );

-- Avoid accidental grants: RLS denies INSERT/UPDATE/DELETE to authenticated by default.
revoke all on table public.referral_settlement_terms from authenticated;
revoke all on table public.referral_settlements from authenticated;
revoke all on table public.referral_settlement_events from authenticated;

