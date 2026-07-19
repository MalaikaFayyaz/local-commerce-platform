-- ==========================================================
-- Row Level Security
-- ==========================================================

-- Enable RLS

alter table settings enable row level security;
alter table categories enable row level security;
alter table products enable row level security;
alter table orders enable row level security;
alter table order_items enable row level security;

-- ==========================================================
-- Public Read Access
-- ==========================================================

create policy "Public can read settings"
on settings
for select
using (true);

create policy "Public can read categories"
on categories
for select
using (true);

create policy "Public can read available products"
on products
for select
using (
    available
    and archived_at is null
);