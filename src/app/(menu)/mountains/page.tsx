'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/solid';

export default function Mountains() {
  const [menuRegionOpen, setMenuRegionOpen] = useState(false);
  const [menuHeightOpen, setMenuHeightOpen] = useState(true);

  const regions = [
    'Aceh',
    'Bali',
    'Banten',
    'Bengkulu',
    'Gorontalo',
    'Jakarta',
    'Jambi',
    'Jawa Barat',
    'Jawa Tengah',
    'Jawa Timur',
    'Kalimantan Barat',
    'Kalimantan Selatan',
    'Kalimantan Tengah',
    'Kalimantan Timur',
    'Kalimantan Utara',
    'Kepulauan Bangka Belitung',
    'Kepulauan Riau',
    'Lampung',
    'Maluku',
    'Maluku Utara',
    'Nusa Tenggara Barat',
    'Nusa Tenggara Timur',
    'Papua',
    'Papua Barat',
    'Papua Selatan',
    'Papua Pegunungan',
    'Papua Tengah',
    'Riau',
    'Sulawesi Barat',
    'Sulawesi Selatan',
    'Sulawesi Tengah',
    'Sulawesi Tenggara',
    'Sulawesi Utara',
    'Sumatra Barat',
    'Sumatra Selatan',
    'Sumatra Utara',
    'Yogyakarta',
  ];
  const heights = ['<1000', '2000-3000', '>3000'];

  const toogleRegion = () => {
    setMenuRegionOpen(!menuRegionOpen);
  };

  const toogleHeight = () => {
    setMenuHeightOpen(!menuHeightOpen);
  };

  return (
    <>
      <section className='h-80 w-full bg-home bg-cover bg-center'>
        <div className='flex h-full w-full items-center justify-center bg-black bg-opacity-50'>
          <div className=''>
            <div className='mt-4 text-center text-white'>
              <h1 className='text-xl font-bold text-white md:text-3xl'>Search Mountain</h1>
            </div>
          </div>
        </div>
      </section>
      <section
        className='mx-auto my-10 block gap-x-8 px-5 md:flex  md:justify-center'
        // style={poppins.style}
      >
        <div className='h-fit w-full flex-col overflow-hidden rounded-xl bg-white px-2 py-4 text-sm drop-shadow-lg md:w-48 md:text-xs lg:w-56 lg:text-sm xl:w-64'>
          <form className='max-w-md mx-auto'>
            <div className='relative'>
              <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                <svg
                  className='w-4 h-4 text-gray-500 dark:text-gray-400'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 20 20'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    stroke-Width='2'
                    d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                  />
                </svg>
              </div>
              <input
                type='search'
                id='default-search'
                className='block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:border-prime-yellow focus:outline-none'
                placeholder='Type mountain...'
                required
              />
            </div>
            <button
              onClick={toogleRegion}
              className={`w-full rounded-md px-4 py-2 text-start bg-yellow-300 mt-2 flex justify-between`}
            >
              <span>Region</span>
              {menuRegionOpen ? (
                <ChevronDownIcon className='h-4 w-4 my-auto' />
              ) : (
                <ChevronRightIcon className='h-4 w-4 my-auto' />
              )}
            </button>
            {menuRegionOpen && (
              <div className='mb-4 px-4 mt-4'>
                <div className='checkbox-group'>
                  {regions.map((region) => (
                    <div key={region} className='flex items-center mb-4'>
                      <input
                        id='default-checkbox'
                        type='checkbox'
                        name='regions'
                        value={region}
                        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                      />
                      <label
                        htmlFor='default-checkbox'
                        className='ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                      >
                        {region}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <button
              onClick={toogleHeight}
              className={`w-full rounded-md px-4 py-2 text-start bg-yellow-300 mt-2 flex justify-between`}
            >
              <span>Height </span>
              {menuHeightOpen ? (
                <ChevronDownIcon className='h-4 w-4 my-auto' />
              ) : (
                <ChevronRightIcon className='h-4 w-4 my-auto' />
              )}
            </button>
            {menuHeightOpen && (
              <div className='mb-4 px-4 mt-4'>
                <div className='checkbox-group'>
                  {heights.map((height) => (
                    <div key={height} className='flex items-center mb-4'>
                      <input
                        id='default-checkbox'
                        type='checkbox'
                        name='regions'
                        value={height}
                        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                      />
                      <label
                        htmlFor='default-checkbox'
                        className='ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                      >
                        {height} mdpl
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {/* <div className='mb-4 px-4'>
              <label className='block font-medium mb-2'>Height:</label>
              <div className='checkbox-group'>
                {heights.map((height) => (
                  <div key={height} className='flex items-center mb-4'>
                    <input
                      id='default-checkbox'
                      type='checkbox'
                      name='regions'
                      value={height}
                      className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                    />
                    <label
                      htmlFor='default-checkbox'
                      className='ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                    >
                      {height} mdpl
                    </label>
                  </div>
                ))}
              </div>
            </div> */}
            <button type='submit' className={`w-full rounded-md px-4 py-2 mt-2 bg-prime-yellow text-black text-center`}>
              Submit
            </button>
          </form>
          {/* <button className={`w-full rounded-md px-4 py-2 text-start`}>Sarung Kursi</button>
          <button className={`w-full rounded-md px-4 py-2 text-start`}>Rumbai / Poni Tenda</button>
          <button className={`w-full rounded-md px-4 py-2 text-start`}>Plafon Dekorasi Tenda</button>
          <button className={`w-full rounded-md px-4 py-2 text-start`}>Cover Meja</button>
          <button className={`w-full rounded-md px-4 py-2 text-start`}>Kain Pelamin</button>
          <button className={`w-full rounded-md px-4 py-2 text-start`}>Background Dinding</button>
          <button className={`w-full rounded-md px-4 py-2 text-start`}>Dekorasi Tenda Lengkap</button>
          <button className={`w-full rounded-md px-4 py-2 text-start`}>Terpal Tenda</button>
          <button className={`w-full rounded-md px-4 py-2 text-start`}>Kain Lotto</button> */}
        </div>
        <div className='mt-5 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
          <div className='card-product flex h-fit w-full flex-col rounded-lg bg-white drop-shadow-lg md:w-36 lg:w-40 xl:w-56'>
            <Image
              src={`/img/background.png`}
              height={130}
              width={130}
              alt='product'
              className='h-fit w-full object-cover'
            />
            <div className='p-2'>
              <p className='h-14 text-xs'>Nama</p>
              <p className='mt-1 font-bold md:text-xs lg:text-sm'>Harga</p>
            </div>
          </div>
          <div className='card-product flex h-fit w-full flex-col rounded-lg bg-white drop-shadow-lg md:w-36 lg:w-40 xl:w-56'>
            <Image
              src={`/img/background.png`}
              height={130}
              width={130}
              alt='product'
              className='h-fit w-full object-cover'
            />
            <div className='p-2'>
              <p className='h-14 text-xs'>Nama</p>
              <p className='mt-1 font-bold md:text-xs lg:text-sm'>Harga</p>
            </div>
          </div>
          <div className='card-product flex h-fit w-full flex-col rounded-lg bg-white drop-shadow-lg md:w-36 lg:w-40 xl:w-56'>
            <Image
              src={`/img/background.png`}
              height={130}
              width={130}
              alt='product'
              className='h-fit w-full object-cover'
            />
            <div className='p-2'>
              <p className='h-14 text-xs'>Nama</p>
              <p className='mt-1 font-bold md:text-xs lg:text-sm'>Harga</p>
            </div>
          </div>
          <div className='card-product flex h-fit w-full flex-col rounded-lg bg-white drop-shadow-lg md:w-36 lg:w-40 xl:w-56'>
            <Image
              src={`/img/background.png`}
              height={130}
              width={130}
              alt='product'
              className='h-fit w-full object-cover'
            />
            <div className='p-2'>
              <p className='h-14 text-xs'>Nama</p>
              <p className='mt-1 font-bold md:text-xs lg:text-sm'>Harga</p>
            </div>
          </div>
          <div className='card-product flex h-fit w-full flex-col rounded-lg bg-white drop-shadow-lg md:w-36 lg:w-40 xl:w-56'>
            <Image
              src={`/img/background.png`}
              height={130}
              width={130}
              alt='product'
              className='h-fit w-full object-cover'
            />
            <div className='p-2'>
              <p className='h-14 text-xs'>Nama</p>
              <p className='mt-1 font-bold md:text-xs lg:text-sm'>Harga</p>
            </div>
          </div>
          <div className='card-product flex h-fit w-full flex-col rounded-lg bg-white drop-shadow-lg md:w-36 lg:w-40 xl:w-56'>
            <Image
              src={`/img/background.png`}
              height={130}
              width={130}
              alt='product'
              className='h-fit w-full object-cover'
            />
            <div className='p-2'>
              <p className='h-14 text-xs'>Nama</p>
              <p className='mt-1 font-bold md:text-xs lg:text-sm'>Harga</p>
            </div>
          </div>
          <div className='card-product flex h-fit w-full flex-col rounded-lg bg-white drop-shadow-lg md:w-36 lg:w-40 xl:w-56'>
            <Image
              src={`/img/background.png`}
              height={130}
              width={130}
              alt='product'
              className='h-fit w-full object-cover'
            />
            <div className='p-2'>
              <p className='h-14 text-xs'>Nama</p>
              <p className='mt-1 font-bold md:text-xs lg:text-sm'>Harga</p>
            </div>
          </div>
          <div className='card-product flex h-fit w-full flex-col rounded-lg bg-white drop-shadow-lg md:w-36 lg:w-40 xl:w-56'>
            <Image
              src={`/img/background.png`}
              height={130}
              width={130}
              alt='product'
              className='h-fit w-full object-cover'
            />
            <div className='p-2'>
              <p className='h-14 text-xs'>Nama</p>
              <p className='mt-1 font-bold md:text-xs lg:text-sm'>Harga</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
