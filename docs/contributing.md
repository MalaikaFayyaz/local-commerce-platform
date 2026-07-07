# CONTRIBUTING.md

# Contributing to Grandir

Version: 1.0

---

# Purpose

This document defines the engineering standards and development workflow for Grandir.

Whether the contributor is a human developer or an AI coding assistant, every contribution must follow these guidelines.

The primary goal is not to write code quickly.

The primary goal is to build software that is:

- Maintainable
- Readable
- Modular
- Predictable
- Easy to review

---

# Before Writing Code

Before starting any implementation, always read the following documents in order:

1. PRD.md
2. ENGINEERING.md
3. ARCHITECTURE.md
4. DATABASE.md
5. TASKS.md
6. SPRINTS.md

Do not begin implementation until the project requirements are understood.

---

# Development Philosophy

Grandir follows these principles:

- Simplicity over cleverness.
- Readability over brevity.
- Consistency over personal preference.
- Small, focused changes.
- Build only what is required for the current sprint.
- Never implement speculative features.

---

# Scope Control

Implement only the requested task.

Do not:

- Add unrelated features.
- Refactor unrelated files.
- Rename existing APIs without approval.
- Introduce unnecessary abstractions.
- Modify architecture decisions.

Every pull request or task should have one clear objective.

---

# Project Structure

Respect the existing folder structure.

Do not reorganize directories unless explicitly instructed.

New folders should only be created when required.

---

# Code Style

General rules:

- Prefer descriptive names.
- Avoid abbreviations.
- Keep functions focused on a single responsibility.
- Prefer composition over inheritance.
- Avoid deeply nested logic.
- Avoid duplicated code.

---

# Components

React components should:

- Have a single responsibility.
- Remain reusable.
- Avoid unnecessary state.
- Receive data through props where appropriate.

Large components should be split into smaller components.

---

# Database

The database design defined in DATABASE.md is the single source of truth.

Do not:

- Invent new tables.
- Rename columns.
- Change relationships.
- Change constraints.

Schema modifications require explicit approval.

---

# API

APIs should:

- Be predictable.
- Return consistent response formats.
- Handle errors gracefully.
- Validate all incoming data.

Never expose internal implementation details.

---

# Styling

Use:

- Tailwind CSS
- shadcn/ui components
- Responsive design

Avoid inline styles unless necessary.

---

# Error Handling

Every feature should consider:

- Loading state
- Empty state
- Error state

Do not assume requests always succeed.

---

# Accessibility

New UI should:

- Support keyboard navigation.
- Include accessible labels.
- Maintain sufficient contrast.
- Use semantic HTML.

Accessibility is part of the implementation, not an optional enhancement.

---

# Performance

Prefer:

- Lazy loading
- Memoization only when justified
- Efficient rendering
- Optimized images

Avoid premature optimization.

---

# Security

Never trust client input.

Validate all incoming data.

Do not expose:

- Environment variables
- Secrets
- Service keys

Use least-privilege principles.

---

# Git Workflow

Branch strategy:

main
└── develop
    └── feature/<feature-name>

Examples:

feature/navbar

feature/products

feature/cart

feature/orders

---

# Commit Messages

Use Conventional Commits.

Examples:

feat(products): load products from database

feat(cart): add quantity controls

fix(checkout): validate pickup time

refactor(ui): simplify product card

docs(database): update schema

style(layout): improve mobile spacing

---

# Definition of Done

A task is complete only if:

- The feature works.
- The application builds successfully.
- No existing functionality is broken.
- Code follows project conventions.
- Documentation is updated if required.

---

# AI Assistant Guidelines

AI assistants must:

- Read project documentation before coding.
- Respect existing architecture.
- Avoid unnecessary dependencies.
- Avoid generating placeholder implementations.
- Keep code modular.
- Keep changes minimal and focused.
- Explain non-obvious design decisions.

If uncertain, prefer asking for clarification instead of making assumptions.

---

# Review Checklist

Before considering a task complete:

- Does it satisfy the sprint objective?
- Does it solve only the assigned task?
- Is the code readable?
- Is the code modular?
- Are error cases handled?
- Is the UI responsive?
- Does it follow the project architecture?
- Can another developer understand it quickly?

If any answer is "No", the task is not complete.

---

# Grandir Engineering Principle

Every contribution should leave the project in a better state than it was found.

Small, thoughtful improvements are encouraged.

Large, unrelated changes are not.

Build software that the next developer—human or AI—can understand in minutes, not hours.