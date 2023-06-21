import Nav_ from '@/components/Nav_'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer_ from '@/components/Footer_'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'basic_',
  description: '@LwaziNF',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      <Nav_ />
      <Footer_ />
      </body>
    </html>
  )
}
