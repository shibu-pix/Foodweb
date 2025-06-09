import React from 'react';
import MenuHero from '../components/Menu/menuhero';
import SpclMenu from '../components/Menu/spclmenu';
import CollegeGallery from '../components/Menu/fudgallery'; 
import FoodVideo from '../components/Menu/fudvideo'; 
import Booking from '../components/Menu/booking'; 




const MenuPage = () => {
  return (
    <>
      <MenuHero />
      <SpclMenu />
      <FoodVideo />
      <CollegeGallery />
      <Booking/>
      
    </>
  );
};

export default MenuPage;
