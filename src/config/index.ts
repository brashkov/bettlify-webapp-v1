const config = {
  // Use environment variable with fallback
  dashboardUrl: process.env.NEXT_PUBLIC_DASHBOARD_URL || 'http://localhost:3000',
  // Add CTA link constant
  ctaUrl: `${process.env.NEXT_PUBLIC_DASHBOARD_URL || 'http://localhost:3000'}/pricing?plan=monthly`,
  // Add sign-in URL
  signInUrl: `${process.env.NEXT_PUBLIC_DASHBOARD_URL || 'http://localhost:3000'}/sign-in`,
  // Add other config variables here
}

export default config 