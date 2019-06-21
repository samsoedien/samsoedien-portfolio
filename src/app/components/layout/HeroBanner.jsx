import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import SVGOverlay from './SVGOverlay';
import BACKGROUND_IMG from '../../assets/images/pexels-photo-303014.jpg';
import WEBM_VIDEO from '../../assets/videos/Exploration_Affordances_Control_interface_V1.1.webm';
// import MP4_VIDEO from '../../assets/videos/Exploration_Affordances_Control_interface_V1.1.mp4';

const styles = theme => ({
  heroBanner: {
    position: 'absolute',
    top: 0,
    left: 0,
    minWidth: '100%',
    minHeight: '100vh',
    width: 'auto',
    height: '100vh',
    zIndex: 100,
    overflow: 'hidden',
  },
  heroBannerImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    minWidth: '100%',
    minHeight: '100%',
    width: 'auto',
    height: '100vh',
    zIndex: -1,
    overflow: 'hidden',
  },
  heroBannerOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .15))',
  },
  heroBannerText: {
    color: 'white',
    textAlign: 'center',
  },
  heroBannerHeadline: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    fontFamily: '"Mr Dafoe", cursive',
    fontSize: '2.5rem',
    fontWeight: 400,
    color: 'white',
  },
  heroBannerVideo: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 'auto',
    minWidth: '100%',
    height: 'auto',
    minHeight: '100%',
    transform: 'translateX(-50%) translateY(-50%)',
  },
});

class HeroBanner extends Component {
  componentDidMount() {}

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.heroBanner}>
        <div
          className={classes.heroBannerImage}
          style={{ backgroundImage: `url(${BACKGROUND_IMG})` }}
        >
          <video
            width="100%"
            height="100vh"
            autoPlay="autoplay"
            loop="loop"
            muted="muted"
            className={classes.heroBannerVideo}
          >
            <source src={WEBM_VIDEO} type="video/webm" />
            {/* <source src={MP4_VIDEO} type="video/mp4" /> */}
          </video>
          <div className={classes.heroBannerOverlay}>
            <SVGOverlay />
          </div>
        </div>
      </div>
    );
  }
}

HeroBanner.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(HeroBanner);
