import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-sand pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-bold text-terracotta mb-6 block">Gamuk Boutique</Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              Bringing the traditional, exfoliating bath sponge from East Africa to your doorstep. Authentic, durable, and radiant skin.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-charcoal uppercase tracking-wider text-sm mb-6">Shop</h4>
            <ul className="space-y-4">
              <li><Link to="/products" className="text-gray-500 hover:text-terracotta text-sm transition-colors">All Products</Link></li>
              <li><Link to="/products" className="text-gray-500 hover:text-terracotta text-sm transition-colors">Bundles</Link></li>
              <li><Link to="/products" className="text-gray-500 hover:text-terracotta text-sm transition-colors">New Arrivals</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-charcoal uppercase tracking-wider text-sm mb-6">About</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-500 hover:text-terracotta text-sm transition-colors">Our Story</Link></li>
              <li><Link to="/contact" className="text-gray-500 hover:text-terracotta text-sm transition-colors">Contact Us</Link></li>
              <li><Link to="/faq" className="text-gray-500 hover:text-terracotta text-sm transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-charcoal uppercase tracking-wider text-sm mb-6">Connect</h4>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-gray-400 hover:text-terracotta transition-colors"><Instagram className="h-6 w-6" /></a>
              <a href="#" className="text-gray-400 hover:text-terracotta transition-colors"><Facebook className="h-6 w-6" /></a>
              <a href="#" className="text-gray-400 hover:text-terracotta transition-colors"><Twitter className="h-6 w-6" /></a>
            </div>
            <p className="text-gray-500 text-xs">Join our newsletter for updates and skincare tips.</p>
          </div>
        </div>
        
        <div className="border-t border-sand pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs">
          <p>&copy; {new Date().getFullYear()} Gamuk Boutique. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-terracotta">Privacy Policy</a>
            <a href="#" className="hover:text-terracotta">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
