import { dataSite } from '@/data';

export default function AccountingHero() {
  return (
    <section className='flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 md:px-12 py-16'>
      {/* Left Graphic */}
      <div className='relative w-full md:w-1/2 flex justify-center mb-12 md:mb-0'>
        {/* Decorative Shape */}
        <div className='absolute top-10 left-0 bg-green-300 rounded-[50%] w-72 h-48 z-0'></div>

        {/* Main Image */}
        <div className='relative z-10'>
          <img
            src={dataSite.services[2].image}
            alt='Financial team'
            className='rounded-xl w-72 mb-4'
          />
          <img
            src={dataSite.services[3].image}
            alt='Audit review'
            className='rounded-xl w-64 absolute top-24 -left-32 z-20'
          />
        </div>
      </div>

      {/* Right Content */}
      <div className='w-full md:w-1/2 text-center md:text-left'>
        <h2 className='text-4xl font-bold mb-6'>
          Trusted Expertise in <br /> Accounting & Auditing
        </h2>
        <p className='text-gray-600 mb-6'>
          Whether you&apos;re a growing business or an established enterprise,
          our accounting and auditing services provide accurate financial
          insights, regulatory compliance, and operational transparency. Partner
          with us to ensure your finances are clear, organized, and fully
          optimized.
        </p>
        <button
          onClick={() => (window.location.href = '#about')}
          className='bg-orange-500 text-white rounded-full px-6 py-2 hover:bg-orange-600 transition'
        >
          Learn About Our Services
        </button>
      </div>
    </section>
  );
}
