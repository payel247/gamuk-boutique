import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    clearCart();
  };

  if (submitted) {
    return (
      <div className="bg-sand min-h-screen py-24 px-4 text-center">
        <div className="max-w-xl mx-auto bg-white p-12 rounded-2xl shadow-sm">
          <h2 className="text-3xl font-bold text-deep-forest mb-4">Thank you for your order!</h2>
          <p className="text-lg text-gray-600 mb-8">
            Your Gamuk scrub is on its way. We've sent a confirmation email to your inbox.
          </p>
          <Link to="/" className="btn-primary inline-block">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="bg-sand min-h-screen py-24 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <Link to="/products" className="text-terracotta hover:underline">
          Go to Collection
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-sand min-h-screen py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-deep-forest mb-12">Checkout</h1>

        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-start">
          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-sm space-y-8">
            <div>
              <h2 className="text-xl font-bold text-charcoal mb-6">Shipping Information</h2>
              <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-4">
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input required type="email" className="mt-1 block w-full rounded-md border-gray-300 border p-3" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">First Name</label>
                  <input required type="text" className="mt-1 block w-full rounded-md border-gray-300 border p-3" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input required type="text" className="mt-1 block w-full rounded-md border-gray-300 border p-3" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Address</label>
                  <input required type="text" className="mt-1 block w-full rounded-md border-gray-300 border p-3" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">City</label>
                  <input required type="text" className="mt-1 block w-full rounded-md border-gray-300 border p-3" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Postal Code</label>
                  <input required type="text" className="mt-1 block w-full rounded-md border-gray-300 border p-3" />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-charcoal mb-6">Payment Method</h2>
              <p className="text-sm text-gray-500 mb-4">Note: This is a demo checkout. No actual payment will be processed.</p>
              <div className="space-y-4">
                <label className="flex items-center p-4 border rounded-md cursor-pointer hover:bg-sand transition-colors">
                  <input type="radio" name="payment" defaultChecked className="text-terracotta focus:ring-terracotta" />
                  <span className="ml-3 font-medium">Credit / Debit Card</span>
                </label>
                <label className="flex items-center p-4 border rounded-md cursor-pointer hover:bg-sand transition-colors">
                  <input type="radio" name="payment" className="text-terracotta focus:ring-terracotta" />
                  <span className="ml-3 font-medium">PayPal</span>
                </label>
              </div>
            </div>

            <button type="submit" className="w-full btn-primary py-4 text-lg">
              Place Order (${cartTotal.toFixed(2)})
            </button>
          </form>

          {/* Summary */}
          <div className="mt-10 lg:mt-0">
            <h2 className="text-xl font-bold text-charcoal mb-6">Order Summary</h2>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <ul className="divide-y divide-gray-200">
                {cart.map((item) => (
                  <li key={item.id} className="py-4 flex">
                    <img src={item.image} alt={item.name} className="h-16 w-16 rounded object-cover" />
                    <div className="ml-4 flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-gray-500 text-sm">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t pt-6 space-y-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-deep-forest">
                  <span>Total</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
