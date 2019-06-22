import React from 'react';
// import { Link } from 'react-router-dom';
import './HeroBanner.css';

import SVGOverlay from './SVGOverlay';
import BACKGROUND_IMG from '../../assets/images/pexels-photo-303014.jpg';
import WEBM_VIDEO from '../../assets/videos/Exploration_Affordances_Control_interface_V1.1.webm';
// import MP4_VIDEO from '../../assets/videos/Exploration_Affordances_Control_interface_V1.1.mp4';

const HeroBanner = () => (
  <div className="hero-banner">
    <div
      className="hero-banner__image"
      style={{ backgroundImage: `url(${BACKGROUND_IMG})` }}
    >
      <video
        width="100%"
        height="100vh"
        autoPlay="autoplay"
        loop="loop"
        muted="muted"
        className="hero-banner__video"
      >
        <source src={WEBM_VIDEO} type="video/webm" />
        {/* <source src={MP4_VIDEO} type="video/mp4" /> */}
      </video>
      <div className="hero-banner__overlay">
        <SVGOverlay />
      </div>
    </div>
  </div>
);

export default HeroBanner;
