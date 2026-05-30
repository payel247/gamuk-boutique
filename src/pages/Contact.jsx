import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-sand min-h-screen py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-deep-forest mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">Have questions about our products or your order? We're here to help.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-terracotta mb-8">Get in Touch</h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-terracotta mr-4" />
                <div>
                  <h3 className="font-bold text-charcoal">Email</h3>
                  <p className="text-gray-600">hello@gamukboutique.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-terracotta mr-4" />
                <div>
                  <h3 className="font-bold text-charcoal">Location</h3>
                  <p className="text-gray-600">Kampala, Uganda / London, UK</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-terracotta mr-4" />
                <div>
                  <h3 className="font-bold text-charcoal">Phone</h3>
                  <p className="text-gray-600">+256 (0) 123 456 789</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 border p-2 shadow-sm focus:border-terracotta focus:ring-terracotta"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 border p-2 shadow-sm focus:border-terracotta focus:ring-terracotta"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 border p-2 shadow-sm focus:border-terracotta focus:ring-terracotta"
                  placeholder="How can we help?"
                />
              </div>
              <button
                type="submit"
                className="w-full btn-secondary"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
