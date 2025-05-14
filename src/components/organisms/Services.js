import { dataSite } from '@/data';

export default function Services() {
  return (
    <section id='services' className='max-w-7xl mx-auto px-6 md:px-12 py-16'>
      <div className='flex flex-col md:flex-row justify-between items-start mb-10'>
        <h2 className='text-4xl font-bold mb-4 md:mb-0'>Our Services </h2>
        <p className='text-gray-600 max-w-2xl'>
          We offer a wide range of services to cater to your needs.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {/* Workshop 1 */}

        {dataSite.services.map((service, index) => (
          <div key={index + 'id'} className='bg-gray-50 p-6 rounded-2xl'>
            <div className='flex gap-2 mb-4'>
              <span className='bg-orange-500 text-white px-3 py-1 rounded-full text-sm'>
                Online
              </span>
            </div>
            <h3 className='text-2xl font-bold mb-2'>{service.title}</h3>
            <p className='text-gray-600 mb-4'>{service.description}</p>
            {/* image */}

            <img
              src={service.image}
              alt={service.title}
              className='rounded-lg w-full h-60 object-contain mb-4'
            />
          </div>
        ))}
      </div>
    </section>
  );
}
