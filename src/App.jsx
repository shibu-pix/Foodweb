import React from 'react';
import Header from './components/Home/header';
import Footer from './components/Home/footer';
import Home from './Pages/Home';
import Menus from './Pages/Menu';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Menu } from 'lucide-react';

function App() {
  return (
    <Router>
      <Header />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/menu" element={<Menus/>} /> */}
      
        </Routes>
      </main>
      
      <Footer />
    </Router>
  );
}

export default App;
