import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  Button,
  Input,
  Label,
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from '@shared/components/ui'

const schema = z.object({
  email: z.string().email({ message: 'Invalid email' }),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

type FormValues = z.infer<typeof schema>

export const LoginForm: React.FC<{
  onSubmit: (values: FormValues) => void
  loading?: boolean
}> = ({ onSubmit, loading = false }) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { email: '', password: '' },
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} noValidate className="space-y-6 w-full max-w-md">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <Label className="mb-1 text-sm font-medium">Email</Label>
              <FormControl>
                <Input placeholder="you@company.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <Label className="mb-1 text-sm font-medium">Password</Label>
              <FormControl>
                <Input placeholder="••••••••" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <input id="remember" type="checkbox" className="h-4 w-4 rounded border-border bg-transparent" />
            <label htmlFor="remember" className="text-sm text-muted">Remember me</label>
          </div>
          <a className="text-sm text-primary hover:underline" href="#">Forgot password?</a>
        </div>

        <Button type="submit" disabled={loading} className="w-full">
          {loading ? 'Signing in...' : 'Sign in'}
        </Button>
      </form>
    </Form>
  )
}

export default LoginForm
