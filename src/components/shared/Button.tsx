'use client'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
  onClick?: () => void
}

export default function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick 
}: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-lg font-semibold transition-all duration-200'
  const variants = {
    primary: 'bg-emerald-600 text-white hover:bg-emerald-700',
    secondary: 'bg-white text-emerald-700 border-2 border-emerald-600 hover:bg-emerald-50'
  }

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
} 