'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 via-blue-200 to-purple-200 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">About Me</h1>
        
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <img
              src="/placeholder.svg"
              alt="Your Name"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-2xl font-semibold mb-4">Hi, I'm Denise!</h2>
            <p className="mb-4">
              I’m a designer with a passion for coding and a knack for creating
              user experiences that are as beautiful as they are functional. When
              I’m not designing or coding, you’ll find me skiing fresh powder or
              experimenting in the kitchen.
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Lifelong design enthusiast</li>
              <li>Forever Curious</li>
              <li>Lover of all things pastel and animated</li>
            </ul>
            <blockquote className="relative font-caveat text-xl pl-6 border-l-4 border-purple-500 mb-4">
              “The most important thing in life is style. That is, the style of
              one’s existence, the characteristic mode of one’s actions, is
              basically, ultimately what matters.” - Tom Robbins
            </blockquote>
          </motion.div>
        </div>

        {/* Timeline Component */}
        <Timeline />
      </div>
    </div>
  )
}

function Timeline() {
  const events = [ 
    { year: 2018, title: 'Started selling commissioned pieces, turning passion into practice.' },
    { year: 2019, title: 'Transitioned to digital art, creating my first digital works' },
    { year: 2020, title: 'Designed my first logo and explored brand identity creation.' },
    { year: 2021, title: 'Learned to code and started building websites' },
    { year: 2022, title: 'Completed my first freelance project, bringing ideas to life for clients.' },
  ]

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-semibold mb-8 text-center">My Journey</h2>
      <div className="relative">
        {events.map((event, index) => (
          <motion.div
            key={event.year}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="flex items-center mb-8"
          >
            {/* Year */}
            <div className="w-24 text-right mr-4 font-semibold">{event.year}</div>
            
            {/* Circle and Line */}
            <div className="relative mr-4 flex items-center">
              <div className="w-4 h-4 rounded-full bg-purple-500 z-10"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0.5 h-full bg-purple-300 z-0"></div>
            </div>

            {/* Event */}
            <div className="flex-1 bg-white rounded-lg p-4 shadow-md">
              {event.title}
            </div>
          </motion.div>
        ))}
        {/* Connecting Vertical Line */}
        <div className="absolute top-0 bottom-0 left-[7.5rem] w-0.5 bg-purple-300 z-0"></div>
      </div>
    </div>
  )
}