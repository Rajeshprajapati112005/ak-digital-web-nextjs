import type { Metadata } from 'next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AK Digital Web | Web Design, Development & Digital Growth Agency',

  description:
    'AK Digital Web is a web design and development agency helping businesses build high-performing websites, eCommerce stores, digital products and growth-focused digital experiences that turn visitors into customers.',

  keywords: [
    'AK Digital Web',
    'web design agency',
    'web development agency',
    'website development',
    'eCommerce website development',
    'WordPress development',
    'Shopify development',
    'Next.js development',
    'React development',
    'SEO services',
    'digital marketing agency',
    'digital growth agency',
    'business website design',
    'custom website development',
  ],

  authors: [
    {
      name: 'AK Digital Web',
      url: 'https://akdigitalweb.com',
    },
  ],

  creator: 'AK Digital Web',
  publisher: 'AK Digital Web',

  metadataBase: new URL('https://akdigitalweb.com'),

  alternates: {
    canonical: '/',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  openGraph: {
    title: 'AK Digital Web | Web Design, Development & Digital Growth Agency',

    description:
      'We build high-performing websites, eCommerce stores and digital experiences designed to help businesses grow.',

    url: 'https://akdigitalweb.com',

    siteName: 'AK Digital Web',

    locale: 'en_US',

    type: 'website',

    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AK Digital Web - Web Design & Development Agency',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title: 'AK Digital Web | Web Design & Development Agency',

    description:
      'High-performing websites, eCommerce stores and digital experiences built for business growth.',

    images: ['/og-image.jpg'],
  },

  category: 'technology',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>{children}</body>
    </html>
  )
}