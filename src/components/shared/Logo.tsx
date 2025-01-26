import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  className?: string
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <Link href="/" aria-label="Home">
      <Image
        src="/assets/LOGO-v1.svg"
        alt="Bettlify Logo"
        width={140}
        height={38}
        className={className}
        priority
      />
    </Link>
  )
} 