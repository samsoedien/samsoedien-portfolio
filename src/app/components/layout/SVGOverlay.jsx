import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
// import { CSSTransition } from 'react-transition-group';
// import { Fade } from 'react-reveal';

import { ReactComponent as Logo } from '../../logo.svg';

const styles = theme => ({
  heroSVGOverlay: {
    position: 'absolute',
    display: 'block',
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
    zIndex: 0,
    boxShadow: '0px 8px 20px -10px rgba(0,0,0,0.8)',
  },
  heroSVGPane: {
    fill: 'rgba(255, 255, 255, 0.94)',
    width: '100%',
  },
  heroSVGPaneMasking: {
    fill: '#fff',
    '-webkit-mask': 'url(#masking)',
    mask: 'url(#masking)',
  },
  heroSVGText: {
    fontFamily: '"Mr Dafoe", cursive',
    fontWeight: 400,
    textTransform: 'capitalize',
    fontSize: '3rem',
    textAnchor: 'middle',
    letterSpacing: '-0.03em',
    wordSpacing: '0.15em',
    /* opacity: 0; for animation */
  },
  heroSVGTextMain: {
    fontSize: '8rem',
  },
  heroSVGTextSub: {},
  heroSVGTextCopyright: {
    fontFamily: '"Lato", sans-serif',
    fontWeight: 600,
    fontSize: '0.8rem',
    textAnchor: 'middle',
    textTransform: 'uppercase',
  },
  heroSVGLogo: {
    color: '#000',
  },
  scrollArrowLines: {
    fill: 'none',
    stroke: '#000',
    strokeWidth: '4',
    strokeLinejoin: 'round',
    strokeLinecap: 'round',
    animation: 'scrollArrow 3s ease infinite',
  },
  scrollArrowText: {
    fill: '#000',
    textAnchor: 'middle',
    fontFamily: '"lato", sans-serif',
    fontSize: '0.75rem',
    fontWeight: '400',
    letterSpacing: '-0.03em',
    wordSpacing: '0.15em',
    textTransform: 'uppercase',
    animation: 'scrollArrow 3s ease infinite',
  },
  scrollArrowAnimated: {
    animation: 'scrollArrow 3s ease infinite',
  },
  '@keyframes scrollArrow': {
    '0%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(20px)' },
    '100%': { transform: 'translateY(0)' },
  },
});

const SVGOverlay = ({ classes }) => (
  <svg
    className={classes.heroSVGOverlay}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="1920px"
    height="1080px"
    viewBox="0 0 1920 1080"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <mask id="masking" x="0" y="0" width="1920px" height="1080px">
        <rect
          className={classes.heroSVGPane}
          x="0"
          y="0"
          width="1920px"
          height="1080px"
        />
        <Logo
          className={classes.heroSVGLogo}
          x="480"
          y="250"
          width="960px"
          height="590px"
        />
        {/* <text className="hero-svg-text hero-svg-text--main" x="960" y="600">Under Construction</text> */}
        <text className={classes.heroSVGText} x="960" y="660">
          Design Portfolio Samsoedien
        </text>
        <text className={classes.heroSVGTextCopyright} x="960" y="1032">
          &copy; {new Date().getFullYear()}, Samsoedien
        </text>
        <text className={classes.heroSVGTextCopyright} x="960" y="1050">
          All rights reserved.
        </text>
        <g className={classes.scrollArrowLines}>
          <line x1="960" y1="710" x2="920" y2="697" />
          <line x1="960" y1="710" x2="1000" y2="697" />
        </g>
        <text className={classes.scrollArrowText} x="960" y="725">
          Scroll down
        </text>
      </mask>
    </defs>
    <rect
      className={classes.heroSVGPaneMasking}
      x="0"
      y="0"
      width="1920px"
      height="1080px"
    />
  </svg>
);

SVGOverlay.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(SVGOverlay);
