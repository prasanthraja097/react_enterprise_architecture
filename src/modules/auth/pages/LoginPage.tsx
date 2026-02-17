import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import useLogin from '@modules/auth/hooks/useLogin'
import LoginForm from '@modules/auth/components/LoginForm'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Separator } from '@shared/components/ui'

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
    <div className="flex min-h-screen items-center justify-center bg-background p-6">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle>Sign in to your account</CardTitle>
          <CardDescription>Enter your email and password to continue</CardDescription>
        </CardHeader>

        <CardContent>
          <LoginForm onSubmit={onSubmit} loading={mutation.isPending} />

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>

          {/* OAuth buttons (optional) — kept for convenience */}
          <div className="grid gap-2">
            <button
              type="button"
              onClick={() => console.log('GitHub OAuth')}
              className="flex w-full items-center justify-center gap-2 rounded-md border border-border bg-background px-3 py-2 text-sm shadow-sm hover:bg-accent/5"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.57.1.78-.25.78-.55 0-.27-.01-1-.02-1.96-3.2.7-3.88-1.54-3.88-1.54-.53-1.36-1.3-1.72-1.3-1.72-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.26 3.4.96.11-.75.41-1.26.75-1.55-2.56-.29-5.26-1.28-5.26-5.72 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.2 11.2 0 0 1 2.91-.39c.99 0 1.99.13 2.91.39 2.2-1.5 3.18-1.18 3.18-1.18.63 1.59.24 2.76.12 3.05.75.81 1.2 1.84 1.2 3.1 0 4.45-2.71 5.42-5.29 5.71.42.36.8 1.08.8 2.17 0 1.56-.01 2.82-.01 3.2 0 .3.21.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
              </svg>
              Continue with GitHub
            </button>
          </div>
        </CardContent>

        <CardFooter className="text-sm text-muted-foreground text-center">
          <span>Need help? </span>
          <a href="#" className="text-primary hover:underline">Contact support</a>
        </CardFooter>
      </Card>
    </div>
  )
}

export default LoginPage
