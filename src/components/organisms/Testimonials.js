import { dataSite } from '@/data';
import React from 'react';

// Sample testimonials
const testimonials = dataSite.references;
// Color variants
const bgColors = [
  'bg-green-100',
  'bg-blue-100',
  'bg-yellow-100',
  'bg-purple-100',
  'bg-pink-100',
];

function getInitials(name) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();
}

export default function TestimonialsSection() {
  return (
    <section id='testimonials' className='max-w-7xl mx-auto px-4 py-12'>
      <h2 className='text-3xl font-bold text-center mb-10'>
        What Our Clients Say
      </h2>
      <div className='grid md:grid-cols-3 gap-6'>
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className={`rounded-xl p-6 shadow ${
              bgColors[idx % bgColors.length]
            }`}
          >
            <div className='flex items-center mb-4'>
              {t.image ? (
                <img
                  src={t.image}
                  alt={t.name}
                  className='w-12 h-12 rounded-full'
                />
              ) : (
                <div className='w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 font-semibold'>
                  {getInitials(t.name)}
                </div>
              )}
              <div className='ml-4'>
                <p className='font-semibold'>{t.name}</p>
                <div className='flex'>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
              </div>
            </div>
            <p className='text-gray-700'>{t.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
