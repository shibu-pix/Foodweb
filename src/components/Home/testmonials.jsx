import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    review: 'Absolutely loved the pizza! Fresh, hot, and full of flavor. Highly recommend!',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    id: 2,
    name: 'Rahul Verma',
    review: 'Delivery was super fast and the food was delicious. Great value for money.',
    rating: 4,
    image: 'https://randomuser.me/api/portraits/men/43.jpg',
  },
  {
    id: 3,
    name: 'Ayesha Khan',
    review: 'Very friendly service and amazing food. My kids loved it!',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-yellow-50" id="testimonials">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-green-700 mb-4">What Our Customers Say</h2>
        <p className="text-gray-600 mb-10"><b>Real reviews from happy foodies across the city.</b></p>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.03 }}
              className="bg-white shadow-md rounded-xl p-6 text-left"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-green-700">{item.name}</h4>
                  <div className="flex text-yellow-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" stroke="none" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700">{item.review}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
