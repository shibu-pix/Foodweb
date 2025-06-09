import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="bg-yellow-50 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-green-700"
          >
            Fresh, Fast & Delicious Food Delivered
          </motion.h1>
          
          <p className="mt-4 text-gray-600 text-lg">
            Satisfy your cravings with our mouth-watering dishes made from fresh ingredients and delivered to your door.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-6 bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition"
          >
            Order Now
          </motion.button>
        </div>

        {/* Image */}
        <motion.div
          className="mt-10 md:mt-0 md:w-1/2"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80"
            alt="Delicious Food"
            className="w-full max-w-md mx-auto rounded-xl shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
