'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { FACEBOOK_PIXEL_ID, FB_EVENTS } from '@/lib/analytics-config'

declare global {
  interface Window {
    fbq: any
    dataLayer: any[]
  }
}

export function useAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Initialize Facebook Pixel
  useEffect(() => {
    const initPixel = () => {
      if (FACEBOOK_PIXEL_ID && typeof window !== 'undefined') {
        try {
          window.fbq('init', FACEBOOK_PIXEL_ID)
          window.fbq('track', FB_EVENTS.PAGEVIEW)
        } catch (error) {
          console.error('Failed to initialize Facebook Pixel:', error)
        }
      }
    }

    // Try to initialize immediately
    initPixel()

    // Fallback: try again after a short delay
    const timer = setTimeout(initPixel, 2000)

    return () => clearTimeout(timer)
  }, [])

  // Track page views on route changes
  useEffect(() => {
    if (FACEBOOK_PIXEL_ID && typeof window !== 'undefined' && window.fbq) {
      try {
        window.fbq('track', FB_EVENTS.PAGEVIEW)
      } catch (error) {
        console.error('Failed to track page view:', error)
      }
    }
  }, [pathname, searchParams])
} 