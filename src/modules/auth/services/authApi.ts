import type { IAuthRepository } from '@modules/auth/domain/repositories/IAuthRepository'
import type { LoginDTO, LoginResponse } from '@modules/auth/types'
import axiosInstance from '@infrastructure/http/axiosInstance'

export const authApi: IAuthRepository = {
  async login(payload: LoginDTO): Promise<LoginResponse> {
    const { data } = await axiosInstance.post('/auth/login', payload)
    return data as LoginResponse
  },

  async refresh(refreshToken: string) {
    const { data } = await axiosInstance.post('/auth/refresh', { refreshToken })
    return data as { accessToken: string; refreshToken: string }
  },
}

export default authApi
