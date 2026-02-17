import * as React from 'react'
import * as ToastPrimitive from '@radix-ui/react-toast'
import { cn } from '@lib/cn'

export const ToastProvider = ToastPrimitive.Provider
export const ToastViewport = React.forwardRef<HTMLOListElement, React.HTMLAttributes<HTMLOListElement>>(
  ({ className, ...props }, ref) => (
    <ToastPrimitive.Viewport
      ref={ref as any}
      className={cn('fixed bottom-4 right-4 z-50 flex w-[var(--viewport-width,390px)] flex-col gap-2', className)}
      {...(props as any)}
    />
  ),
)
ToastViewport.displayName = 'ToastViewport'

export const Toast = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Root>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Root
    ref={ref as any}
    className={cn('group pointer-events-auto relative flex w-full max-w-md items-center gap-3 overflow-hidden rounded-md border border-border bg-card p-3 shadow', className)}
    {...props}
  />
))
Toast.displayName = 'Toast'

export const ToastTitle = React.forwardRef<HTMLParagraphElement, React.ComponentPropsWithoutRef<'p'>>(({ className, ...props }, ref) => (
  <ToastPrimitive.Title ref={ref} className={cn('text-sm font-semibold', className)} {...props} />
))
ToastTitle.displayName = 'ToastTitle'

export const ToastDescription = React.forwardRef<HTMLParagraphElement, React.ComponentPropsWithoutRef<'p'>>(({ className, ...props }, ref) => (
  <ToastPrimitive.Description ref={ref} className={cn('text-sm text-muted', className)} {...props} />
))
ToastDescription.displayName = 'ToastDescription'

export const ToastAction = ToastPrimitive.Action
export const ToastClose = ToastPrimitive.Close

export default Toast
