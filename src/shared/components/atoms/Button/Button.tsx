import React from 'react'
import { cn } from '@lib/cn'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'ghost' | 'destructive'
  size?: 'sm' | 'md' | 'lg'
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'default',
  size = 'md',
  className,
  children,
  ...rest
}) => {
  const base = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2'
  const variants: Record<string, string> = {
    default: 'bg-slate-900 text-white hover:bg-slate-800',
    ghost: 'bg-transparent hover:bg-slate-800 text-slate-100',
    destructive: 'bg-red-600 text-white hover:bg-red-500',
  }
  const sizes: Record<string, string> = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  }

  return (
    <button {...rest} className={cn(base, variants[variant], sizes[size], className)}>
      {children}
    </button>
  )
}

export default Button
