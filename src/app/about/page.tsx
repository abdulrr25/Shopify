"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '../components/Header';
import { ShopProvider } from '../context/ShopContext';

export default function About() {
  return (
    <ShopProvider>
      <main className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="relative h-[500px] w-full">
          <Image
            src="/about-hero.jpg"
            alt="About Us"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-bold mb-4 text-center"
            >
              About Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-center max-w-2xl px-4"
            >
              Discover our journey of bringing quality fashion to your doorstep
            </motion.p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Founded in 2020, we started with a simple mission: to make quality fashion accessible to everyone. 
                What began as a small online store has grown into a trusted destination for fashion enthusiasts worldwide.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative h-[500px] rounded-xl overflow-hidden shadow-xl"
              >
                <Image
                  src="/mission.jpg"
                  alt="Our Mission"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-6"
              >
                <h2 className="text-4xl font-bold">Our Mission</h2>
                <p className="text-gray-600 text-lg">
                  We are dedicated to providing our customers with the highest quality fashion products
                  while ensuring exceptional customer service and sustainable practices.
                </p>
                <p className="text-gray-600 text-lg">
                  Our goal is to make fashion accessible to everyone while maintaining the highest
                  standards of quality and ethical business practices.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-6">
                  <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-accent mb-2">10K+</div>
                    <div className="text-gray-600">Happy Customers</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-accent mb-2">50+</div>
                    <div className="text-gray-600">Countries Served</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Our Values</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                These core values guide everything we do, from product selection to customer service
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Quality",
                  desc: "We never compromise on the quality of our products, ensuring each item meets our high standards",
                  icon: "✨"
                },
                {
                  title: "Customer First",
                  desc: "Your satisfaction is our top priority, and we're committed to providing exceptional service",
                  icon: "👥"
                },
                {
                  title: "Sustainability",
                  desc: "We are committed to eco-friendly practices and reducing our environmental impact",
                  icon: "🌱"
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Why Choose Us</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We're committed to providing the best shopping experience for our customers
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Quality Products",
                  desc: "Carefully curated selection of premium fashion items",
                  icon: "🎯"
                },
                {
                  title: "Fast Delivery",
                  desc: "Quick and reliable shipping to your doorstep",
                  icon: "🚚"
                },
                {
                  title: "Secure Payment",
                  desc: "Safe and encrypted payment processing",
                  icon: "🔒"
                },
                {
                  title: "24/7 Support",
                  desc: "Round-the-clock customer service assistance",
                  icon: "💬"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </ShopProvider>
  );
} 