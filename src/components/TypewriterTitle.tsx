'use client';

import { Quicksand } from 'next/font/google';
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const quickSand = Quicksand({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
});

export default function TypewriterTitle() {
  return (
    <h1 className='text-center text-3xl font-bold text-white md:text-4xl lg:text-5xl' style={quickSand.style}>
      <Typewriter
        words={[
          'Welcome to AdvenTour...',
          'Embark on Epic Mountain Adventures...',
          'Conquer Majestic Peaks...',
          'Discover Hidden Trails...',
          'Experience the Thrill of High Altitudes...',
          'Your Mountain Journey Begins Here...',
          'Challenge Yourself, Climb Higher...',
          'Explore Breathtaking Landscapes...',
          'Unleash Your Inner Explorer...',
          'Connecting You to Mountain Wilderness...',
        ]}
        loop={0}
        cursor
        cursorStyle='_'
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={2000}
      />
    </h1>
  );
}
