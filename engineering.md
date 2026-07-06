# ENGINEERING.md

## Purpose

This document defines the engineering principles, architecture guidelines, and coding standards for this project.

It exists to ensure consistency across contributors—human or AI—and to prevent architectural drift as the project grows.

---

# Core Philosophy

This project is a configurable local business ordering platform.

The bakery implementation is only the first template.

Every engineering decision should maximize:

- Reusability
- Simplicity
- Maintainability
- Scalability

Avoid solving bakery-specific problems unless absolutely necessary.

---

# Engineering Principles

## 1. Simplicity over Cleverness

Choose the simplest solution that satisfies the requirement.

Avoid premature optimization.

Readable code is preferred over "smart" code.

---

## 2. Configuration over Hardcoding

Business-specific values must never be hardcoded.

Examples:

- Bakery Name
- Address
- Theme Colors
- Logo
- WhatsApp Number
- Opening Hours

must come from configuration or the database.

---

## 3. Reusable Components

If a component can be reused, make it reusable.

Avoid duplicate UI.

---

## 4. Separation of Concerns

Business logic must never live inside UI components.

Pages compose components.

Components render UI.

Hooks manage state.

Services communicate with external systems.

---

## 5. Mobile First

Every screen must be designed for mobile first.

Desktop layouts are enhancements.

---

## 6. Accessibility

Every interactive element must:

- have labels
- be keyboard accessible
- have sufficient contrast

Accessibility is a requirement, not an enhancement.

---

## 7. Type Safety

TypeScript strict mode should remain enabled.

Avoid `any`.

Prefer explicit types.

---

## 8. Performance

Do not optimize prematurely.

However:

- avoid unnecessary re-renders
- lazy load heavy assets
- optimize images

---

# Project Goals

The codebase should be:

- modular
- readable
- reusable
- production ready

---

# AI Collaboration Guidelines

LLMs are assistants, not architects.

AI should:

- implement requested features
- respect existing architecture
- avoid unnecessary refactoring
- ask for clarification if requirements are ambiguous

AI must NOT:

- rewrite unrelated code
- rename files without reason
- introduce new libraries without approval
- change architecture
- remove existing functionality

---

# Folder Organization

The project should remain feature-oriented.

Example:

src/

components/

features/

hooks/

services/

lib/

types/

pages/

assets/

config/

---

# Component Guidelines

Components should:

- have a single responsibility
- receive data through props
- avoid business logic
- remain reusable

---

# State Management

Prefer:

React Context

for global application state.

Avoid introducing external state libraries unless justified.

---

# Database

The database is the source of truth.

Do not duplicate business data in code.

All product information should come from the database.

---

# API Communication

Database communication should be isolated.

UI components should never directly contain database logic.

Use services or dedicated data hooks.

---

# Styling

Use Tailwind CSS.

Prefer reusable utility patterns.

Avoid large custom CSS files.

---

# Error Handling

Handle:

- loading
- empty
- success
- failure

states for all asynchronous operations.

Never silently ignore errors.

---

# Logging

Console logging should not remain in production code.

Use meaningful error reporting.

---

# Security

Never expose secrets.

Never commit API keys.

Validate all user input.

Follow the principle of least privilege.

---

# Feature Flags

Major functionality should be configurable.

Example:

Pickup Enabled

Delivery Enabled

Future features should be toggleable where practical.

---

# Definition of Done

A feature is complete only if:

- functionality works
- responsive
- accessible
- typed
- tested manually
- documented if necessary
- no TypeScript errors
- no ESLint errors

---

# Future Contributors

Before implementing any feature:

1. Read PRD.md
2. Read ENGINEERING.md
3. Understand existing architecture
4. Reuse before creating new components
5. Keep the codebase clean