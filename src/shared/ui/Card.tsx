import React from 'react'
import { cn } from '@lib/cn'

export type CardProps = React.HTMLAttributes<HTMLDivElement>

export const Card: React.FC<CardProps> = ({ className, children, ...props }) => {
  return (
    <div className={cn('rounded-lg border border-slate-700 bg-slate-900/40 p-4', className)} {...props}>
      {children}
    </div>
  )
}

export default Card
