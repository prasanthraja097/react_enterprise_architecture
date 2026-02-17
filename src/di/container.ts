// Lightweight manual DI container for wiring implementations to interfaces.
// In larger apps you can use `tsyringe` or `inversify` but a simple factory is often clearer.
import authApi from '@modules/auth/services/authApi'
import { LoginUseCase } from '@modules/auth/domain/useCases/LoginUseCase'

export const loginUseCase = new LoginUseCase(authApi)

export default {
  loginUseCase,
}
