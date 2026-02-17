import React from 'react'
import { cn } from '@lib/cn'

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export const Input: React.FC<InputProps> = ({ className, ...rest }) => {
  return (
    <input
      {...rest}
      className={cn(
        'w-full rounded-md border border-slate-700 bg-transparent px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-600',
        className,
      )}
    />
  )
}

export default Input
