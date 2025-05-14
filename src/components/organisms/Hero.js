'use client';

import { dataSite } from '@/data';

export default function Hero() {
  return (
    <section className='relative bg-gradient-to-r from-orange-50 to-gray-100 py-16'>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12'>
        {/* Left Content */}
        <div className='max-w-xl mb-10 md:mb-0'>
          <h1 className='text-5xl font-bold text-gray-900 mb-6 leading-tight'>
            {dataSite.name}
          </h1>
          <p className='text-gray-600 mb-6'>{dataSite.description}</p>
          <button className='bg-black text-white rounded-full px-6 py-2 hover:bg-gray-800 transition'>
            Explore More
          </button>
        </div>

        {/* Cards */}
        <div className='relative flex space-x-6'>
          {/* Background Event Image */}
          <img
            src={dataSite.image_hero}
            alt='Concert Crowd'
            className='rounded-xl w-[400px] h-[400px] object-cover'
          />

          {/* Event Card 1 */}
          <div className='absolute -left-48 top-0 bg-white rounded-xl shadow-lg w-72 p-4'>
            <img
              src={dataSite.services[0].image}
              alt='Dayland Festival'
              className='rounded-lg w-full h-32 object-cover mb-4'
            />

            <p className='text-sm text-orange-500 mb-1'>
              {dataSite.services[0].title}
            </p>
          </div>

          {/* Event Card 2 */}
          <div className='absolute -right-20 bottom-0 bg-white rounded-xl shadow-lg w-72 p-4'>
            <img
              src={dataSite.services[1].image}
              alt='Flamenco Night'
              className='rounded-lg w-full h-32 object-cover mb-4'
            />
            <p className='text-sm text-orange-500 mb-1'>
              {dataSite.services[1].title}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
