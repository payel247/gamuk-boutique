import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { cartCount } = useCart();

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                className="h-12 w-auto"
                src="/images/gamuk-logo-draft.png"
                alt="Gamuk Boutique"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span className="hidden text-2xl font-bold text-terracotta ml-2" style={{display: 'none'}}>Gamuk Boutique</span>
            </Link>
            <div className="hidden sm:ml-10 sm:flex sm:space-x-8">
              <Link to="/" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-charcoal hover:border-terracotta hover:text-terracotta transition-colors">Home</Link>
              <Link to="/products" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-charcoal hover:border-terracotta hover:text-terracotta transition-colors">Shop</Link>
              <Link to="/about" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-charcoal hover:border-terracotta hover:text-terracotta transition-colors">Our Story</Link>
              <Link to="/contact" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-charcoal hover:border-terracotta hover:text-terracotta transition-colors">Contact</Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link to="/cart" className="p-2 rounded-full text-charcoal hover:bg-sand transition-colors relative">
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-terracotta rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-charcoal hover:bg-sand focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden bg-white border-t border-sand">
          <div className="pt-2 pb-3 space-y-1">
            <Link 
              to="/" 
              className="block pl-3 pr-4 py-3 text-base font-medium text-charcoal hover:bg-sand hover:text-terracotta"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className="block pl-3 pr-4 py-3 text-base font-medium text-charcoal hover:bg-sand hover:text-terracotta"
              onClick={() => setIsOpen(false)}
            >
              Shop
            </Link>
            <Link 
              to="/about" 
              className="block pl-3 pr-4 py-3 text-base font-medium text-charcoal hover:bg-sand hover:text-terracotta"
              onClick={() => setIsOpen(false)}
            >
              Our Story
            </Link>
            <Link 
              to="/contact" 
              className="block pl-3 pr-4 py-3 text-base font-medium text-charcoal hover:bg-sand hover:text-terracotta"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/cart" 
              className="block pl-3 pr-4 py-3 text-base font-medium text-charcoal hover:bg-sand hover:text-terracotta"
              onClick={() => setIsOpen(false)}
            >
              Cart ({cartCount})
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
