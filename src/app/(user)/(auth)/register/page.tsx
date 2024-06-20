import Navbar from '@/components/Navbar';
import { Passero_One, Poppins, Quicksand } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const quickSand = Quicksand({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
});

const passeroOne = Passero_One({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
});

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default function Register() {
  return (
    <>
      <Navbar />
      <section className='bg-gray-100 lg:flex'>
        <div className='bg-home bg-cover bg-center lg:h-screen lg:w-1/2'>
          <div className='flex h-full w-full items-center justify-center bg-black bg-opacity-60'>
            <h1 className='hidden text-center text-5xl font-bold text-white lg:block' style={quickSand.style}>
              Sign up now to get <br /> <span className='text-prime-yellow'>great recommendation</span> <br /> from us.
              {/* Your Portal <br />
              to <br /> Mangrove Knowledge */}
            </h1>
          </div>
        </div>
        <div className='h-full bg-home bg-cover bg-center lg:w-1/2 lg:bg-none'>
          <div className='flex h-full w-full items-center justify-center bg-black bg-opacity-50 px-8 py-32 lg:bg-opacity-0 lg:bg-none lg:px-0'>
            <div className=''>
              <div className='text-center'>
                <h1 className='text-2xl font-semibold text-white lg:text-black' style={quickSand.style}>
                  Register Your Account
                </h1>
              </div>
              <form className='mt-10' style={poppins.style}>
                <div className='md:flex md:gap-x-3'>
                  <div className='my-1 md:w-1/2'>
                    <label htmlFor='fullname' className='text-sm text-white md:text-base lg:text-black'>
                      Fullname
                    </label>
                    <input
                      type='text'
                      id='fullname'
                      placeholder='Your fullname'
                      className='mt-2 w-full rounded-lg border border-gray-400 px-4 py-2 text-sm focus:border-prime-yellow focus:outline-none focus:ring-0 md:text-base'
                    />
                  </div>
                  <div className='my-1 md:w-1/2'>
                    <label htmlFor='username' className='text-sm text-white md:text-base lg:text-black'>
                      Gender
                    </label>
                    <input
                      type='text'
                      id='username'
                      placeholder='Your username'
                      className='mt-2 w-full rounded-lg border border-gray-400 px-4 py-2 text-sm focus:border-prime-yellow focus:outline-none focus:ring-0 md:text-base'
                    />
                  </div>
                </div>
                <div className='md:flex md:gap-x-3'>
                  <div className='my-1 md:w-1/2'>
                    <label htmlFor='email' className='text-sm text-white md:text-base lg:text-black'>
                      Email
                    </label>
                    <input
                      type='text'
                      id='email'
                      placeholder='Your email'
                      className='mt-2 w-full rounded-lg border border-gray-400 px-4 py-2 text-sm focus:border-prime-yellow focus:outline-none focus:ring-0 md:text-base'
                    />
                  </div>
                  <div className='my-1 md:w-1/2'>
                    <label htmlFor='degree' className='text-sm text-white md:text-base lg:text-black'>
                      Age
                    </label>
                    <input
                      type='number'
                      id='age'
                      placeholder='Your age'
                      className='mt-2 w-full rounded-lg border border-gray-400 px-4 py-2 text-sm focus:border-prime-yellow focus:outline-none focus:ring-0 md:text-base'
                    />
                  </div>
                </div>
                <div className='md:flex md:gap-x-3'>
                  <div className='my-1 md:w-1/2'>
                    <label htmlFor='education' className='text-sm text-white md:text-base lg:text-black'>
                      Domicile
                    </label>
                    <input
                      type='text'
                      id='education'
                      placeholder='Your education'
                      className='mt-2 w-full rounded-lg border border-gray-400 px-4 py-2 text-sm focus:border-prime-yellow focus:outline-none focus:ring-0 md:text-base'
                    />
                  </div>
                  <div className='my-1 md:w-1/2'>
                    <label htmlFor='education' className='text-sm text-white md:text-base lg:text-black'>
                      Hiking Experience
                    </label>
                    <input
                      type='text'
                      id='expertise'
                      placeholder='Total hiking experience'
                      className='mt-2 w-full rounded-lg border border-gray-400 px-4 py-2 text-sm focus:border-prime-yellow focus:outline-none focus:ring-0 md:text-base'
                    />
                  </div>
                </div>
                <div className='md:flex md:gap-x-3'>
                  <div className='my-1 md:w-1/2'>
                    <label htmlFor='password' className='text-sm text-white md:text-base lg:text-black'>
                      Password
                    </label>
                    <input
                      type='password'
                      id='password'
                      placeholder='Your password'
                      className='mt-2 w-full rounded-lg border border-gray-400 px-4 py-2 text-sm focus:border-prime-yellow focus:outline-none focus:ring-0 md:text-base'
                    />
                  </div>
                  <div className='my-1 md:w-1/2'>
                    <label htmlFor='confirmPassword' className='text-sm text-white md:text-base lg:text-black'>
                      Confirm Password
                    </label>
                    <input
                      type='password'
                      id='confirmPassword'
                      placeholder='Please confirm password'
                      className='mt-2 w-full rounded-lg border border-gray-400 px-4 py-2 text-sm focus:border-prime-yellow focus:outline-none focus:ring-0 md:text-base'
                    />
                  </div>
                </div>
                <div className='my-3'>
                  <button
                    type='submit'
                    className='w-full rounded-lg bg-prime-yellow py-2 text-sm text-black hover:bg-yellow-400 md:text-base'
                  >
                    Submit
                  </button>
                  <div className='mt-2 text-center'>
                    <p className='text-white lg:text-black'>
                      Already have an account?{' '}
                      <Link href='/login' className='font-semibold text-prime-yellow'>
                        Sign In
                      </Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
