import React from 'react';
import Menuhero from '../../assets/menuhero.jpg';

const MenuHero = () => {
  return (
    <section
      className="relative h-90 w-full flex items-center justify-center bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${Menuhero})`,
      }}
    >
      {/* Dark overlay */}

      <div className="absolute inset-0  bg-black/50 z-0 "></div>

      {/* Title */}
      <div className="relative z-10 text-center">
        <h1 className="text-white text-4xl md:text-5xl font-bold">
  Dive Into Delicious <br className="hidden md:block" /> Meal Dishes
</h1>

      </div>
    </section>
  );
};

export default MenuHero;
