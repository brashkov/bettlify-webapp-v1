import Link from 'next/link'
import Container from '@/components/shared/Container'

export default function NotFound() {
  return (
    <Container>
      <div className="min-h-screen flex flex-col items-center justify-center text-center py-32">
        <h1 className="text-6xl font-bold text-emerald-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-emerald-600 rounded-xl hover:bg-emerald-500 transition-colors duration-200"
        >
          Back to Home
        </Link>
      </div>
    </Container>
  )
} 