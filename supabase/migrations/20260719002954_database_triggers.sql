-- ==========================================================
-- Grandir Database Triggers
-- Version: 1.0
-- ==========================================================

-- ==========================================================
-- Automatically update updated_at columns
-- ==========================================================

create or replace function update_updated_at_column()
returns trigger
language plpgsql
as $$
begin
    new.updated_at = now();
    return new;
end;
$$;

-- ==========================================================
-- Settings
-- ==========================================================

create trigger settings_updated_at
before update on settings
for each row
execute function update_updated_at_column();

-- ==========================================================
-- Categories
-- ==========================================================

create trigger categories_updated_at
before update on categories
for each row
execute function update_updated_at_column();

-- ==========================================================
-- Products
-- ==========================================================

create trigger products_updated_at
before update on products
for each row
execute function update_updated_at_column();

-- ==========================================================
-- Orders
-- ==========================================================

create trigger orders_updated_at
before update on orders
for each row
execute function update_updated_at_column();

-- ==========================================================
-- Recalculate Order Total
-- ==========================================================

create or replace function update_order_total()
returns trigger
language plpgsql
as $$
declare
    target_order_id uuid;
begin
    -- Figure out which order changed
    if tg_op = 'DELETE' then
        target_order_id := old.order_id;
    else
        target_order_id := new.order_id;
    end if;

    -- Update the order total
    update orders
    set
        total_price_in_paisa = (
            select coalesce(sum(quantity * unit_price_in_paisa), 0)
            from order_items
            where order_id = target_order_id
        )
    where id = target_order_id;

    return null;
end;
$$;

-- ==========================================================
-- Order Total Trigger
-- ==========================================================

create trigger order_total_changed
after insert or update or delete
on order_items
for each row
execute function update_order_total();