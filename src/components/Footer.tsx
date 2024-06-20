import { Poppins } from 'next/font/google';
import React from 'react';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default function Footer() {
  return (
    <footer className='absolute bottom-3 left-1/2 flex w-full -translate-x-1/2 transform justify-center'>
      <p className='text-white' style={poppins.style}>
        {/* Made with love by Mahdy  */}
        &copy; Copyright 2024. All rights reserved.
      </p>
    </footer>
  );
}
