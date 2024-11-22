'use client'

import { motion } from 'framer-motion'

interface PastelButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function PastelButton({ children, onClick, className = '' }: PastelButtonProps) {
  return (
    <motion.button
      className={`px-6 py-3 rounded-full bg-gradient-to-r from-pink-300 to-blue-300 text-white font-semibold text-lg shadow-md ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  )
}

