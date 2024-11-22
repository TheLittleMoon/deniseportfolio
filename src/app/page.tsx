'use client'

import { motion } from 'framer-motion'
import PastelButton from './components/PastelButton'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 flex flex-col items-center justify-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
          Designing the Future,<br />One Pixel at a Time
        </h1>
        <Link href="/portfolio">
          <PastelButton>Explore My Work</PastelButton>
        </Link>
      </motion.div>

      <FloatingElements />
    </div>
  )
}

function FloatingElements() {
  const elements = Array.from({ length: 20 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute rounded-full bg-white bg-opacity-50"
      initial={{
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        scale: Math.random() * 0.5 + 0.5,
      }}
      animate={{
        y: [0, -20, 0],
        transition: {
          duration: Math.random() * 3 + 2,
          repeat: Infinity,
          repeatType: 'reverse',
        },
      }}
      style={{
        width: `${Math.random() * 30 + 10}px`,
        height: `${Math.random() * 30 + 10}px`,
      }}
    />
  ))

  return <>{elements}</>
}

