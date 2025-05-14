'use client';

import { dataSite } from '@/data';

export default function StickyNavbar() {
  return (
    <header className='sticky top-0 z-50 bg-white shadow-md rounded-b-2xl mx-auto max-w-screen-xl flex items-center justify-between px-6 py-3'>
      <div className='flex items-center space-x-2'>
        <img
          src={dataSite.iconImage}
          alt='Logo'
          className='w-10 h-10 rounded-full'
        />
        <span className='font-semibold'>Bousn</span>
      </div>

      <nav className='flex items-center space-x-8 text-gray-800'>
        <a className='cursor-pointer' href='/'>
          Home
        </a>
        <a href='/#services' className='cursor-pointer'>
          Services
        </a>
        <a className='cursor-pointer' href='/#about'>
          About
        </a>
        <a href='/#testimonials' className='cursor-pointer'>
          Testimonials
        </a>
        <a href='/#products' className='cursor-pointer'>
          Products
        </a>
        <a className='cursor-pointer' href='/more-information'>
          Contact
        </a>
      </nav>

      <button
        onClick={() => (window.location.href = '/my-cart')}
        className='bg-orange-500 text-white rounded-full px-6 py-2 hover:bg-orange-600 transition'
      >
        Go to Cart
      </button>
    </header>
  );
}
