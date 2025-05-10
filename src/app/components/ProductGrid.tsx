"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useShop } from '../context/ShopContext';
import ProductCard from './ProductCard';
import Filter from './Filter';
import { SlidersHorizontal, Grid, List, ChevronDown } from 'lucide-react';
import { products } from '../data/products';

const ProductGrid = () => {
  const { filters } = useShop();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [gridView, setGridView] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = products.filter(product => {
    // Category filter
    if (filters.category && product.category !== filters.category) return false;
    
    // Subcategory filter
    if (filters.subcategory && product.subcategory !== filters.subcategory) return false;
    
    // Price range filter
    if (Number(product.price) < filters.priceRange[0] || Number(product.price) > filters.priceRange[1]) return false;
    
    // Sizes filter
    if (filters.sizes.length > 0 && !filters.sizes.some(size => product.sizes.includes(size))) return false;
    
    // In stock filter
    if (filters.inStock && !product.inStock) return false;
    
    // New arrivals filter
    if (filters.isNew && !product.isNew) return false;
    
    return true;
  });

  // Sort products based on selected option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return Number(a.price) - Number(b.price);
    if (sortBy === 'price-high') return Number(b.price) - Number(a.price);
    if (sortBy === 'rating') return b.rating - a.rating;
    // Default: featured/newest
    return a.isNew ? -1 : 1;
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="w-full py-12">
        <div className="flex flex-col lg:flex-row gap-8 w-full">
          {/* Filter Button for Mobile */}
          <button
            onClick={() => setIsFilterOpen(true)}
            className="lg:hidden flex items-center justify-center gap-2 px-6 py-3 bg-accent text-white rounded-xl hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <SlidersHorizontal className="w-5 h-5" />
            Filters
          </button>

          {/* Filter Sidebar */}
          <div className="hidden lg:block lg:w-80 flex-shrink-0">
            <div className="sticky top-8">
              <Filter isOpen={true} onClose={() => {}} />
            </div>
          </div>

          {/* Mobile Filter */}
          <Filter isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />

          {/* Products Section */}
          <div className="flex-1 w-full">
            {/* Grid View Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-8">
              <div className="flex items-center gap-4">
                <h2 className="text-3xl font-bold text-gray-800">
                  {filteredProducts.length} Products
                </h2>
                <div className="hidden sm:flex items-center gap-2 text-sm text-gray-600">
                  <span>Sort by:</span>
                  <button className="flex items-center gap-1 px-3 py-1.5 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                    Featured
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setGridView('grid')}
                  className={`p-2.5 rounded-xl transition-all duration-300 ${
                    gridView === 'grid'
                      ? 'bg-accent text-white shadow-lg'
                      : 'bg-white hover:bg-gray-50 shadow-sm hover:shadow-md'
                  }`}
                  aria-label="Grid view"
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setGridView('list')}
                  className={`p-2.5 rounded-xl transition-all duration-300 ${
                    gridView === 'list'
                      ? 'bg-accent text-white shadow-lg'
                      : 'bg-white hover:bg-gray-50 shadow-sm hover:shadow-md'
                  }`}
                  aria-label="List view"
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-8 ${
              gridView === 'grid'
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4'
                : 'grid-cols-1'
            }`}>
              {filteredProducts.length > 0 ? (
                filteredProducts.map(product => (
                  <motion.div
                    key={product.id}
                    className="h-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProductCard
                      product={product}
                      view={gridView}
                    />
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full text-center py-16 bg-white rounded-2xl shadow-lg">
                  <p className="text-l text-gray-600">No products found matching your filters.</p>
                  <button
                    onClick={() => window.location.reload()}
                    className="mt-4 px-6 py-2 bg-accent text-white rounded-xl hover:bg-accent/90 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;