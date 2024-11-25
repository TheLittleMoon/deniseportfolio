'use client';

import React from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { Captions, Counter, Thumbnails, Zoom } from 'yet-another-react-lightbox/plugins';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/counter.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

interface LightboxProps {
  isOpen: boolean;
  slides: { src: string; alt: string; description?: string }[]; // Include description for captions
  currentIndex: number;
  onClose: () => void;
}

export default function CustomLightbox({ isOpen, slides, currentIndex, onClose }: LightboxProps) {
  return (
    <Lightbox
      open={isOpen}
      close={onClose}
      slides={slides}
      index={currentIndex}
      plugins={[Captions, Counter, Thumbnails, Zoom]} // Include plugins
      captions={{
        showToggle: true, // Enable captions toggle
      }}
      counter={{}} // Remove the invalid 'position' property
      thumbnails={{
        position: 'bottom', // Thumbnails position
      }}
    />
  );
}