export type LoginDTO = { email: string; password: string }

export type LoginResponse = {
  accessToken: string
  refreshToken: string
  user: User
}

export type User = {
  id: string
  email: string
  name?: string
  roles: string[]
}
