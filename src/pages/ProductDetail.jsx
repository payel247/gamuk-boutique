import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data';
import { useCart } from '../context/CartContext';
import { ChevronLeft, ShieldCheck, Truck, RefreshCcw } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center bg-sand min-h-screen">
        <h2 className="text-2xl font-bold">Product not found</h2>
        <Link to="/products" className="mt-4 inline-block text-terracotta hover:underline">
          Back to products
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-sand min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <nav className="mb-8">
          <Link to="/products" className="flex items-center text-sm font-medium text-gray-500 hover:text-terracotta transition-colors">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Collection
          </Link>
        </nav>

        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-start">
          {/* Image gallery */}
          <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-white shadow-sm">
            <img src={product.image} alt={product.name} className="h-full w-full object-cover object-center" />
          </div>

          {/* Product info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-deep-forest sm:text-4xl mb-4">{product.name}</h1>
            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-terracotta font-bold">${product.price.toFixed(2)}</p>
            </div>

            <div className="mt-8">
              <h3 className="sr-only">Description</h3>
              <p className="text-lg text-charcoal leading-relaxed opacity-90">{product.description}</p>
            </div>

            <div className="mt-10">
              <button
                onClick={() => addToCart(product)}
                className="w-full btn-primary py-4 text-lg"
              >
                Add to Cart
              </button>
            </div>

            {/* Features list */}
            <section className="mt-12 pt-12 border-t border-terracotta/20">
              <div className="grid grid-cols-1 gap-y-6">
                <div className="flex items-center">
                  <ShieldCheck className="h-6 w-6 text-ochre mr-3" />
                  <span className="text-charcoal font-medium">Authentic West African Quality</span>
                </div>
                <div className="flex items-center">
                  <Truck className="h-6 w-6 text-ochre mr-3" />
                  <span className="text-charcoal font-medium">Fast Worldwide Shipping</span>
                </div>
                <div className="flex items-center">
                  <RefreshCcw className="h-6 w-6 text-ochre mr-3" />
                  <span className="text-charcoal font-medium">Hygienic & Durable Material</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
