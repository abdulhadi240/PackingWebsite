import ChatwoptWidget from './components/ChatWoot'

import './globals.css'
import { Roboto } from 'next/font/google'

const inter = Roboto({ 
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
        <ChatwoptWidget/>

        </body>

    </html>
  )
}
