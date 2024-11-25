'use client'

import { useState, ChangeEvent, FormEvent } from 'react'
import { motion } from 'framer-motion'
import PastelButton from '../components/PastelButton'

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-pink-200 to-yellow-200 py-20 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-4xl font-bold text-center mb-8">Get in Touch</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              What's your name, adventurer?
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-transparent"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Where can I send my magical response?
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-transparent"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              What's on your mind? Spill the beans!
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-transparent"
            ></textarea>
          </div>
          
          <div className="text-center">
            <PastelButton onClick={() => {}}>Send Message</PastelButton>
          </div>
        </form>
        
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Connect with me</h2>
          <div className="flex justify-center space-x-6">
            <SocialLink href="https://linkedin.com" icon="linkedin" />
            <SocialLink href="mailto:your@email.com" icon="mail" />
            <SocialLink href="https://github.com" icon="github" />
          </div>
        </div>
      </div>
    </div>
  )
}

interface SocialLinkProps {
  href: string;
  icon: string;
}

function SocialLink({ href, icon }: SocialLinkProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="text-gray-600 hover:text-gray-800"
    >
      <span className="sr-only">{icon}</span>
      <i className={`fab fa-${icon} text-3xl`}></i>
    </motion.a>
  )
}

