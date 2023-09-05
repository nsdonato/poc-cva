import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

const greeter = cva('Good morning!', {
  variants: {
    isLoggedIn: {
      true: "Here's a secret only logged in users can see",
      false: 'Log in to find out more…'
    }
  },
  defaultVariants: {
    isLoggedIn: false
  }
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof greeter> {}

export const ButtonGreeter: React.FC<ButtonProps> = ({
  className,
  isLoggedIn,
  ...props
}) => <button className={greeter({ isLoggedIn, className })} {...props} />
