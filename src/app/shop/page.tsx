"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Filter from '../components/Filter';
import ProductGrid from '../components/ProductGrid';
import { ShopProvider } from '../context/ShopContext';

export default function Shop() {
  return (
    <ShopProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-4xl font-bold mb-4">All Products</h1>
            <p className="text-gray-600">
              Browse our complete collection of fashion items, jewelry, and perfumes.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div>
              
            </div>
            <div className="flex-1">
              <ProductGrid />
            </div>
          </div>
        </main>
      </div>
    </ShopProvider>
  );
} 