import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  variant?: 'primary' | 'secondary'
}

const Button = ({
  children,
  className = '',
  variant = 'primary',
  ...props
}: ButtonProps) => {
  const baseStyles = `px-0 md:px-0 py-2 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/80`
  const variants = {
    primary: 'bg-[#1c1c1c] text-white hover:bg-black px-8 md:px-6 py-2',
    secondary: 'bg-white text-black hover:bg-gray-200 px-8 md:px-6 py-2'
  }

  return (
    <button className={`${baseStyles} ${className}`} {...props}>
      <span
        className={` ${variants[variant]} `}
        style={{
          clipPath:
            'polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)'
        }}
      >
        {children}
      </span>
    </button>
  )
}

export default Button
