import { dataSite } from '@/data';
import { useCart } from 'ecommerce-mxtech';
import React from 'react';

const products = dataSite.products;
export default function ProductShowcase() {
  const { handleAddOrRemoveProduct, validateProductInCart } = useCart();
  return (
    <section id='products' className='max-w-7xl mx-auto px-4 py-12'>
      <h2 className='text-3xl font-bold text-center mb-10'>
        Latest Collections
      </h2>
      <div className='grid md:grid-cols-3 gap-6'>
        {products.map((product, idx) => {
          const isInCart = validateProductInCart(product.id);
          const handleClick = () => {
            handleAddOrRemoveProduct(product.id);
          };

          return (
            <div
              key={idx}
              className='rounded-xl overflow-hidden shadow bg-gray-50 hover:shadow-lg transition'
            >
              <div className='relative'>
                <img
                  src={product.image}
                  alt={product.name}
                  className='w-full h-64 object-cover'
                />
                <div className='absolute top-2 right-2 bg-orange-500 text-white text-xs px-3 py-1 rounded-full'>
                  $ {product.price}
                </div>
              </div>
              <div className='p-4'>
                <h3 className='text-lg font-semibold mb-2'>{product.name}</h3>
                <p className='text-sm text-gray-600'>{product.description}</p>
                {/* button add to cart */}

                <button
                  onClick={handleClick}
                  className={`mt-4 px-4 py-2 rounded-full text-white ${
                    isInCart ? 'bg-red-500' : 'bg-orange-500'
                  } hover:bg-orange-600 transition`}
                >
                  {isInCart ? 'Remove from Cart' : 'Add to Cart'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
