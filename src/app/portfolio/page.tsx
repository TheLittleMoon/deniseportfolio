'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import CustomLightbox from '../components/Lightbox'; // Import the updated lightbox component
import portfolioData from '../data/portfolioData.json'; // Import your JSON data

interface GalleryImage {
  title: string;
  url: string;
  description?: string; // Optional description for captions
}

interface Gallery {
  gallery: string;
  images: GalleryImage[];
}

export default function Portfolio() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentSlides, setCurrentSlides] = useState<
    { src: string; alt: string; description?: string }[]
  >([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Open Lightbox for a specific gallery
  const handleOpenGallery = (gallery: Gallery) => {
    const slides = gallery.images.map((image) => ({
      src: image.url,
      alt: image.title,
      description: image.description, // Add description for captions
    }));
    setCurrentSlides(slides);
    setCurrentIndex(0); // Start from the first image
    setIsLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-pink-200 to-purple-200 py-20 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">My Portfolio</h1>

      {/* Gallery Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.map((gallery) => (
          <motion.div
            key={gallery.gallery}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer"
            onClick={() => handleOpenGallery(gallery)}
          >
            {/* Cover Photo */}
            <Image
              src={gallery.images[0].url} // Use the first image as the cover photo
              alt={gallery.gallery}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            {/* Gallery Title */}
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{gallery.gallery}</h3>
              <p className="text-gray-600">
                {gallery.images.length} {gallery.images.length > 1 ? 'items' : 'item'}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <CustomLightbox
        isOpen={isLightboxOpen}
        slides={currentSlides}
        currentIndex={currentIndex}
        onClose={() => setIsLightboxOpen(false)}
      />
    </div>
  );
}