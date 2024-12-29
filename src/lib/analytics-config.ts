export const FACEBOOK_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || ''
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-T44H6XHJ'

export const FB_EVENTS = {
  PAGEVIEW: 'PageView',
  // Add other events as needed
} as const 