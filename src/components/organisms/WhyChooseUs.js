import { dataSite } from '@/data';

export default function WhyChooseUs() {
  return (
    <section
      id='why-choose-us'
      className='max-w-7xl mx-auto px-6 md:px-12 py-16'
    >
      <h2 className='text-center text-orange-500 mb-2 text-sm uppercase'>
        Why Choose Us
      </h2>
      <h3 className='text-4xl text-center font-bold mb-6'>
        From financial clarity to regulatory compliance.{' '}
        <span className='italic text-blue-500'>A reliable partnership</span>
        built on accuracy, transparency, and professional expertise.
      </h3>

      <div className='flex flex-col md:flex-row justify-center items-center gap-6 mb-10'>
        <img
          src={dataSite.image_hero}
          alt='Accounting Team Working'
          className='rounded-lg w-full md:w-1/4'
        />
        <img
          src={dataSite.image_hero2}
          alt='Financial Review Presentation'
          className='rounded-lg w-full h-72 object-cover md:w-1/2'
        />
      </div>

      <div className='bg-gray-50 p-6 rounded-2xl text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6'>
        <div>
          <h4 className='text-2xl font-bold mb-2'>
            We deliver trusted accounting and audit solutions
          </h4>
          <p className='text-gray-600 mb-4'>
            From financial reporting and tax compliance to independent audits
            and advisory services, our expert team ensures your business meets
            regulatory standards with precision and confidence. Partner with us
            for accurate insights that drive smarter financial decisions.
          </p>
        </div>
      </div>
    </section>
  );
}
