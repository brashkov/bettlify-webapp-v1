import Link from 'next/link'
import Container from '@/components/shared/Container'
import config from '@/config'

export default function NotFound(): JSX.Element {
  return (
    <main className="min-h-screen bg-emerald-950 flex items-center">
      <Container>
        <div className="text-center">
          <h1 className="text-9xl font-bold text-emerald-400 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-white mb-6">Page Not Found</h2>
          <p className="text-emerald-300 mb-8 max-w-md mx-auto">
            Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/"
              className="px-6 py-3 bg-emerald-900 text-emerald-400 rounded-xl hover:bg-emerald-800 transition-colors"
            >
              Go Home
            </Link>
            <Link
              href={config.ctaUrl}
              className="px-6 py-3 bg-[#8B5CF6] text-white rounded-xl hover:bg-[#7C3AED] transition-colors"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </Container>
    </main>
  )
} 