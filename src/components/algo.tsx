import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

const algo = cva('algo', {
  variants: {
    intent: {
      primary: [
        'bg-red-500',
        'text-white',
        'border-transparent',
        'hover:bg-red-600'
      ],
      secondary: [
        'bg-white',
        'text-gray-800',
        'border-gray-400',
        'hover:bg-gray-100'
      ]
    },
    size: {
      small: ['text-sm', 'py-1', 'px-2'],
      medium: ['text-base', 'py-2', 'px-4']
    }
  },
  compoundVariants: [{ intent: 'primary', size: 'medium', class: 'uppercase' }],
  defaultVariants: {
    intent: 'primary',
    size: 'medium'
  }
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof algo> {}

export const ButtonAlgo: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  ...props
}) => <button className={algo({ intent, size, className })} {...props} />
