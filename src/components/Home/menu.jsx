import React from 'react';
import { motion } from 'framer-motion';
import margarit from '../../assets/margarit.jpg'
import alferdo from '../../assets/alfredo.png'
import burger from '../../assets/burger.jpg'
import tandoori from '../../assets/tandoori.jpg'

const menuItems = [
  {
    id: 1,
    name: 'Margherita Pizza',
    description: 'Classic delight with 100% real mozzarella cheese.',
    price: '$8.99',
    image: margarit,
  },
  {
    id: 2,
    name: 'Veggie Burger',
    description: 'Loaded with crispy veggies and a spicy patty.',
    price: '$6.49',
    image: burger,
},
  {
    id: 3,
    name: 'Pasta Alfredo',
    description: 'Creamy and cheesy pasta with fresh herbs.',
    price: '$7.99',
    image: alferdo,
  },
  {
    id: 4,
    name: 'Tandoori Chicken',
    description: 'Tender chicken marinated in traditional spices.',
    price: '$10.99',
    image: tandoori},
];

const Menu = () => {
  return (
    <section id="menu" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-green-700 mb-4">Our Menu</h2>
        <p className="text-gray-800 mb-10"><b>Delicious dishes crafted with love and fresh ingredients.</b></p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {menuItems.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.05 }}
              className="bg-yellow-50 rounded-xl shadow-md overflow-hidden"
            >
              <img src={item.image} alt={item.name} className="h-40 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-green-700">{item.name}</h3>
                <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                <div className="mt-3 text-lg font-bold text-yellow-600">{item.price}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
