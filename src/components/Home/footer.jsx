import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer>
      {/* Top Footer */}
      <div className="bg-green-700 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold mb-3">FoodieZone</h2>
            <p className="text-sm">
              Fresh & flavorful food delivered at your doorstep. Eat healthy, stay happy!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#menu" className="hover:underline">Menu</a></li>
              <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
              <li><a href="#recipes" className="hover:underline">Recipes</a></li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
            <p className="text-sm">Email: support@foodiezone.com</p>
            <p className="text-sm">Phone: +91 98765 43210</p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-yellow-300"><Facebook size={20} /></a>
              <a href="#" className="hover:text-yellow-300"><Instagram size={20} /></a>
              <a href="#" className="hover:text-yellow-300"><Twitter size={20} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="bg-white text-black font-bold text-center text-sm py-4">
        © {new Date().getFullYear()} FoodieZone. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
