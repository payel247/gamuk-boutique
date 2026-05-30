import React from 'react';
import { Link } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';

const Home = () => {
  usePageTitle('Authentic East African Net Washcloths');
  return (
    <div className="bg-sand">
      {/* Hero Section */}
      <div className="relative bg-deep-forest text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="/images/hero-lifestyle.png"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">
              The Authentic East African Scrub. Radiant Skin, Simplified.
            </h1>
            <p className="text-xl sm:text-2xl mb-10 text-sand opacity-90">
              Experience the traditional Gamuk—the exfoliating net washcloth that lasts longer, cleans deeper, and leaves your skin glowing.
            </p>
            <Link to="/products" className="btn-primary inline-block">
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Value Propositions */}
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-terracotta mb-4">Unbeatable Exfoliation</h3>
            <p className="text-charcoal opacity-80">Our unique net texture removes dead skin cells and unclogs pores more effectively than any loofah.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-terracotta mb-4">Hygiene First</h3>
            <p className="text-charcoal opacity-80">The porous design allows for rapid drying, preventing the growth of mold and bacteria.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-terracotta mb-4">Reach Every Inch</h3>
            <p className="text-charcoal opacity-80">The long, flexible design makes it easy to scrub those hard-to-reach spots on your back.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-terracotta mb-4">Eco-Friendly & Durable</h3>
            <p className="text-charcoal opacity-80">A Gamuk is built to last for over a year, reducing waste and saving you money.</p>
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div className="bg-sand py-16 border-t border-b border-terracotta/20">
        <div className="max-w-4xl mx-auto px-4 text-center italic text-2xl font-serif text-deep-forest">
          "It feels like home. I’ve tried everything, but nothing compares to the real thing. My skin hasn't felt this soft since I was back in Kampala!"
          <span className="block mt-4 text-lg not-italic font-sans text-charcoal font-bold">— Faith K., London</span>
        </div>
      </div>

      {/* Featured Products/Bundles Link */}
      <div className="py-24 text-center">
        <h2 className="text-3xl font-bold mb-12">Upgrade Your Bath Routine</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="max-w-sm p-6 bg-white rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-2">The Essentials (3-Pack)</h3>
            <p className="text-gray-600 mb-4">Perfect for the individual. Freshness for the whole year.</p>
            <Link to="/products" className="text-terracotta font-bold hover:underline">Learn more →</Link>
          </div>
          <div className="max-w-sm p-6 bg-white rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-2">The Family Bundle (6-Pack)</h3>
            <p className="text-gray-600 mb-4">A Gamuk for every member of the household.</p>
            <Link to="/products" className="text-terracotta font-bold hover:underline">Learn more →</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
