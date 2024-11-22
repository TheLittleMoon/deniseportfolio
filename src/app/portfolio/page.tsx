'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

const projects: Project[] = [
  { id: 1, title: 'Project 1', category: 'UI Design', image: '/placeholder.svg' },
  { id: 2, title: 'Project 2', category: 'Frontend Development', image: '/placeholder.svg' },
  { id: 3, title: 'Project 3', category: 'Brand Identity', image: '/placeholder.svg' },
  // Add more projects here
]

const categories = ['All', 'UI Design', 'Frontend Development', 'Brand Identity']

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-pink-200 to-purple-200 py-20 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">My Portfolio</h1>
      
      <div className="flex justify-center mb-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`mx-2 px-4 py-2 rounded-full ${
              selectedCategory === category
                ? 'bg-purple-500 text-white'
                : 'bg-white text-purple-500'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-lg overflow-hidden shadow-lg"
    >
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600">{project.category}</p>
      </div>
    </motion.div>
  )
}

