import React, { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import FudSalads from '../../assets/galsalad.jpg';
import Icecream from '../../assets/icecream.jpg';
import FudPizza from '../../assets/galpizza.jpg';
import FudBurgers from '../../assets/galburger.jpg';
import FudPasta from '../../assets/galpasta.jpg';
import Tacos from '../../assets/tacos.jpg';
import Sushi from '../../assets/sushii.jpg';
import Steak from '../../assets/steak.jpg';
import Donut from '../../assets/donut.jpg';

const foods = [
  { name: 'Pizza', image: [FudPizza] },
  { name: 'Sushi', image: [Sushi] },
  { name: 'Pasta', image: [FudPasta] },
  { name: 'Burger', image: [FudBurgers] },
  { name: 'Ice Cream', image: [Icecream] },
  { name: 'Tacos', image: [Tacos] },
  { name: 'Steak', image: [Steak] },
  { name: 'Salad', image: [FudSalads] },
  { name: 'Donut', image: [Donut] },
];

const FoodGallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -320 : 320,
        behavior: 'smooth',
      });
    }
  };

  // Auto scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const container = scrollRef.current;
        const maxScroll = container.scrollWidth - container.clientWidth;

        if (container.scrollLeft >= maxScroll) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: 320, behavior: 'smooth' });
        }
      }
    }, 3000); // every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-10 bg-[#eeeeee] relative">
      <h2 className="text-3xl font-bold text-center mb-6">Our Cultures</h2><br/>
      <div className="relative flex items-center">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-2 z-10 p-2 bg-white shadow-md rounded-full hover:bg-gray-100"
        >
          <ChevronLeft size={28} />
        </button>

        {/* Scrollable Area */}
        <div
          ref={scrollRef}
          className="overflow-x-auto whitespace-nowrap scroll-smooth px-12 scrollbar-hide"
        >
          <div className="flex gap-4">
            {foods.map((food, index) => (
              <div
                key={index}
                className="min-w-[300px] flex-shrink-0 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-3 text-center bg-white">
                  <h3 className="text-lg font-semibold">{food.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-2 z-10 p-2 bg-white shadow-md rounded-full hover:bg-gray-100"
        >
          <ChevronRight size={28} />
        </button>
      </div>
    </section>
  );
};

export default FoodGallery;
