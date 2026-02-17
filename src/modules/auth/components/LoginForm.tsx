import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@shared/components/atoms/Button/Button'
import { Input } from '@shared/components/atoms/Input/Input'

const schema = z.object({
  email: z.string().email({ message: 'Invalid email' }),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

type FormValues = z.infer<typeof schema>

export const LoginForm: React.FC<{
  onSubmit: (values: FormValues) => void
  loading?: boolean
}> = ({ onSubmit, loading = false }) => {
  const { register, handleSubmit, formState } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { email: '', password: '' },
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4 w-full max-w-sm">
      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <Input {...register('email')} type="email" />
        {formState.errors.email && <div className="text-xs text-red-400 mt-1">{formState.errors.email.message}</div>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Password</label>
        <Input {...register('password')} type="password" />
        {formState.errors.password && <div className="text-xs text-red-400 mt-1">{formState.errors.password.message}</div>}
      </div>

      <div>
        <Button type="submit" disabled={loading} className="w-full">
          {loading ? 'Signing in...' : 'Sign in'}
        </Button>
      </div>
    </form>
  )
}

export default LoginForm
