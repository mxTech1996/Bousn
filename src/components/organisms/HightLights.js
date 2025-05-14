import { dataSite } from '@/data';
import React from 'react';

export default function AccountingHighlights() {
  return (
    <section
      id='about'
      className='max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8'
    >
      <div>
        <h2 className='text-4xl font-bold mb-4'>
          Ensure Financial Clarity for Your Organization
        </h2>
        <img
          src={dataSite.services[2].image}
          alt='Accounting and Audit'
          className='rounded-lg w-full h-96 object-cover mb-4'
        />
      </div>
      <div>
        <p className='mb-6 text-gray-600'>
          We provide specialized accounting and audit services designed to bring
          clarity, compliance, and confidence to your financial operations. From
          comprehensive audits to precise financial reporting, we help
          businesses build trust with stakeholders and meet regulatory standards
          with ease.
        </p>
        <hr className='border-t my-6' />
        <div className='space-y-6'>
          {dataSite.info.map((info, index) => (
            <div key={index + 'id'}>
              <button className='border border-orange-500 text-orange-500 px-4 py-1 rounded-full mb-2'>
                {info.title}
              </button>
              <p className='text-gray-600'>{info.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
