interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'full' | 'circle'
}

const sizeClasses = {
  sm: 'h-10',
  md: 'h-12',
  lg: 'h-16',
}

const circleSizeClasses = {
  sm: 'h-10 w-10',
  md: 'h-12 w-12',
  lg: 'h-16 w-16',
}

export default function Logo({ className = '', size = 'sm', variant = 'full' }: LogoProps) {
  if (variant === 'circle') {
    return (
      <div
        className={`${circleSizeClasses[size]} rounded-full overflow-hidden flex-shrink-0 ${className}`}
      >
        <img
          src="/nannu-milk-logo.png"
          alt="Nannu Milk"
          className="w-full h-full object-cover"
        />
      </div>
    )
  }

  return (
    <img
      src="/nannu-milk-logo.png"
      alt="Nannu Milk — भरोसा भी और सेहत भी"
      className={`${sizeClasses[size]} w-auto object-contain ${className}`}
    />
  )
}
