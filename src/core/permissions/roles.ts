// Centralized role names to avoid string scattering
export const Role = {
  ADMIN: 'admin',
  USER: 'user',
  GUEST: 'guest',
} as const

export type Role = (typeof Role)[keyof typeof Role]
