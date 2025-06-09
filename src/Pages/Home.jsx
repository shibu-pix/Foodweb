import React from 'react';
import Hero from '../components/Home/hero';
import Menu from '../components/Home/menu';
import Testimonials from '../components/Home/testmonials';
import FindRecipes from '../components/Home/find';

const Home = () => {
  return (
    <main className="space-y-16">
      <Hero />
      <Menu />
      <Testimonials />
      <FindRecipes />
    </main>
  );
};

export default Home;
