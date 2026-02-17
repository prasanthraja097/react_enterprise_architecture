# React Enterprise Architecture

An opinionated starter for building enterprise-grade React applications with TypeScript, Vite and modern best-practices (feature modules, DI container, React Query, Redux Toolkit, Tailwind CSS).

- React 19 + TypeScript
- Vite for fast HMR and builds
- Module-based architecture (features + domain/use-cases)
- Built-in examples for authentication, routing, and state management

---

## Table of contents

- 🔧 Quick start
- 🚀 Available scripts
- 🗂 Project structure
- 🧭 Architecture overview
- ✅ Contributing
- 📦 Deployment
- 📜 License

---

## 🔧 Quick start

Prerequisites

- Node 18+ (LTS recommended)
- npm (or pnpm/yarn)

Clone and run locally

```bash
git clone <repo-url>
cd react_enterprise_architecture
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

Notes

> The `build` script runs TypeScript checks first (`tsc -b`) then builds the Vite production bundle.

---

## 🚀 Available scripts

- `npm run dev` — start dev server (Vite + HMR)
- `npm run build` — type-check and produce production build
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint across the codebase

Example: npm run build && npm run preview

---

## 🗂 Project structure (high level)

src/
- app/ — routing, GlobalLayout, providers (Redux / React Query), ErrorBoundary
- modules/ — feature modules (auth, users, dashboard, customers)
  - auth/ — domain entities, use-cases, services, hooks, pages
- core/ — guards and permission definitions
- infrastructure/ — low-level adapters (axios instance, token storage)
- di/ — dependency injection container
- shared/ — reusable UI components, hooks and utilities
- store/ — redux store and typed hooks
- main.tsx, index.css — app bootstrap

Refer to the `src/modules/auth` folder for an example of domain-driven feature structure.

---

## 🧭 Architecture overview

- Feature-first layout: each `module` contains its pages, hooks, services and store slices.
- Separation of concerns: `infrastructure` for adapters, `core` for guards/permissions, `di` for wiring dependencies.
- State: Redux Toolkit for global state + React Query for server state.
- Styling: Tailwind CSS utility classes.

Benefits: easier scaling, clearer ownership, and improved testability.

---

## ✅ Contributing

- Follow branch-per-feature and open pull requests into `main`.
- Run `npm run lint` and `npm run build` before creating a PR.
- Use conventional commit messages (`feat:`, `fix:`, `chore:`, `docs:`).

If you'd like, add unit tests (Vitest/Jest) and CI pipelines for PR validation.

---

## 📦 Deployment

- Build: `npm run build`
- Serve built output with any static host (Netlify, Vercel, GitHub Pages) or run `npm run preview` locally to sanity-check the production bundle.

Environment variables

- This starter expects Vite-style env variables (`VITE_...`). Add a `.env` or `.env.local` in the project root as needed.

---

## 📜 License

This project is distributed under the terms in the `LICENSE` file (GPL-3.0).

---

If you'd like, I can add a short badge section, example environment variables, or a usage guide for the `auth` module — tell me which you'd prefer next. ✨
