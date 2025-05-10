export interface Product {
  id: number;
  img: string;
  title: string;
  desc: string;
  rating: number;
  price: string;
  category: string;
  subcategory: string;
  sizes: string[];
  inStock: boolean;
  isNew: boolean;
  isFeatured: boolean;
}

export interface Category {
  id: string;
  name: string;
  subcategories: string[];
}

export const categories: Category[] = [
  {
    id: "mens",
    name: "Men's Fashion",
    subcategories: ["Jackets", "Shirts", "Pants", "Accessories", "Shoes", "Suits", "Sweaters", "Swimwear"]
  },
  {
    id: "womens",
    name: "Women's Fashion",
    subcategories: ["Dresses", "Tops", "Skirts", "Accessories", "Shoes", "Bags", "Sweaters", "Swimwear"]
  },
  {
    id: "jewelry",
    name: "Jewelry",
    subcategories: ["Necklaces", "Earrings", "Bracelets", "Rings", "Watches", "Anklets", "Brooches", "Cufflinks"]
  },
  {
    id: "perfume",
    name: "Perfume",
    subcategories: ["Men's Fragrance", "Women's Fragrance", "Unisex", "Gift Sets", "Travel Size", "Limited Edition"]
  },
  {
    id: "accessories",
    name: "Accessories",
    subcategories: ["Bags", "Wallets", "Belts", "Hats", "Scarves", "Gloves", "Sunglasses", "Ties"]
  },
  {
    id: "footwear",
    name: "Footwear",
    subcategories: ["Sneakers", "Boots", "Sandals", "Formal Shoes", "Athletic Shoes", "Slippers", "Heels", "Flats"]
  }
];

export const products: Product[] = [
  // Men's Fashion
  {
    id: 1,
    img: "/jacket1.jpg",
    title: "Classic Denim Jacket",
    desc: "MEN Full-Jacket",
    rating: 4,
    price: "55.00",
    category: "mens",
    subcategory: "Jackets",
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    isNew: true,
    isFeatured: true
  },
  {
    id: 2,
    img: "/jacket2.jpg",
    title: "Leather Biker Jacket",
    desc: "MEN Full-Jacket",
    rating: 4,
    price: "60.00",
    category: "mens",
    subcategory: "Jackets",
    sizes: ["M", "L", "XL"],
    inStock: true,
    isNew: false,
    isFeatured: true
  },
  {
    id: 3,
    img: "/shirt1.jpg",
    title: "Casual Oxford Shirt",
    desc: "MEN Full-Sleeves Shirt",
    rating: 4,
    price: "80.00",
    category: "mens",
    subcategory: "Shirts",
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    isNew: true,
    isFeatured: false
  },
  {
    id: 4,
    img: "/shirt2.jpg",
    title: "Formal Business Shirt",
    desc: "MEN Slim Fit Shirt",
    rating: 5,
    price: "90.00",
    category: "mens",
    subcategory: "Shirts",
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
    isNew: false,
    isFeatured: true
  },
  {
    id: 5,
    img: "/pants1.jpg",
    title: "Slim Fit Chinos",
    desc: "MEN Casual Pants",
    rating: 4,
    price: "45.00",
    category: "mens",
    subcategory: "Pants",
    sizes: ["30", "32", "34", "36"],
    inStock: true,
    isNew: true,
    isFeatured: false
  },
  {
    id: 6,
    img: "/pants2.jpg",
    title: "Classic Denim Jeans",
    desc: "MEN Straight Fit Jeans",
    rating: 4,
    price: "50.00",
    category: "mens",
    subcategory: "Pants",
    sizes: ["30", "32", "34", "36", "38"],
    inStock: true,
    isNew: false,
    isFeatured: true
  },

  // Women's Fashion
  {
    id: 7,
    img: "/dress1.jpg",
    title: "Floral Summer Dress",
    desc: "WOMEN Casual Dress",
    rating: 5,
    price: "65.00",
    category: "womens",
    subcategory: "Dresses",
    sizes: ["XS", "S", "M", "L"],
    inStock: true,
    isNew: true,
    isFeatured: true
  },
  {
    id: 8,
    img: "/dress2.jpg",
    title: "Elegant Evening Gown",
    desc: "WOMEN Formal Dress",
    rating: 5,
    price: "120.00",
    category: "womens",
    subcategory: "Dresses",
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    isNew: false,
    isFeatured: true
  },
  {
    id: 9,
    img: "/top1.jpg",
    title: "Casual Blouse",
    desc: "WOMEN Summer Top",
    rating: 4,
    price: "35.00",
    category: "womens",
    subcategory: "Tops",
    sizes: ["XS", "S", "M", "L"],
    inStock: true,
    isNew: true,
    isFeatured: false
  },
  {
    id: 10,
    img: "/top2.jpg",
    title: "Silk Button-Up Shirt",
    desc: "WOMEN Formal Top",
    rating: 4,
    price: "55.00",
    category: "womens",
    subcategory: "Tops",
    sizes: ["S", "M", "L"],
    inStock: true,
    isNew: false,
    isFeatured: true
  },

  // Jewelry
  {
    id: 11,
    img: "/necklace1.jpg",
    title: "Pearl Necklace",
    desc: "Classic Pearl Design",
    rating: 5,
    price: "150.00",
    category: "jewelry",
    subcategory: "Necklaces",
    sizes: ["16\"", "18\"", "20\""],
    inStock: true,
    isNew: true,
    isFeatured: true
  },
  {
    id: 12,
    img: "/necklace2.jpg",
    title: "Gold Chain Necklace",
    desc: "Luxury Gold Design",
    rating: 4,
    price: "200.00",
    category: "jewelry",
    subcategory: "Necklaces",
    sizes: ["18\"", "20\"", "22\""],
    inStock: true,
    isNew: false,
    isFeatured: true
  },
  {
    id: 13,
    img: "/earrings1.jpg",
    title: "Diamond Studs",
    desc: "Classic Diamond Earrings",
    rating: 5,
    price: "180.00",
    category: "jewelry",
    subcategory: "Earrings",
    sizes: ["One Size"],
    inStock: true,
    isNew: true,
    isFeatured: true
  },
  {
    id: 14,
    img: "/earrings2.jpg",
    title: "Pearl Drop Earrings",
    desc: "Elegant Pearl Design",
    rating: 4,
    price: "90.00",
    category: "jewelry",
    subcategory: "Earrings",
    sizes: ["One Size"],
    inStock: true,
    isNew: false,
    isFeatured: false
  },

  // Perfume
  {
    id: 15,
    img: "/perfume1.jpg",
    title: "Ocean Breeze",
    desc: "Men's Fresh Fragrance",
    rating: 4,
    price: "85.00",
    category: "perfume",
    subcategory: "Men's Fragrance",
    sizes: ["50ml", "100ml"],
    inStock: true,
    isNew: true,
    isFeatured: true
  },
  {
    id: 16,
    img: "/perfume2.jpg",
    title: "Midnight Mystery",
    desc: "Men's Woody Fragrance",
    rating: 5,
    price: "95.00",
    category: "perfume",
    subcategory: "Men's Fragrance",
    sizes: ["50ml", "100ml"],
    inStock: true,
    isNew: false,
    isFeatured: true
  },
  {
    id: 17,
    img: "/perfume3.jpg",
    title: "Floral Dream",
    desc: "Women's Floral Fragrance",
    rating: 5,
    price: "90.00",
    category: "perfume",
    subcategory: "Women's Fragrance",
    sizes: ["50ml", "100ml"],
    inStock: true,
    isNew: true,
    isFeatured: true
  },
  {
    id: 18,
    img: "/perfume4.jpg",
    title: "Citrus Fresh",
    desc: "Unisex Citrus Fragrance",
    rating: 4,
    price: "80.00",
    category: "perfume",
    subcategory: "Unisex",
    sizes: ["50ml", "100ml"],
    inStock: true,
    isNew: false,
    isFeatured: false
  },

  // Accessories
  {
    id: 19,
    img: "/wallet1.jpg",
    title: "Leather Wallet",
    desc: "Premium Leather Wallet",
    rating: 4,
    price: "79.00",
    category: "accessories",
    subcategory: "Wallets",
    sizes: ["One Size"],
    inStock: true,
    isNew: true,
    isFeatured: true
  },
  {
    id: 20,
    img: "/sunglasses1.jpg",
    title: "Designer Sunglasses",
    desc: "UV Protection Sunglasses",
    rating: 5,
    price: "129.00",
    category: "accessories",
    subcategory: "Sunglasses",
    sizes: ["One Size"],
    inStock: true,
    isNew: false,
    isFeatured: true
  },

  // Footwear
  {
    id: 21,
    img: "/sneakers1.jpg",
    title: "Classic Sneakers",
    desc: "Casual Sneakers",
    rating: 4,
    price: "89.00",
    category: "footwear",
    subcategory: "Sneakers",
    sizes: ["7", "8", "9", "10", "11"],
    inStock: true,
    isNew: true,
    isFeatured: true
  },
  {
    id: 22,
    img: "/boots1.jpg",
    title: "Leather Boots",
    desc: "Premium Leather Boots",
    rating: 5,
    price: "159.00",
    category: "footwear",
    subcategory: "Boots",
    sizes: ["7", "8", "9", "10"],
    inStock: true,
    isNew: false,
    isFeatured: true
  }
]; 