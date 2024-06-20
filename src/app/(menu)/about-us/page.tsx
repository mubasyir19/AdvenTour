'use client';

import Navbar from '@/components/Navbar';
import { Poppins, Quicksand } from 'next/font/google';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const quickSand = Quicksand({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
});

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default function Profile() {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <section className='h-80 w-full bg-home bg-cover bg-center' style={poppins.style}>
        <div className='flex h-full w-full items-center justify-center bg-black bg-opacity-50'>
          <div className=''>
            {/* <div className='mx-auto w-fit rounded-full bg-white p-4'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='my-auto h-10 w-10'
              >
                <path
                  d='M12 0C13.5913 0 15.1174 0.632141 16.2426 1.75736C17.3679 2.88258 18 4.4087 18 6C18 7.5913 17.3679 9.11742 16.2426 10.2426C15.1174 11.3679 13.5913 12 12 12C10.4087 12 8.88258 11.3679 7.75736 10.2426C6.63214 9.11742 6 7.5913 6 6C6 4.4087 6.63214 2.88258 7.75736 1.75736C8.88258 0.632141 10.4087 0 12 0ZM12 15C18.63 15 24 17.685 24 21V24H0V21C0 17.685 5.37 15 12 15Z'
                  fill='#6EE7B7'
                />
              </svg>
            </div> */}
            <div className='mt-4 text-center text-white'>
              <h1 className='text-xl font-bold text-white md:text-3xl' style={poppins.style}>
                About Us
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className='mx-auto mt-10' style={poppins.style}>
        <div className='w-3/4 flex gap-x-8 mx-auto'>
          <div className='w-1/2'>
            <Image src='/img/background.jpg' width={500} height={500} alt='photo' className='h-fit w-full' />
          </div>
          <p className='text-justify w-1/2'>
            <span className='text-3xl text-prime-yellow font-semibold'>Hi</span>, Ventourians, welcome to AdvenTour.
            Adventour is an application that will make it easy to choose a mountain destination that suits your
            preferences and adventure needs! By using Adventour, you will experience an interactive and adventurous
            experience in finding the right mountain destination. The app will provide recommendations tailored to your
            interests, so you can easily choose a mountain tourist location that suits your liking. There&apos;s no need
            to worry about lacking accurate information, as Adventour provides access to detailed information about each
            mountain, including its stunning natural beauty, climbing difficulty level, available facilities, as well as
            reviews and recommendations from other experienced climbers. With the help of Adventour, you can plan a
            climbing trip that is satisfying and according to your personal preferences. What are you waiting for? Start
            your adventure now with Adventour!
          </p>
        </div>
        <div className='bg-home bg-center bg-cover my-20'>
          <div className='bg-black bg-opacity-80 py-20 flex justify-center w-full h-full text-white'>
            <div className='w-3/4'>
              <h1 className='text-3xl font-bold'>
                Why We Develop <span className='text-prime-yellow'>AdvenTour</span> ?
              </h1>
              <div className='w-3/4 mx-auto mt-8'>
                <p className='text-justify text-lg indent-10'>
                  The idea to use this problem statement comes from the growing popularity of hiking and tracking, as
                  well as the lack of specific and comprehensive recommendation platform for hikers who are searching
                  for interesting and fresh tracks through developing an app that offers customized recommendations for
                  mountain areas.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='w-3/4 mx-auto my-20'>
          <h1 className='text-3xl font-bold text-center'>
            Why <span className='text-prime-yellow'>AdvenTour</span> ?
          </h1>
          <div className='grid grid-cols-1 gap-10 lg:grid-cols-2 mt-8'>
            <div className='card-why flex gap-x-4'>
              <div className='bg-prime-yellow flex justify-center text-center items-center rounded-full w-10 h-10 p-4'>
                <p className='text-white text-xl font-semibold'>01</p>
              </div>
              <div className=''>
                <h3 className='text-2xl font-bold'>Personalization experiences</h3>
                <p>
                  AdvenTour Apps provides recommendations based on individual preference, hiking experience, and desired
                  trail characteristis
                </p>
              </div>
            </div>
            <div className='card-why flex gap-x-4'>
              <div className='bg-prime-yellow flex justify-center text-center items-center rounded-full w-10 h-10 p-4'>
                <p className='text-white text-xl font-semibold'>02</p>
              </div>
              <div className=''>
                <h3 className='text-2xl font-bold'>Enhanced safety and preparedness</h3>
                <p>
                  AdvenTour Apps addresses this by providing vital safety information, such as trail difficulty levels,
                  terrain conditions, and safety precautions
                </p>
              </div>
            </div>
            <div className='card-why flex gap-x-4'>
              <div className='bg-prime-yellow flex justify-center text-center items-center rounded-full w-10 h-10 p-4'>
                <p className='text-white text-xl font-semibold'>03</p>
              </div>
              <div className=''>
                <h3 className='text-2xl font-bold'>Time and effort efficiency</h3>
                <p>AdvenTour Apps streamlines this process by consolidating relevant information in one platform</p>
              </div>
            </div>
            <div className='card-why flex gap-x-4'>
              <div className='bg-prime-yellow flex justify-center text-center items-center rounded-full w-10 h-10 p-4'>
                <p className='text-white text-xl font-semibold'>04</p>
              </div>
              <div className=''>
                <h3 className='text-2xl font-bold'>Exploration of new and unique destinations</h3>
                <p>AdvenTour Apps caters to this desire by showcasing lesser-known trails and hidden gems.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-40'>
          <h1 className='text-3xl font-bold text-center'>
            Our <span className='text-prime-yellow'>Team</span>
          </h1>
          <div className='mt-10'>
            <div className='card-person text-center'>
              {/* <Image src="" width={} height={} alt='' /> */}
              <div className='h-52 w-52 bg-gray-400 rounded-full mx-auto'></div>
              <div className='text-center mt-3'>
                <h4 className='text-xl'>Nuri Fathriya Mardlatillah</h4>
                <p className='mt-3'>State University of Surabaya</p>
                <p>Project Manager</p>
              </div>
            </div>
          </div>
          <div className='flex justify-center gap-x-32 mx-auto mt-10'>
            <div className='card-person text-center'>
              {/* <Image src="" width={} height={} alt='' /> */}
              <div className='h-52 w-52 bg-gray-400 rounded-full mx-auto'></div>
              <div className='text-center mt-3'>
                <h4 className='text-xl'>Farhan Reynaldi Valerian</h4>
                <p className='mt-3'>Trunojoyo University</p>
                <p>Android Developement</p>
              </div>
            </div>
            <div className='card-person text-center'>
              {/* <Image src="" width={} height={} alt='' /> */}
              <div className='h-52 w-52 bg-gray-400 rounded-full mx-auto'></div>
              <div className='text-center mt-3'>
                <h4 className='text-xl'>Mohammad Luqi Wiharto</h4>
                <p className='mt-3'>Sultan Agung Islamic University</p>
                <p>Cloud Computing</p>
              </div>
            </div>
            <div className='card-person text-center'>
              <Image src='/img/mahdy.png' width={200} height={200} alt='photo' className='h-52 w-52 rounded-full' />
              {/* <div className='h-52 w-52 bg-gray-400 rounded-full mx-auto'></div> */}
              <div className='text-center mt-3'>
                <h4 className='text-xl'>Mahdy Mubasyir</h4>
                <p className='mt-3'>Gunadarma University</p>
                <p>Cloud Computing</p>
              </div>
            </div>
          </div>
          <div className='flex justify-center gap-x-32 mx-auto mt-10'>
            <div className='card-person text-center'>
              <Image src='/img/erlan.jpg' width={200} height={200} alt='photo' className='h-52 w-52 rounded-full' />
              {/* <div className='h-52 w-52 bg-gray-400 rounded-full mx-auto'></div> */}
              <div className='text-center mt-3'>
                <h4 className='text-xl'>Erlan Herlangga</h4>
                <p className='mt-3'>Gunadarma University</p>
                <p>Machine Learning</p>
              </div>
            </div>
            <div className='card-person text-center'>
              {/* <Image src="" width={} height={} alt='' /> */}
              <div className='h-52 w-52 bg-gray-400 rounded-full mx-auto'></div>
              <div className='text-center mt-3'>
                <h4 className='text-xl'>Dhea Ulhaq Haryani Putri</h4>
                <p className='mt-3'>Jendral Soedirman University</p>
                <p>Machine Learning</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='mt-40'>
        <h1 className='text-3xl font-bold text-center'>
          Contact <span className='text-prime-yellow'>Us</span>
        </h1>
      </section>
    </>
  );
}
