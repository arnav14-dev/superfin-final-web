import * as React from "react"
import { Slot } from "@radix-ui/react-slot"

const Button = React.forwardRef(({ className = '', variant = 'default', size = 'default', asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  
  // Build CSS classes based on variant and size
  const baseClasses = 'btn'
  const variantClasses = {
    default: 'btn-primary',
    destructive: 'btn-destructive',
    outline: 'btn-outline',
    secondary: 'btn-secondary',
    ghost: 'btn-ghost',
    link: 'btn-link',
    gradient: 'btn-gradient'
  }
  const sizeClasses = {
    default: '',
    sm: 'btn-sm',
    lg: 'btn-lg',
    icon: 'btn-icon'
  }
  
  const classes = [
    baseClasses,
    variantClasses[variant] || variantClasses.default,
    sizeClasses[size] || sizeClasses.default,
    className
  ].filter(Boolean).join(' ')
  
  return (
    <Comp
      className={classes}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button }