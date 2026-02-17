import type { IAuthRepository } from '../repositories/IAuthRepository'
import type { LoginDTO } from '@modules/auth/types'
import { tokenStorage } from '@infrastructure/auth/tokenStorage'

export class LoginUseCase {
  private repository: IAuthRepository
  constructor(repository: IAuthRepository) {
    this.repository = repository
  }

  async execute(payload: LoginDTO) {
    const result = await this.repository.login(payload)
    // Persist tokens using a central abstraction
    tokenStorage.setTokens(result.accessToken, result.refreshToken)
    return result
  }
}

export default LoginUseCase
