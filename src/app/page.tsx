"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Filter from './components/Filter';
import ProductGrid from './components/ProductGrid';
import { ShopProvider } from './context/ShopContext';
import { categories } from './data/products';

export default function Home() {
  return (
    <ShopProvider>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[600px] w-full">
          <Image
            src="/hero.jpg"
            alt="Hero Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-bold mb-4"
            >
              Summer Collection 2024
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl mb-8"
            >
              Discover the latest trends in fashion
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                href="/shop"
                className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
              >
                Shop Now
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Featured Categories */}
        <section className="py-16 px-4 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.slice(0, 4).map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative h-64 rounded-lg overflow-hidden group"
              >
                <Image
                  src={`/featured${index + 1}.jpg`}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">{category.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Special Offers */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Special Offers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Summer Sale", desc: "Up to 50% off" },
                { title: "New Arrivals", desc: "Latest Collection" },
                { title: "Special Deals", desc: "Limited Time Offers" },
              ].map((offer, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative h-80 rounded-lg overflow-hidden group"
                >
                  <Image
                    src={`/offer${index + 1}.jpg`}
                    alt={offer.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
                    <p className="text-lg">{offer.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Quality Products",
                  desc: "We offer only the best quality products with premium materials and craftsmanship",
                  icon: "✨"
                },
                {
                  title: "Fast Delivery",
                  desc: "Quick and reliable shipping worldwide with real-time tracking",
                  icon: "🚚"
                },
                {
                  title: "Secure Payment",
                  desc: "Safe and secure payment methods with SSL encryption",
                  icon: "🔒"
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">Welcome to Our Store</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our latest collection of fashion items, jewelry, and perfumes.
              Shop with confidence and enjoy our wide selection of products.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* <div>
              <Filter isOpen={true} onClose={() => {}} />
            </div> */}
            <div className="w-full">
              <ProductGrid />
            </div>
          </div>
    </main>

        <footer className="bg-white border-t mt-12">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-semibold mb-4">About Us</h3>
                <p className="text-gray-600">
                  We are dedicated to providing the best shopping experience with quality products and excellent service.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="/shop" className="text-gray-600 hover:text-accent">Shop</a></li>
                  <li><a href="/about" className="text-gray-600 hover:text-accent">About</a></li>
                  <li><a href="/contact" className="text-gray-600 hover:text-accent">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Customer Service</h3>
                <ul className="space-y-2">
                  <li><a href="/shipping" className="text-gray-600 hover:text-accent">Shipping Policy</a></li>
                  <li><a href="/returns" className="text-gray-600 hover:text-accent">Returns & Exchanges</a></li>
                  <li><a href="/faq" className="text-gray-600 hover:text-accent">FAQ</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Contact Us</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Email: support@shopify.com</li>
                  <li>Phone: +91 9307XXXX38</li>
                  <li>Address: Greater Noida West, Uttar Pradesh, India</li>
                </ul>
              </div>
            </div>
            <div className="border-t mt-8 pt-8 text-center text-gray-600">
              <p>&copy; 2025 Shopify. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </ShopProvider>
  );
}
