import React from 'react';
import './Header.css';

import HeroBanner from './HeroBanner';
import Navbar from './Navbar';

const Header = () => (
  <header className="header" id="home">
    <Navbar />
    <HeroBanner />
  </header>
);

export default Header;
