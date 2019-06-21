import React from 'react';

import HeroBanner from './HeroBanner';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header>
      <Navbar />
      <HeroBanner />
    </header>
  );
};

export default Header;
