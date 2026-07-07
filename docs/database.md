# DATABASE.md

# Grandir Database Design

**Version:** 1.0

---

# Philosophy

Grandir is designed around one simple principle:

> Store only the data necessary to operate the business.

The database should remain:

- Simple
- Portable
- Vendor-independent
- Easy to understand
- Easy to backup
- Easy to migrate
- Optimized for small businesses

The MVP supports **one business per deployment**. Each client receives their own Grandir instance.

Business owners should never need technical knowledge to manage their data.

---

# Design Principles

The database must follow these principles:

- Normalize data where practical.
- Avoid duplicate information.
- Store relationships explicitly.
- Configuration belongs in the database, not in code.
- Store image URLs instead of image files.
- Prices must never be stored as floating-point values.
- Prefer simple schemas over premature optimization.
- Design for maintainability rather than complexity.

---

# Bounded Contexts

The MVP consists of three logical domains.

```text
Configuration
└── Settings

Catalog
├── Categories
└── Products

Ordering
├── Orders
└── OrderItems
```

---

# Logical Schema

## Settings

Stores all configurable business information.

| Field | Type | Notes |
|--------|------|------|
| id | INTEGER | Primary Key |
| business_name | TEXT | |
| description | TEXT | |
| phone | TEXT | |
| whatsapp | TEXT | |
| email | TEXT | |
| address | TEXT | |
| logo_url | TEXT | |
| hero_image_url | TEXT | |
| pickup_enabled | BOOLEAN | |
| delivery_enabled | BOOLEAN | |
| opening_hours | JSON | Future-friendly |
| social_links | JSON | Future-friendly |
| created_at | TIMESTAMP | |
| updated_at | TIMESTAMP | |

---

## Categories

Groups products into logical collections.

Examples:

- Cakes
- Bread
- Cookies
- Pastries
- Drinks

| Field | Type | Notes |
|--------|------|------|
| id | INTEGER | Primary Key |
| name | TEXT | |
| description | TEXT | |
| display_order | INTEGER | |
| created_at | TIMESTAMP | |

---

## Products

Stores products available for purchase.

| Field | Type | Notes |
|--------|------|------|
| id | INTEGER | Primary Key |
| category_id | INTEGER | Foreign Key |
| name | TEXT | |
| description | TEXT | |
| price_in_paisa | INTEGER | Store smallest currency unit |
| image_url | TEXT | |
| featured | BOOLEAN | |
| available | BOOLEAN | Controls storefront visibility |
| created_at | TIMESTAMP | |
| updated_at | TIMESTAMP | |

Notes:

- Products are loaded dynamically.
- Products are never hardcoded.
- Products should never be physically deleted.

---

## Orders

Stores customer orders.

| Field | Type | Notes |
|--------|------|------|
| id | INTEGER | Primary Key |
| customer_name | TEXT | |
| customer_phone | TEXT | |
| order_type | ENUM | Pickup / Delivery |
| pickup_time | TIMESTAMP | Nullable for delivery |
| delivery_address | TEXT | Nullable for pickup |
| delivery_notes | TEXT | Optional |
| total_price_in_paisa | INTEGER | Calculated total |
| status | ENUM | See status values |
| created_at | TIMESTAMP | |

Order Types:

- Pickup
- Delivery

Status Values:

- Pending
- Preparing
- Ready
- Completed
- Cancelled

---

## OrderItems

Stores products belonging to each order.

| Field | Type | Notes |
|--------|------|------|
| id | INTEGER | Primary Key |
| order_id | INTEGER | Foreign Key |
| product_id | INTEGER | Foreign Key |
| quantity | INTEGER | |
| unit_price_in_paisa | INTEGER | Snapshot price at purchase |

Reason:

One order contains multiple products.

One product appears in many orders.

OrderItems resolve this many-to-many relationship.

---

# Relationships

```text
Categories
      │
      ▼
Products
      │
      ▼
OrderItems
      ▲
      │
Orders

Settings
│
└── Configures the entire application
```

---

# Database Invariants

The following rules must always hold true.

- There is exactly one Settings record.
- Every Product belongs to one Category.
- Every Order contains at least one OrderItem.
- Product prices are stored as integers (smallest currency unit).
- Order totals equal the sum of their OrderItems.
- Products are never physically deleted.
- Product visibility is controlled using the `available` flag.
- Completed orders remain immutable except for administrative status corrections.

---

# Constraints

## Products

- Must belong to one Category.
- Price cannot be negative.
- Name cannot be empty.

---

## Categories

- Category names should be unique.

---

## Orders

- Must contain at least one OrderItem.
- Pickup orders require a pickup time.
- Delivery orders require a delivery address.
- Total price must equal the sum of OrderItems.

---

## Settings

- Exactly one Settings record exists.
- Pickup and Delivery may be independently enabled or disabled.

---

# Indexing Strategy

The following fields should be indexed.

## Products

- category_id
- available
- featured

---

## Orders

- status
- created_at

---

## Categories

- display_order

Indexes should optimize common customer and admin queries.

---

# Data Lifecycle

## Products

```text
Created
    │
    ▼
Updated
    │
    ▼
Available / Unavailable
    │
    ▼
Archived (Future)
```

---

## Orders

```text
Pending
    │
    ▼
Preparing
    │
    ▼
Ready
    │
    ▼
Completed
```

Cancelled orders may occur from any active state.

---

# Migration Roadmap

## Version 1

- Settings
- Categories
- Products
- Orders
- OrderItems

---

## Version 2

- Customers
- Saved Addresses

---

## Version 3

- Payments
- Transactions

---

## Version 4

- Inventory
- Suppliers

---

## Version 5

- Analytics
- Reporting
- Promotions
- Coupons

---

# Database Goals

The Grandir database should remain:

- Easy to understand
- Easy to query
- Easy to maintain
- Easy to migrate
- Efficient for small businesses
- Flexible enough for future growth

No table should exist unless it solves a real business problem.

The database should prioritize clarity, correctness, and long-term maintainability over unnecessary complexity.