# ARCHITECTURE.md

# Local Business Ordering Platform

Version: 1.0

---

# Overview

The application follows a layered architecture designed to separate concerns and maximize maintainability.

The primary goals are:

- Modularity
- Reusability
- Testability
- Scalability

Business logic must remain independent of UI implementation.

---

# High-Level Architecture

                   Browser
                      │
                      ▼
             React Frontend (UI)
                      │
                      ▼
          Application / Business Layer
                      │
                      ▼
             Service / Data Layer
                      │
                      ▼
                 Supabase API
                      │
                      ▼
              PostgreSQL Database

Notifications:

Database
    │
    ▼
Automation (n8n / Make)
    │
    ▼
WhatsApp / Email / SMS

---

# Layers

## 1. Presentation Layer

Responsible for:

- Pages
- Components
- Layout
- Forms
- Styling

Responsibilities:

- Display data
- Collect user input
- Never contain business rules
- Never directly communicate with the database

---

## 2. Business Layer

Responsible for:

- Checkout flow
- Cart calculations
- Order validation
- Business rules

Examples:

- Calculate totals
- Validate pickup time
- Determine delivery availability

This layer contains application logic.

---

## 3. Data Layer

Responsible for:

- Fetching products
- Creating orders
- Updating products
- Authentication
- Storage

Only this layer communicates with Supabase.

---

## 4. Infrastructure Layer

Responsible for:

- Database
- Authentication
- File Storage
- Notifications
- Deployment

Infrastructure should remain replaceable.

---

# Modules

The application consists of independent modules.

Modules should communicate through clearly defined interfaces.

Modules include:

- Storefront
- Cart
- Checkout
- Orders
- Products
- Categories
- Admin Dashboard
- Settings
- Authentication
- Notifications

Future modules:

- Payments
- Reviews
- Promotions
- Analytics

---

# Feature Flags

Major functionality must be configurable.

Feature flags include:

- Pickup Enabled
- Delivery Enabled

Disabling one feature MUST NOT affect others.

---

# Project Structure

src/

    app/

    components/

    features/

        cart/

        checkout/

        products/

        orders/

        admin/

    hooks/

    services/

    lib/

    types/

    utils/

    assets/

    config/

---

# Feature Structure

Each feature should contain its own:

feature/

    components/

    hooks/

    services/

    types/

    utils/

Avoid large shared folders unless necessary.

---

# Data Flow

Customer Action

↓

React Component

↓

Feature Hook

↓

Service

↓

Supabase

↓

Database

↓

Response

↓

UI Update

---

# State Management

Local State

↓

React Hooks

Shared State

↓

React Context

Avoid unnecessary global state.

---

# Database Principles

Database is the single source of truth.

Never duplicate business data.

Products

Categories

Orders

Settings

must always originate from the database.

---

# Routing

Public Routes

/

Products

About

Contact

Checkout

Admin Routes

/admin

/admin/products

/admin/orders

/admin/settings

---

# Error Handling

Every async request must support:

Loading

Empty

Success

Failure

The user should never encounter a blank screen.

---

# Configuration

Business-specific information must come from configuration or database.

Never hardcode:

Business Name

Phone

Address

Logo

Theme

Opening Hours

---

# Notifications

The application should not send WhatsApp or Email directly.

Instead:

Application

↓

Database

↓

Automation Platform

↓

Notification Service

This keeps notification providers replaceable.

---

# Security Principles

Validate all input.

Use HTTPS.

Never expose secrets.

Protect admin routes.

Least privilege database permissions.

---

# Deployment

Frontend:

Vercel

Backend:

Supabase

Automation:

n8n / Make

Monitoring:

Future

---

# Scalability Goals

Future versions should support:

Multiple businesses

Multiple branches

Multiple themes

Additional ordering methods

Online payments

Delivery integrations

Without requiring major architectural changes.