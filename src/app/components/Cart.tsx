"use client"

import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useShop } from '../context/ShopContext';
import { XMarkIcon, TrashIcon } from '@heroicons/react/24/outline';

interface CartProps {
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ onClose }) => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useShop();

  const total = cart.reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 z-50 flex justify-end"
      onClick={onClose}
    >
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        className="w-full max-w-md bg-white h-full overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-4 border-b sticky top-0 bg-white z-10">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Shopping Cart</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="p-4">
          <AnimatePresence>
            {cart.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-8"
              >
                <p className="text-gray-500">Your cart is empty</p>
              </motion.div>
            ) : (
              <>
                <div className="space-y-4">
                  {cart.map((item) => (
                    <motion.div
                      key={`${item.id}-${item.selectedSize}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      className="flex gap-4 p-4 border rounded-lg"
                    >
                      <div className="relative w-24 h-24 flex-shrink-0">
                        <Image
                          src={item.img}
                          alt={item.title}
                          fill
                          className="object-cover rounded-md"
                        />
                      </div>
                      <div className="flex-1 flex flex-col gap-2">
                        <div className="flex justify-between">
                          <h3 className="font-medium">{item.title}</h3>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-500 hover:text-red-500"
                          >
                            <TrashIcon className="w-5 h-5" />
                          </button>
                        </div>
                        <p className="text-sm text-gray-500">{item.desc}</p>
                        <div className="mt-2 text-sm">
                          <span className="text-gray-500">Size: </span>
                          <span className="font-medium">{item.selectedSize}</span>
                        </div>
                        <div className="flex items-center border rounded-md">
                          <button
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            className="px-2 py-1 hover:bg-gray-100"
                          >
                            -
                          </button>
                          <span className="px-2 py-1">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-2 py-1 hover:bg-gray-100"
                          >
                            +
                          </button>
                        </div>
                        <span className="font-medium">${(parseFloat(item.price) * item.quantity).toFixed(2)}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 space-y-4">
                  <div className="flex justify-between text-lg font-medium">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <button
                    onClick={clearCart}
                    className="w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                  >
                    Clear Cart
                  </button>
                  <button
                    onClick={() => {
                      // Add checkout handler
                      onClose();
                    }}
                    className="w-full py-2 px-4 bg-accent text-white hover:bg-accent/90 rounded-md transition-colors"
                  >
                    Checkout
                  </button>
                </div>
              </>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Cart; 