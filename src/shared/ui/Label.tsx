import React from 'react'

export type UiLabelProps = React.LabelHTMLAttributes<HTMLLabelElement>

export const Label: React.FC<UiLabelProps> = ({ className, children, ...props }) => {
  return (
    <label className={['block text-sm font-medium mb-1', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </label>
  )
}

export default Label
