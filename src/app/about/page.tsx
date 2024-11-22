'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 via-blue-200 to-purple-200 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">About Me</h1>
        
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
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
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-2xl font-semibold mb-4">Hi, I'm Your Name!</h2>
            <p className="mb-4">
              I'm a passionate designer and frontend developer with a knack for creating
              beautiful and functional user experiences. When I'm not coding or pushing pixels,
              you can find me exploring new coffee shops or trying to teach my cat to high-five.
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>5+ years of experience in UI/UX design</li>
              <li>Expert in React and Next.js</li>
              <li>Lover of all things pastel and animated</li>
            </ul>
            <div className="font-caveat text-xl">
              "Design is not just what it looks like and feels like. Design is how it works." - Steve Jobs
            </div>
          </motion.div>
        </div>
        
        <Timeline />
      </div>
    </div>
  )
}

function Timeline() {
  const events = [
    { year: 2018, title: 'Started my design journey' },
    { year: 2019, title: 'Learned to code' },
    { year: 2020, title: 'First freelance project' },
    { year: 2021, title: 'Joined awesome startup' },
    { year: 2022, title: 'Launched personal brand' },
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
            <div className="w-24 text-right mr-4 font-semibold">{event.year}</div>
            <div className="w-4 h-4 rounded-full bg-purple-500 mr-4"></div>
            <div className="flex-1 bg-white rounded-lg p-4 shadow-md">
              {event.title}
            </div>
          </motion.div>
        ))}
        <div className="absolute top-0 bottom-0 left-[7.5rem] w-0.5 bg-purple-300"></div>
      </div>
    </div>
  )
}

