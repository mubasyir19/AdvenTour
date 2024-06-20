import { Poppins } from 'next/font/google';
import Link from 'next/link';
import React from 'react';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default function Navbar() {
  return (
    <nav className='fixed z-10 left-1/2 top-3 w-11/12 -translate-x-1/2 transform rounded-xl bg-black bg-opacity-50 px-4 py-2 drop-shadow-xl backdrop-blur-md lg:w-1/2'>
      <div className='flex justify-around text-white' style={poppins.style}>
        <Link href='/' className='my-auto'>
          Home
        </Link>
        <Link href='/mountains' className='my-auto'>
          Mountains
        </Link>
        <Link href='/about-us' className='my-auto'>
          About Us
        </Link>
        <Link href='/login' className='rounded-lg bg-yellow-300 text-black px-4 py-2'>
          Login
        </Link>
        {/* {isLogin ? (
          <button
            onClick={toogleOpenMenu}
            className="relative rounded-lg bg-white px-4 py-2 drop-shadow-md"
          >
            <div className="flex gap-x-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="my-auto h-6 w-6"
              >
                <path
                  d="M12 0C13.5913 0 15.1174 0.632141 16.2426 1.75736C17.3679 2.88258 18 4.4087 18 6C18 7.5913 17.3679 9.11742 16.2426 10.2426C15.1174 11.3679 13.5913 12 12 12C10.4087 12 8.88258 11.3679 7.75736 10.2426C6.63214 9.11742 6 7.5913 6 6C6 4.4087 6.63214 2.88258 7.75736 1.75736C8.88258 0.632141 10.4087 0 12 0ZM12 15C18.63 15 24 17.685 24 21V24H0V21C0 17.685 5.37 15 12 15Z"
                  fill="#6EE7B7"
                />
              </svg>
              <p className="my-auto">{user}</p>
              {isMenuOpen && (
                <div className="absolute inset-x-0 top-10 flex flex-col rounded-lg border border-slate-200 bg-white">
                  <Link
                    href="/profile"
                    className="rounded-lg px-4 py-1 hover:bg-slate-100"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={toogleLogout}
                    className="rounded-lg px-4 py-1 hover:bg-slate-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </button>
        ) : (
          <Link href="/login" className="rounded-lg bg-emerald-300 px-4 py-2">
            Login
          </Link>
        )} */}
      </div>
    </nav>
  );
}
