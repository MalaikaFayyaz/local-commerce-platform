-- ==========================================================
-- Grandir Initial Schema
-- Version: 1.1
-- ==========================================================

create extension if not exists pgcrypto;

-- ==========================================================
-- Settings
-- ==========================================================

create table settings (
    id uuid primary key default gen_random_uuid(),

    business_name text not null,
    description text,

    phone text,
    whatsapp text,
    email text,
    address text,

    logo_url text,
    hero_image_url text,

    pickup_enabled boolean not null default true,
    delivery_enabled boolean not null default true,

    opening_hours jsonb not null default '{}'::jsonb,
    social_links jsonb not null default '{}'::jsonb,

    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

-- ==========================================================
-- Categories
-- ==========================================================

create table categories (
    id uuid primary key default gen_random_uuid(),

    name text not null,
    description text,

    display_order integer not null default 0,

    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now(),

    constraint categories_name_unique unique (name),
    constraint categories_name_not_empty check (length(trim(name)) > 0)
);

-- ==========================================================
-- Products
-- ==========================================================

create table products (
    id uuid primary key default gen_random_uuid(),

    category_id uuid not null
        references categories(id)
        on delete restrict,

    name text not null,
    description text,

    price_in_paisa integer not null
        check (price_in_paisa >= 0),

    image_url text,

    featured boolean not null default false,
    available boolean not null default true,

    archived_at timestamptz,

    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now(),

    constraint products_name_not_empty check (length(trim(name)) > 0)
);

-- ==========================================================
-- Order Status
-- ==========================================================

create type order_status as enum (
    'pending',
    'preparing',
    'ready',
    'completed',
    'cancelled'
);

create type order_type as enum (
    'pickup',
    'delivery'
);

-- ==========================================================
-- Orders
-- ==========================================================

create table orders (
    id uuid primary key default gen_random_uuid(),

    customer_name text not null,
    customer_phone text not null,

    order_type order_type not null,

    pickup_time timestamptz,

    delivery_address text,
    delivery_notes text,

    total_price_in_paisa integer not null
        check (total_price_in_paisa >= 0),

    status order_status not null default 'pending',

    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now(),

    constraint customer_name_not_empty
        check (length(trim(customer_name)) > 0),

    constraint customer_phone_not_empty
        check (length(trim(customer_phone)) > 0),

    constraint pickup_requires_time
        check (
            order_type <> 'pickup'
            or pickup_time is not null
        ),

    constraint delivery_requires_address
        check (
            order_type <> 'delivery'
            or delivery_address is not null
        )
);

-- ==========================================================
-- Order Items
-- ==========================================================

create table order_items (
    id uuid primary key default gen_random_uuid(),

    order_id uuid not null
        references orders(id)
        on delete cascade,

    product_id uuid not null
        references products(id)
        on delete restrict,

    quantity integer not null
        check (quantity > 0),

    unit_price_in_paisa integer not null
        check (unit_price_in_paisa >= 0)
);

-- ==========================================================
-- Indexes
-- ==========================================================

create index idx_products_category
    on products(category_id);

create index idx_products_available
    on products(available);

create index idx_products_featured
    on products(featured);

create index idx_orders_status
    on orders(status);

create index idx_orders_created_at
    on orders(created_at);

create index idx_categories_display_order
    on categories(display_order);

create index idx_order_items_order
    on order_items(order_id);

create index idx_order_items_product
    on order_items(product_id);