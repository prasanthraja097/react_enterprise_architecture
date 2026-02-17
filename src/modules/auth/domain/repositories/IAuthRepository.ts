import type { LoginDTO, LoginResponse } from '@modules/auth/types'

export interface IAuthRepository {
  login(payload: LoginDTO): Promise<LoginResponse>
  refresh(refreshToken: string): Promise<{ accessToken: string; refreshToken: string }>
}
