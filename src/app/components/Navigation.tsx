'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center space-x-8 h-16">
          <Link 
            href="/" 
            className={`inline-flex items-center px-4 h-full text-sm font-medium border-b-2 ${
              pathname === '/' 
                ? 'border-pink-500 text-gray-900' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Home
          </Link>
          
          <Link 
            href="/portfolio" 
            className={`inline-flex items-center px-4 h-full text-sm font-medium border-b-2 ${
              pathname === '/portfolio' 
                ? 'border-pink-500 text-gray-900' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Portfolio
          </Link>
          
          <Link 
            href="/about" 
            className={`inline-flex items-center px-4 h-full text-sm font-medium border-b-2 ${
              pathname === '/about' 
                ? 'border-pink-500 text-gray-900' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            About
          </Link>
          
          <Link 
            href="/contact" 
            className={`inline-flex items-center px-4 h-full text-sm font-medium border-b-2 ${
              pathname === '/contact' 
                ? 'border-pink-500 text-gray-900' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

