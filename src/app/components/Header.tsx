"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBagIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useShop } from '../context/ShopContext';
import Cart from './Cart';

const Header = () => {
  const { cart } = useShop();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-2 hover:bg-gray-100 rounded-md lg:hidden"
            >
              <Bars3Icon className="w-6 h-6" />
            </button>

            <Link href="/" className="text-2xl font-bold text-accent">
              SHOPIFY
            </Link>

            <nav className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-accent transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <button
              onClick={() => setIsCartOpen(true)}
              className="p-2 hover:bg-gray-100 rounded-md relative"
            >
              <ShoppingBagIcon className="w-6 h-6" />
              {cartItemsCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-accent text-white text-xs w-5 h-5 rounded-full flex items-center justify-center"
                >
                  {cartItemsCount}
                </motion.span>
              )}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 lg:hidden"
          >
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              className="w-full max-w-xs bg-white h-full"
            >
              <div className="p-4 border-b">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Menu</h2>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full"
                  >
                    <XMarkIcon className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <nav className="p-4 space-y-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-gray-600 hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isCartOpen && (
          <Cart onClose={() => setIsCartOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Header; 