import { useMutation } from '@tanstack/react-query'
import authApi from '@modules/auth/services/authApi'
import LoginUseCase from '@modules/auth/domain/useCases/LoginUseCase'
import { useAppDispatch } from '@store/hooks'
import { setCredentials } from '@modules/auth/store/authSlice'

const loginUseCase = new LoginUseCase(authApi)

export const useLogin = () => {
  const dispatch = useAppDispatch()

  return useMutation({
    mutationFn: (payload: Parameters<typeof loginUseCase.execute>[0]) => loginUseCase.execute(payload),
    onSuccess: (data) => {
      // keep user in redux for quick UI checks
      dispatch(setCredentials(data.user))
    },
  })
}

export default useLogin
