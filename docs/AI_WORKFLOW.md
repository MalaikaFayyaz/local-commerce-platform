# AI_WORKFLOW.md

# Grandir AI Engineering Workflow

Version: 1.0

---

# Purpose

This document defines how AI assistants are used throughout the Grandir project.

The goal is to achieve consistent, reviewable, production-quality implementations while maintaining clean Git history and high engineering standards.

AI assistants are implementation tools.

They are not responsible for product decisions.

---

# Team Roles

## Product Lead

Responsible for:

- Product vision
- Feature prioritization
- Final approval
- Merge decisions
- Sprint planning

---

## Technical Architect

Responsible for:

- Architecture
- Engineering decisions
- Code review
- Prompt generation
- Quality assurance

---

## AI Implementation Engineer

Responsible for:

- Implementing one isolated feature
- Following project documentation
- Maintaining code quality
- Staying within task scope

The AI engineer should behave like a junior engineer working under review.

---

# Source of Truth

Before implementing any feature, the AI engineer must read:

- PRD.md
- ARCHITECTURE.md
- ENGINEERING.md
- DESIGN.md
- TASKS.md

These documents override assumptions.

---

# Engineering Philosophy

Every implementation must:

- Have one objective.
- Be independently testable.
- Be independently reviewable.
- Avoid unrelated changes.
- Preserve existing architecture.
- Minimize modified files.

When uncertain:

Report the issue.

Do not invent solutions.

---

# Git Workflow

Every feature follows the same workflow.

## Step 1

Update the local repository.

Start from the latest main branch.

---

## Step 2

Create a feature branch.

Naming:

feature/<feature-name>

Examples:

feature/navbar

feature/footer

feature/hero

---

## Step 3

Implement only the assigned feature.

Do not modify unrelated files.

---

## Step 4

Run local verification.

Required:

- format
- lint
- build

Fix only issues introduced by the current feature.

---

## Step 5

Stop.

Do NOT:

- commit
- push
- open Pull Request
- merge

Await human review.

---

## Step 6

After approval:

Commit implementation.

Commit message:

<feature> implemented

Example:

footer implemented

---

## Step 7

Update TASKS.md.

Only check off completed tasks.

Create a second commit.

Example:

tasks update for footer implementation

---

## Step 8

Push feature branch.

Open Pull Request targeting main.

No direct pushes to main.

---

## Step 9

Technical review.

Only after approval may the Pull Request be merged.

---

# Definition of Done

A feature is complete only if:

- Acceptance criteria satisfied.
- TypeScript compiles.
- Build succeeds.
- Lint passes.
- No unrelated files modified.
- Documentation remains unchanged unless requested.
- No regressions introduced.

---

# Scope Rules

Implement exactly what is requested.

Never:

- anticipate future milestones
- redesign unrelated components
- modify architecture
- modify configuration
- introduce new dependencies
- refactor unrelated code

Small, focused Pull Requests are preferred.

---

# Allowed Changes

Modify only files required by the task.

If additional changes appear necessary:

Stop.

Explain why.

Do not proceed.

---

# Package Management

Grandir uses:

- npm

Never introduce:

- pnpm
- yarn
- bun

Never generate:

- pnpm-lock.yaml
- yarn.lock
- bun.lockb

Do not modify:

- package.json
- package-lock.json

unless explicitly requested.

---

# Environment Variables

Frontend uses Vite.

Use:

import.meta.env

Never import:

dotenv

Never use:

dotenv/config

---

# React Guidelines

Prefer:

- functional components
- composition
- reusable components
- semantic HTML

Avoid duplication.

---

# Routing

Use React Router.

Internal navigation should use:

NavLink

or

Link

Never use plain anchor tags for internal routes.

---

# Styling

Use Tailwind CSS only.

Follow DESIGN.md.

Maintain a consistent visual language.

Avoid introducing new visual styles without justification.

---

# Accessibility

Every feature should:

- use semantic HTML
- support keyboard navigation
- maintain color contrast
- preserve focus states

Accessibility is required.

---

# Code Quality

Prefer:

- readable code
- descriptive names
- small components
- low complexity

Avoid premature optimization.

Avoid clever code.

Readable code is preferred.

---

# Verification Checklist

Before requesting review:

- Project builds successfully.
- Lint passes.
- No TypeScript errors.
- No duplicate components.
- No duplicate imports.
- No dead code.
- No placeholder code left behind.
- No console errors.
- No unnecessary files generated.

---

# Pull Request Checklist

Every Pull Request should answer:

Files created

Files modified

Packages installed

Build result

Lint result

Known limitations

Reviewer notes

Nothing else.

---

# Review Philosophy

Every Pull Request should be reviewed as though submitted by a junior engineer.

Review should verify:

- correctness
- architecture
- maintainability
- accessibility
- consistency
- scope

Never approve code simply because it works.

Production quality is the standard.

---

# Lessons Learned

The project has established the following engineering principles:

- Isolated feature branches.
- Small Pull Requests.
- Human approval before merge.
- Separate implementation and review.
- Design consistency through DESIGN.md.
- Documentation-first development.
- Git history should clearly reflect project evolution.

These principles should guide every future implementation.
