import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Eleven - Your MVP's favourite designers",
  description:
    'Design your products with world-class designers without breaking the bank. One subscription fee, unlimited design requests.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
