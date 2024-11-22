import './globals.css'
import { Inter, Caveat } from 'next/font/google'
import Navigation from './components/Navigation'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const caveat = Caveat({ subsets: ['latin'], variable: '--font-caveat' })

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
    <html lang="en">
      <body className={`${inter.variable} ${caveat.variable} font-sans`}>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  )
}

