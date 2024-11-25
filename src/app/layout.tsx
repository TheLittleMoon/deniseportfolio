import './globals.css'
import { Inter, Caveat } from 'next/font/google'
import Navigation from './components/Navigation'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

const caveat = Caveat({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Your Name - Portfolio',
  description: 'Designing the Future, One Pixel at a Time',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body className="min-h-screen bg-white">
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  )
}

