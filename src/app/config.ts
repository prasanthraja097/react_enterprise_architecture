// Centralized environment-aware configuration
// Use import.meta.env for Vite; keep defaults for dev/test environments.
export const API = {
  BASE_URL: (import.meta.env.VITE_API_BASE_URL as string) ?? 'http://localhost:4000/api',
  TIMEOUT: Number(import.meta.env.VITE_API_TIMEOUT) || 15000,
};

export const APP = {
  NAME: (import.meta.env.VITE_APP_NAME as string) ?? 'EnterpriseApp',
};
