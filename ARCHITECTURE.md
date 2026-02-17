# Architecture overview (feature + clean + DDD + Atomic)

This scaffold follows enterprise best practices and the requirements you specified:

- Feature-based modules under `src/modules/*` (each module contains its own domain, services, UI, and store)
- Clean Architecture / UseCases live inside `domain/useCases`
- Domain layer contains `entities`, `valueObjects`, `repositories` (interfaces)
- Shared UI follows Atomic Design under `src/shared/components/atoms|molecules|organisms`
- Centralized API layer in `src/infrastructure/http`
- Auth infra in `src/infrastructure/auth`
- Global guards, permissions and errors in `src/core`
- Typed Redux store in `src/store` and React Query provider in `src/app/providers`

Best-practices / rationale
- Single responsibility per file and per layer
- Keep side-effects out of domain/useCases (use repositories to talk to infra)
- Store only UI/session state in Redux; use React Query for server state
- Persist tokens in a single tokenStorage abstraction (easily replaceable)
- Use lazy-loaded routes for large modules to reduce bundle size
- Centralize API error handling and token refresh in a single Axios instance
- Favor composition and hooks for UI logic (reusable hooks under `shared/hooks`)
- Keep types and contracts (DTOs) close to the module that owns them

How to extend a module (summary)
1. Add `pages/`, `components/`, `hooks/`, `services/`, `domain/`, `store/`, `types/` inside the module folder.
2. Expose module entrypoint (e.g. `modules/<name>/index.tsx` or `ModuleRoutes.tsx`).
3. Add lazy route in `src/app/AppRouter.tsx`.
4. Add feature reducer to `src/store/index.ts` (or inject dynamically).

Production notes
- Store refresh tokens securely and consider rotating refresh tokens server-side.
- Add HTTP caching, request deduping, and circuit-breaker patterns to API layer when needed.
- Add telemetry (Sentry, Datadog) in the ErrorBoundary and Axios interceptors.
- Add automated tests for use-cases and reducers.

