-- =============================================================================
-- Optional: seed ~30 common medicines into the shared catalog.
-- Run after medicine_rx_setup.sql. Safe to re-run (skips names already present).
-- =============================================================================

insert into public.medicines (name)
select v.name
from (
  values
    ('Paracetamol'),
    ('Ibuprofen'),
    ('Aspirin'),
    ('Diclofenac sodium'),
    ('Tramadol'),
    ('Amoxicillin'),
    ('Amoxicillin-clavulanic acid'),
    ('Azithromycin'),
    ('Cefixime'),
    ('Ciprofloxacin'),
    ('Metronidazole'),
    ('Doxycycline'),
    ('Clindamycin'),
    ('Omeprazole'),
    ('Pantoprazole'),
    ('Ondansetron'),
    ('Domperidone'),
    ('Cetirizine'),
    ('Levocetirizine'),
    ('Prednisolone'),
    ('Metformin'),
    ('Atorvastatin'),
    ('Amlodipine'),
    ('Losartan'),
    ('Salbutamol'),
    ('Multivitamin'),
    ('Vitamin B complex'),
    ('Iron & folic acid'),
    ('Calcium with vitamin D3'),
    ('Oral rehydration salts (ORS)')
) as v(name)
where not exists (
  select 1
  from public.medicines m
  where lower(trim(m.name)) = lower(trim(v.name))
);
