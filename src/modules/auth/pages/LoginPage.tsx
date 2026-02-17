import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import useLogin from '@modules/auth/hooks/useLogin'
import LoginForm from '@modules/auth/components/LoginForm'

const LoginPage: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const from = (location.state as any)?.from?.pathname ?? '/dashboard'

  const mutation = useLogin()

  const onSubmit = async (values: { email: string; password: string }) => {
    try {
      await mutation.mutateAsync(values)
      navigate(from, { replace: true })
    } catch (err) {
      // error surfaced via mutation.error — UI can show toast/field errors
      console.error(err)
    }
  }

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-full max-w-md bg-slate-900/60 border border-slate-700 rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-6">Sign in</h2>
        <LoginForm onSubmit={onSubmit} loading={mutation.isLoading} />
        {mutation.isError && <div className="text-sm text-red-400 mt-3">Authentication failed</div>}
      </div>
    </div>
  )
}

export default LoginPage
