import './globals.css'
import type { Metadata } from 'next';
import {Navbar, Footer} from '@/components';


export const metadata: Metadata = {
  title: 'Car Central',
  description: 'Find and rent cars easily',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='realtive'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
