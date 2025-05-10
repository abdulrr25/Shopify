"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useShop } from '../context/ShopContext';
import { Product } from '../data/products';
import { ShoppingCart, Heart, Star, StarHalf, Plus, Minus, Check } from 'lucide-react';

interface propsType {
  product: Product;
  view: 'grid' | 'list';
}

const ProductCard = ({ product, view }: propsType) => {
  const { addToCart } = useShop();
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlist, setIsWishlist] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    if (!selectedSize && product.sizes.length > 1) {
      alert('Please select a size');
      return;
    }
    
    // If product has only one size, auto-select it
    const sizeToUse = product.sizes.length === 1 ? product.sizes[0] : selectedSize;
    
    addToCart(product, quantity, sizeToUse);
    setAddedToCart(true);
    
    // Reset addedToCart status after 2 seconds
    setTimeout(() => {
      setAddedToCart(false);
    }, 2000);
  };

  const isGridView = view === 'grid';
  
  // Generate rating stars
  const renderRatingStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={`star-${i}`} className="w-4 h-4 text-yellow-400 fill-current" />
      );
    }
    
    if (hasHalfStar) {
      stars.push(
        <StarHalf key="half-star" className="w-4 h-4 text-yellow-400 fill-current" />
      );
    }
    
    // Add empty stars
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-star-${i}`} className="w-4 h-4 text-gray-300" />
      );
    }
    
    return stars;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl h-full ${
        isGridView ? 'flex flex-col' : 'flex flex-row'
      }`}
    >
      <div 
        className={`relative ${isGridView ? 'aspect-[4/5]' : 'w-1/3'} overflow-hidden`}
      >
        <Image
          src={product.img}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-110"
          sizes={isGridView ? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" : "33vw"}
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isNew && (
            <div className="bg-accent text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
              NEW
            </div>
          )}
          {!product.inStock && (
            <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
              OUT OF STOCK
            </div>
          )}
        </div>
        
        {/* Wishlist Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsWishlist(!isWishlist)}
          className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors z-10"
        >
          <Heart 
            className={`w-5 h-5 ${isWishlist ? 'text-red-500 fill-red-500' : 'text-gray-600'}`} 
          />
        </motion.button>
        
        {/* Quick Add Button (only on grid view) */}
        {isGridView && isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-0 left-0 right-0 p-4"
          >
            <button
              onClick={handleAddToCart}
              className={`w-full py-2.5 rounded-xl transition-all duration-300 text-sm font-medium ${
                addedToCart 
                  ? 'bg-green-500 text-white' 
                  : 'bg-white text-gray-800 hover:bg-accent hover:text-white'
              }`}
            >
              {addedToCart ? (
                <span className="flex items-center justify-center gap-1">
                  <Check className="w-4 h-4" />
                  Added
                </span>
              ) : (
                <span className="flex items-center justify-center gap-1">
                  <ShoppingCart className="w-4 h-4" />
                  Quick Add
                </span>
              )}
            </button>
          </motion.div>
        )}
      </div>

      <div className={`p-5 ${isGridView ? 'flex-1' : 'flex-1 flex flex-col justify-between'}`}>
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-bold text-gray-800 line-clamp-1">{product.title}</h3>
            <div className="flex items-center gap-1 bg-yellow-50 px-2.5 py-1 rounded-full">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm font-medium text-yellow-700">{product.rating}</span>
            </div>
          </div>
          <p className="text-gray-500 text-xs mb-2 line-clamp-1">{product.desc}</p>
        </div>

        {/* Size Selection (always visible) */}
        <div className="space-y-2 mt-2">
          <label className="block text-xs text-gray-500">Select Size</label>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-3 py-1.5 rounded-lg border-2 text-xs transition-all duration-300 ${
                  selectedSize === size
                    ? 'bg-accent text-white border-accent'
                    : 'border-gray-200 hover:border-accent hover:shadow-sm'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {!isGridView && (
          <div className="space-y-4 mt-4">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Select Size</label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 py-1.5 rounded-lg border-2 text-sm transition-all duration-300 ${
                        selectedSize === size
                          ? 'bg-accent text-white border-accent'
                          : 'border-gray-200 hover:border-accent hover:shadow-sm'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center gap-2 bg-gray-50 rounded-xl p-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-1.5 rounded-lg hover:bg-white transition-colors"
                >
                  <Minus className="w-4 h-4 text-gray-600" />
                </button>
                <span className="w-8 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-1.5 rounded-lg hover:bg-white transition-colors"
                >
                  <Plus className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className={`w-full py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-md ${
                !product.inStock
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  : addedToCart
                  ? 'bg-green-500 text-white'
                  : 'bg-accent text-white hover:bg-accent/90 hover:shadow-lg'
              }`}
            >
              {addedToCart ? (
                <>
                  <Check className="w-5 h-5" />
                  <span className="font-medium">Added to Cart</span>
                </>
              ) : !product.inStock ? (
                <span className="font-medium">Out of Stock</span>
              ) : (
                <>
                  <ShoppingCart className="w-5 h-5" />
                  <span className="font-medium">Add to Cart</span>
                </>
              )}
            </motion.button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProductCard;