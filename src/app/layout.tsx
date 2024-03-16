import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import type { ReactNode } from 'react'

import './globals.css'
import Header from '@/components/shared/header'

const lato = Lato({ weight: ['300', '400', '700', '900'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mind The Graph',
  description: 'Discover all possibilities of using this powerfull tool and create science figures, posters and infographics.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${lato.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
