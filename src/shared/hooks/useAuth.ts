import { useAppSelector } from '@store/hooks'

export const useAuth = () => {
  const auth = useAppSelector((s) => s.auth)
  return auth
}

export default useAuth
