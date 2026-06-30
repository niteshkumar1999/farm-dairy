interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const sizeClasses = {
  sm: 'h-10',
  md: 'h-12',
  lg: 'h-16',
}

export default function Logo({ className = '', size = 'sm' }: LogoProps) {
  return (
    <img
      src="/nannu-milk-logo.png"
      alt="Nannu Milk — भरोसा भी और सेहत भी"
      className={`${sizeClasses[size]} w-auto object-contain ${className}`}
    />
  )
}
