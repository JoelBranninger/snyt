// app/layout.tsx

import './globals.css'
import type { Metadata } from 'next'
import { inter, dancingScript } from './fonts'
import Navbar from './components/global/Navbar'
import Footer from './components/global/Footer'

export const metadata: Metadata = {
  title: 'Sanity Next.js Portfolio Site',
  description: 'A personal portfolio site built with Sanity and Next.js',
  openGraph: {
    images: 'add-your-open-graph-image-url-here',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-black relative`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
