'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

const links = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-80 backdrop-blur-md">
      <ul className="flex justify-center space-x-8 py-4">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link href={href} className="relative">
              <span className="text-lg font-medium text-gray-800 hover:text-gray-600 transition-colors">
                {label}
              </span>
              {pathname === href && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-300 to-blue-300"
                  layoutId="underline"
                  initial={false}
                />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

