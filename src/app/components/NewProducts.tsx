"use client"

import React from 'react'
import ProductCard from './ProductCard'
import { motion } from 'framer-motion'

const productData=[
    {
        id: 1,
        img:"/jacket1.jpg",
        title: "Jacket",
        desc:"MEN Full-Jacket",
        rating:4,
        price:"55.00",
        sizes: ["S", "M", "L", "XL"],
        inStock: true,
        isNew: true,
        isFeatured: false,
        category: "mens",
        subcategory: "Jackets"
    },
    {
        id: 2,
        img:"/jacket2.jpg",
        title: "Jacket",
        desc:"MEN Full-Jacket",
        rating:4,
        price:"60.00",
        sizes: ["M", "L", "XL"],
        inStock: true,
        isNew: false,
        isFeatured: false,
        category: "mens",
        subcategory: "Jackets"
    },
    {
        id: 3,
        img:"/shirt1.jpg",
        title: "Shirt",
        desc:"MEN Full-Sleeves Shirt",
        rating:4,
        price:"80.00",
        sizes: ["S", "M", "L", "XL"],
        inStock: true,
        isNew: true,
        isFeatured: false,
        category: "mens",
        subcategory: "Shirts"
    },
    {
        id: 4,
        img:"/sports1.jpg",
        title: "Sports Track Pants",
        desc:"MEN Black Track Pants",
        rating:3,
        price:"40.00",
        sizes: ["M", "L", "XL"],
        inStock: true,
        isNew: false,
        isFeatured: false,
        category: "mens",
        subcategory: "Pants"
    },
    {
        id: 5,
        img:"/watch1.jpg",
        title: "Watch",
        desc:"MEN Watch",
        rating:3,
        price:"20.00",
        sizes: ["One Size"],
        inStock: true,
        isNew: false,
        isFeatured: false,
        category: "accessories",
        subcategory: "Watches"
    },
    {
        id: 6,
        img:"/watch2.jpg",
        title: "steelWatch",
        desc:"MEN Watch",
        rating:5,
        price:"50.00",
        sizes: ["One Size"],
        inStock: true,
        isNew: true,
        isFeatured: false,
        category: "accessories",
        subcategory: "Watches"
    },
]

const NewProducts = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
      <div className="w-full px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">New Arrivals</h2>
          <p className="text-gray-600 text-center max-w-2xl">
            Discover our latest collection of premium products, carefully curated to bring you the newest trends and styles.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-8">
          {productData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <ProductCard
                product={item}
                view="grid"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NewProducts