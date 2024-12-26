'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { FACEBOOK_PIXEL_ID, FB_EVENTS } from '@/lib/analytics-config'

declare global {
  interface Window {
    fbq: any
  }
}

export function useAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Initialize Facebook Pixel
    if (FACEBOOK_PIXEL_ID && typeof window !== 'undefined') {
      window.fbq('init', FACEBOOK_PIXEL_ID)
      window.fbq('track', FB_EVENTS.PAGEVIEW)
    }
  }, [])

  // Track page views on route changes
  useEffect(() => {
    if (FACEBOOK_PIXEL_ID && typeof window !== 'undefined') {
      window.fbq('track', FB_EVENTS.PAGEVIEW)
    }
  }, [pathname, searchParams])
} 