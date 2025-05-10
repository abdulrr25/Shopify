"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { useShop } from '../context/ShopContext';
import { categories } from '../data/products';
import { X } from 'lucide-react';

interface FilterState {
  category: string;
  subcategory: string;
  priceRange: [number, number];
  sizes: string[];
  inStock: boolean;
  isNew: boolean;
}

interface FilterProps {
  isOpen: boolean;
  onClose: () => void;
}

const Filter = ({ isOpen, onClose }: FilterProps) => {
  const { filters, setFilters, clearFilters } = useShop();

  const handleCategoryChange = (category: string) => {
    setFilters((prev: FilterState) => ({
      ...prev,
      category,
      subcategory: ''
    }));
  };

  const handleSubcategoryChange = (subcategory: string) => {
    setFilters((prev: FilterState) => ({
      ...prev,
      subcategory
    }));
  };

  const handlePriceChange = (range: [number, number]) => {
    setFilters((prev: FilterState) => ({
      ...prev,
      priceRange: range
    }));
  };

  const handleSizeChange = (size: string) => {
    setFilters((prev: FilterState) => ({
      ...prev,
      sizes: prev.sizes.includes(size)
        ? prev.sizes.filter(s => s !== size)
        : [...prev.sizes, size]
    }));
  };

  const handleInStockChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prev: FilterState) => ({
      ...prev,
      inStock: e.target.checked
    }));
  };

  const handleIsNewChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prev: FilterState) => ({
      ...prev,
      isNew: e.target.checked
    }));
  };

  const filterContent = (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Categories</h3>
        <div className="space-y-2">
          {categories.map(category => (
            <div key={category.id}>
              <button
                onClick={() => handleCategoryChange(category.id)}
                className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                  filters.category === category.id
                    ? 'bg-accent text-white shadow-sm'
                    : 'hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
              {filters.category === category.id && (
                <div className="ml-4 mt-2 space-y-1">
                  {category.subcategories.map(sub => (
                    <button
                      key={sub}
                      onClick={() => handleSubcategoryChange(sub)}
                      className={`block w-full text-left px-3 py-1 rounded-md text-sm transition-colors ${
                        filters.subcategory === sub
                          ? 'bg-accent/20 text-accent'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {sub}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Price Range</h3>
        <input
          type="range"
          min="0"
          max="1000"
          value={filters.priceRange[1]}
          onChange={(e) => handlePriceChange([filters.priceRange[0], parseInt(e.target.value)])}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-accent"
        />
        <div className="flex justify-between mt-2 text-sm text-gray-600">
          <span>${filters.priceRange[0]}</span>
          <span>${filters.priceRange[1]}</span>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Sizes</h3>
        <div className="flex flex-wrap gap-2">
          {['XS', 'S', 'M', 'L', 'XL'].map(size => (
            <button
              key={size}
              onClick={() => handleSizeChange(size)}
              className={`px-3 py-1 rounded-md border transition-colors ${
                filters.sizes.includes(size)
                  ? 'bg-accent text-white border-accent shadow-sm'
                  : 'border-gray-200 hover:border-accent'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <label className="flex items-center space-x-3 cursor-pointer">
          <input
            type="checkbox"
            checked={filters.inStock}
            onChange={handleInStockChange}
            className="w-4 h-4 rounded text-accent focus:ring-accent border-gray-300"
          />
          <span className="text-gray-700">In Stock Only</span>
        </label>
        <label className="flex items-center space-x-3 cursor-pointer">
          <input
            type="checkbox"
            checked={filters.isNew}
            onChange={handleIsNewChange}
            className="w-4 h-4 rounded text-accent focus:ring-accent border-gray-300"
          />
          <span className="text-gray-700">New Arrivals</span>
        </label>
      </div>

      <button
        onClick={clearFilters}
        className="w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors text-gray-700 font-medium"
      >
        Clear Filters
      </button>
    </div>
  );

  if (!isOpen) {
    return null;
  }

  return (
    <div className="w-full h-full bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-6 lg:hidden">
        <h2 className="text-xl font-semibold text-gray-800">Filters</h2>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Close filters"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      {filterContent}
    </div>
  );
};

export default Filter; 