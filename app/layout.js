import ChatwoptWidget from './components/ChatWoot'
import Whatsapp from './components/Whatsapp'
import { Analytics } from '@vercel/analytics/react';

import './globals.css'
import { Manrope } from 'next/font/google'

const inter = Manrope({ 
  subsets: ['latin'],
  weight:['400']
})

export const metadata = {
  title: 'CloudFourPackages',
  description: 'Get Packaging at Minimal Rates',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Whatsapp/>
        <ChatwoptWidget/>
        <Analytics />

        </body>

    </html>
  )
}
