import React from 'react'

export const Form = ({ children, ...props }: React.FormHTMLAttributes<HTMLFormElement>) => {
  return (
    <form {...props} className={[props.className ?? '', 'space-y-4'].filter(Boolean).join(' ')}>
      {children}
    </form>
  )
}

export default Form
