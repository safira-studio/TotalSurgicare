-- Optional: common diagnoses for OPD search. Run after diagnoses table exists.
-- Safe to re-run.

insert into public.diagnoses (name)
select v.name
from (
  values
    ('Acute gastroenteritis'),
    ('Hypertension'),
    ('Type 2 diabetes mellitus'),
    ('Acute pharyngitis'),
    ('Upper respiratory tract infection'),
    ('Migraine'),
    ('Osteoarthritis'),
    ('Acute bronchitis'),
    ('Urinary tract infection'),
    ('Anaemia'),
    ('Hypothyroidism'),
    ('Acute stroke — ischaemic'),
    ('Acute stroke — haemorrhagic'),
    ('Acute coronary syndrome'),
    ('Pneumonia'),
    ('Acute appendicitis'),
    ('Peptic ulcer disease'),
    ('Chronic kidney disease'),
    ('Bronchial asthma'),
    ('Acute pancreatitis')
) as v(name)
where not exists (
  select 1 from public.diagnoses d
  where lower(trim(d.name)) = lower(trim(v.name))
);
