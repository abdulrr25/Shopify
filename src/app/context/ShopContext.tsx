"use client"

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '../data/products';

interface CartItem extends Product {
  quantity: number;
  selectedSize?: string;
}

interface FilterState {
  category: string;
  subcategory: string;
  priceRange: [number, number];
  sizes: string[];
  inStock: boolean;
  isNew: boolean;
}

interface ShopContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity: number, size?: string) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  filters: FilterState;
  setFilters: (filters: FilterState | ((prev: FilterState) => FilterState)) => void;
  clearFilters: () => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [filters, setFilters] = useState<FilterState>({
    category: '',
    subcategory: '',
    priceRange: [0, 1000],
    sizes: [],
    inStock: false,
    isNew: false,
  });

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product, quantity: number, size?: string) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(
        item => item.id === product.id && item.selectedSize === size
      );

      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id && item.selectedSize === size
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prevCart, { ...product, quantity, selectedSize: size }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const clearFilters = () => {
    setFilters({
      category: '',
      subcategory: '',
      priceRange: [0, 1000],
      sizes: [],
      inStock: false,
      isNew: false,
    });
  };

  return (
    <ShopContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        filters,
        setFilters,
        clearFilters,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (context === undefined) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
}; 