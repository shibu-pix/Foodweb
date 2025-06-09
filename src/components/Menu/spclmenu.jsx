import React, { useState } from 'react';
import Starters from '../../assets/Starter1.jpg';
import Main from '../../assets/main.jpg';
import Dessert from '../../assets/dessert.jpg';
import Beverages from '../../assets/beverage.jpg';
import Salads from '../../assets/salads.jpg';
import Soups from '../../assets/soups.jpg';
import Pizza from '../../assets/pizza.jpg';
import Burgers from '../../assets/burgerss.jpg';
import Pasta from '../../assets/pasta.jpg';
import Grill from '../../assets/grill.jpg';
import Sanwich from '../../assets/sanwich.jpg';
import Rice from '../../assets/rice.jpg';


const allMenus = [
  { title: 'Starters', image: [Starters] , amount: '$8' },
  { title: 'Main Course', image:[Main], amount: '$15' },
  { title: 'Desserts', image: [Dessert], amount: '$7' },
  { title: 'Beverages', image: [Beverages], amount: '$5' },
  { title: 'Salads', image: [Salads], amount: '$6' },
  { title: 'Soups', image: [Soups], amount: '$9' },
  { title: 'Pizza', image: [Pizza], amount: '$12' },
  { title: 'Burger', image: [Burgers], amount: '$10' },
  { title: 'Pasta', image: [Pasta], amount: '$11' },
  { title: 'Grill', image: [Grill], amount: '$14' },
  { title: 'Sandwich', image: [Sanwich], amount: '$8' },
  { title: 'Rice Dishes', image: [Rice], amount: '$13' },
];

const SpecialMenus = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    if (visibleCount < allMenus.length) {
      setVisibleCount((prev) => Math.min(prev + 3, allMenus.length));
    }
  };

  return (
    <section className="py-12 px-4 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Special Menus</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {allMenus.slice(0, visibleCount).map((item, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <div className="bg-gray-100 p-4">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-green-600 font-bold mt-2">{item.amount}</p>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < allMenus.length && (
        <div className="mt-10">
          <button
            onClick={handleLoadMore}
            className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition"
          >
            View More Menu
          </button>
        </div>
      )}
    </section>
  );
};

export default SpecialMenus;
