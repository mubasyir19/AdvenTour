import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Login() {
  return (
    <section className='bg-gray-100 lg:flex'>
      <div className='bg-home bg-cover bg-center lg:h-screen lg:w-1/2'>
        <div className='flex h-full w-full items-center justify-center bg-black bg-opacity-60'>
          <h1
            className='hidden text-center text-5xl font-bold text-white lg:block'
            //   style={quickSand.style}
          >
            Your Portal to get <br /> Recommendation Mountain
          </h1>
        </div>
      </div>
      <div className='h-screen bg-home bg-cover bg-center lg:w-1/2 lg:bg-none'>
        <div className='flex h-full w-full items-center justify-center bg-gradient-to-t from-black px-8 lg:bg-opacity-0 lg:bg-none lg:px-0'>
          <div className=''>
            <div className='text-center'>
              <Image
                src='/img/logo-dark.png'
                width={200}
                height={200}
                alt='logo'
                className='hidden lg:block mx-auto w-36'
              />
              <Image src='/img/logo.png' width={200} height={200} alt='logo' className='lg:hidden mx-auto w-36' />
              <h1
                className='text-3xl font-semibold text-white lg:text-black'
                //   style={passeroOne.style}
              >
                <span className='text-white lg:text-black'>Adven</span>
                <span className='text-[#ECD400]'>Tour</span>
              </h1>
            </div>
            <form className='mt-10'>
              <div className='my-5'>
                <label htmlFor='username' className='text-sm text-white md:text-base lg:text-black'>
                  Username
                </label>
                <input
                  type='text'
                  id='username'
                  name='username'
                  //   value={formLogin.username}
                  //   onChange={handleChange}
                  placeholder='Your username'
                  className='mt-2 w-full rounded-lg border border-gray-400 px-4 py-2 text-sm focus:border-prime-yellow focus:outline-none focus:ring-0 md:text-base'
                />
              </div>
              <div className='my-5'>
                <label htmlFor='password' className='text-sm text-white md:text-base lg:text-black'>
                  Password
                </label>
                <input
                  type='password'
                  id='password'
                  name='password'
                  // value={formLogin.password}
                  // onChange={handleChange}
                  placeholder='Your password'
                  className='mt-2 w-full rounded-lg border border-gray-400 px-4 py-2 text-sm focus:border-prime-yellow focus:outline-none focus:ring-0 md:text-base'
                />
              </div>
              <div className='my-5'>
                <button
                  type='submit'
                  className='w-full rounded-lg bg-prime-yellow py-2 text-sm text-black hover:bg-yellow-400 md:text-base'
                >
                  Submit
                </button>
                <div className='mt-2 text-center'>
                  <p className='text-white lg:text-black'>
                    Don&apos;t have account?{' '}
                    <Link href='/register' className='font-semibold text-prime-yellow'>
                      Sign Up
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
