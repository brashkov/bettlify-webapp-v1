import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Analytics from '@/components/analytics/Analytics'
import Footer from '@/components/shared/Footer'
import { Suspense } from 'react'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bettlify | AI-Powered Sports Betting Predictions & Analysis",
  description: "Get accurate sports betting predictions powered by advanced AI algorithms. Make informed betting decisions with 70%+ accuracy and real-time updates.",
  keywords: "sports betting, AI predictions, betting analytics, sports analytics, betting ROI, betting predictions",
  openGraph: {
    title: "Bettlify | AI-Powered Sports Betting Predictions & Analysis",
    description: "Get accurate sports betting predictions powered by advanced AI algorithms. Make informed betting decisions with 70%+ accuracy and real-time updates.",
    type: "website",
    url: "https://bettlify.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bettlify Platform Preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Bettlify | AI-Powered Sports Betting Predictions",
    description: "Get accurate sports betting predictions powered by advanced AI algorithms.",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Analytics />
      </head>
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
