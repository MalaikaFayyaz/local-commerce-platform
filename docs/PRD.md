# PRD — Local Business Ordering Platform (Bakery Template)

**Version:** 1.0
**Status:** Draft
**Author:** Team
**Priority:** High

---

# 1. Vision

Build a modern, production-ready ordering platform for local businesses that enables customers to browse products, place pickup or delivery orders, and allows business owners to manage products and orders through a simple dashboard.

The first implementation targets bakeries, but the platform should be designed so that future businesses (cafés, restaurants, flower shops, sweet shops, etc.) can reuse the same codebase with minimal changes.

---

# 2. Problem Statement

Many local businesses either:

- have no online presence,
- rely entirely on WhatsApp,
- rely solely on Foodpanda,
- or only use social media.

Customers often need to:

- call the business,
- wait in queues,
- ask which products are available,
- manually place orders.

This creates friction for both customers and business owners.

The platform aims to simplify this process through a modern web experience.

---

# 3. Target Users

## Customer

A customer who wants to:

- browse products
- search products
- filter by category
- place an order
- schedule pickup
- optionally request delivery

---

## Business Owner

A business owner who wants to:

- manage products
- receive orders instantly
- prepare orders before customers arrive
- manage availability
- maintain an online presence

---

# 4. Goals

The platform should:

- Provide a beautiful modern storefront.
- Allow customers to order in minutes.
- Reduce customer waiting time.
- Increase convenience.
- Allow businesses to receive orders digitally.
- Be configurable for multiple businesses.
- Require minimal technical knowledge from business owners.

---

# 5. Non-Goals (Version 1)

The first version will NOT include:

- Customer accounts
- Online payments
- Loyalty points
- Reviews
- Coupons
- Inventory management
- Multi-branch support
- Analytics dashboard
- Live order tracking
- Delivery fleet management
- Foodpanda API integration

These may be considered in future versions.

---

# 6. Core Features

## Customer

### Browse Products

Customers can:

- browse all products
- view product details
- view pricing
- search products
- filter by category

---

### Shopping Cart

Customers can:

- add items
- remove items
- change quantities
- view total price

---

### Checkout

Customers choose:

- Pickup
or
- Delivery (optional module)

---

### Pickup

Customer provides:

- Name
- Phone Number
- Pickup Time
- Optional Notes

---

### Delivery

Customer provides:

- Name
- Phone Number
- Address
- Delivery Notes

This feature must be modular and easily disabled.

---

### Order Confirmation

Customer reviews:

- Products
- Quantities
- Total
- Pickup / Delivery information

Then confirms the order.

---

## Business Owner

### Dashboard

Business owners can:

- View incoming orders
- Update order status
- Manage products
- Manage categories
- Update business information
- Enable/Disable delivery
- Enable/Disable pickup

---

# 7. Functional Requirements

The system must:

- Display products from a database.
- Store customer orders.
- Store order items.
- Support categories.
- Support featured products.
- Support product availability.
- Support pickup scheduling.
- Notify the business when a new order is placed.
- Allow products to be managed without code changes.

---

# 8. Non-Functional Requirements

The platform should be:

- Responsive
- Mobile-first
- Fast
- Secure
- Accessible
- Easily deployable
- Easily customizable
- Scalable
- Maintainable

---

# 9. Configuration

The following should be configurable without modifying source code:

- Business name
- Logo
- Theme colors
- Contact information
- Address
- Opening hours
- WhatsApp number
- Pickup availability
- Delivery availability

---

# 10. MVP Success Criteria

A successful MVP allows a customer to:

1. Visit the website.
2. Browse products.
3. Add products to cart.
4. Choose pickup.
5. Select pickup time.
6. Submit the order.
7. Business receives the order.
8. Business prepares the order.
9. Customer arrives and pays.

---

# 11. Future Roadmap

Potential future features include:

- Online payments
- Customer accounts
- Saved addresses
- Order history
- Promotions
- Coupons
- Inventory tracking
- Multi-store support
- Delivery partner integrations
- AI product recommendations
- Sales analytics