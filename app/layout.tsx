import type { Metadata } from 'next'
import { DM_Sans, DM_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin']
})

const dmMono = DM_Mono({
  variable: '--font-dm-mono',
  weight: ['300', '400', '500'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'House - Unika hus i en unik miljö',
  description: 'Unika hus i en unik miljö designade för dig.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='sv'>
      <body className={`${dmSans.variable} ${dmMono.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
