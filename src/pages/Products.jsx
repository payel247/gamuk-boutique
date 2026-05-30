import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data';
import { useCart } from '../context/CartContext';

const Products = () => {
  const { addToCart } = useCart();

  return (
    <div className="bg-sand min-h-screen">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-deep-forest mb-12">The Collection</h2>

        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product.id} className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                {product.category === 'Bundles' && (
                  <span className="absolute top-4 left-4 bg-ochre text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Best Value
                  </span>
                )}
              </Link>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-charcoal leading-tight">
                    <Link to={`/product/${product.id}`}>
                      {product.name}
                    </Link>
                  </h3>
                  <p className="text-xl font-bold text-terracotta">${product.price.toFixed(2)}</p>
                </div>
                <p className="text-gray-600 text-sm mb-6 flex-1">{product.description}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="w-full btn-secondary text-sm"
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
