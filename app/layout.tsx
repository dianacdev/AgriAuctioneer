import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'
import './globals.css'

const worksans = Work_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AgriAuctioneer',
  description: 'Auctions and more tailored for the Agricultural field.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={worksans.className}>{children}</body>
    </html>
  )
}
