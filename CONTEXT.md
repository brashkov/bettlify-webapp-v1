# Bettlify - Project Context Document

## Project Overview
Bettlify is a SaaS platform that provides AI-powered sports betting predictions. The platform aims to help users make informed betting decisions through data-driven insights and machine learning algorithms.

## System Architecture
The application is distributed across three separate projects:

1. **Landing Page (Current Project)**
   - Marketing frontend (domain.com)
   - Focus on conversion and SEO
   - Initial user acquisition
   - Tech stack: Next.js, TypeScript, Tailwind

2. **Dashboard (Separate Project)**
   - Hosted on dash.domain.com
   - Protected by authentication
   - Accessible only to paying customers
   - Displays predictions and analysis
   - Handles subscription management

3. **API (Separate Project)**
   - Hosted on api.domain.com
   - Contains core business logic
   - AI/ML prediction algorithms
   - Not directly accessible to end users
   - Serves both dashboard and landing page

## Core Features
- AI-powered betting predictions
- Real-time match analysis
- Performance tracking
- Subscription-based access
- Live results dashboard

## Technical Stack
### Current Project (Landing Page)
### Frontend
- Next.js 15.0.3 (App Router)
- TypeScript
- Tailwind CSS
- React 19.0.0-rc

### Backend & Infrastructure
- Supabase (Database)
- Edge Runtime
- Facebook Pixel (Analytics)
- API calls to api.domain.com for data

### Key Dependencies
- @heroicons/react: UI icons
- @supabase/supabase-js: Database client
- date-fns: Date manipulation
- react-facebook-pixel: Analytics tracking

## Project Structure 

├── app/ # Next.js app router pages
├── components/
│ ├── analytics/ # Analytics integration
│ ├── landing/ # Landing page components
│ └── shared/ # Reusable components
├── lib/ # Utility functions & configs
├── hooks/ # Custom React hooks
└── styles/ # Global styles

## Database Schema (Supabase)
### Tables
- bets
  - type
  - result
  - profit_loss
  - created_at

## Current Implementation Status
### Completed
- Landing page with all sections
- SEO optimization
- Analytics integration
- Basic API routes
- Database connection
- Mobile responsiveness

### Pending
- Authentication
- Dashboard
- Payment integration
- Subscription management
- Admin panel
- Testing

## Business Model
- Subscription-based access to predictions
- Multiple pricing tiers
- Free trial period

## Target Audience
- Sports betting enthusiasts
- Data-driven bettors
- Professional gamblers
- Sports analytics fans

## Performance Goals
- Load Time: < 3 seconds
- Core Web Vitals: All green
- SEO: Optimized for betting-related keywords
- Conversion Rate: Target 5%+ from landing page

## Security Considerations
- Data encryption
- Rate limiting needed
- User data protection
- Secure payment processing
- GDPR compliance required

## Monitoring & Analytics
- Facebook Pixel implementation
- Performance monitoring needed
- Error tracking needed
- User behavior analytics needed

## Future Roadmap
1. User authentication
2. Payment processing
3. Dashboard development
4. API rate limiting
5. Testing implementation
6. CI/CD pipeline
7. Admin features
8. Mobile app consideration

## Notes
- Edge runtime is configured for optimal performance
- SEO is prioritized with metadata and sitemap
- Design system uses emerald color palette
- Mobile-first approach implemented