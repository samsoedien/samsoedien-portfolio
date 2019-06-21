import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';

const Footer = () => {
  return (
    <footer className="footer">
      <Grid container justify="space-evenly">
        <Grid item xs={12} sm={3}></Grid>
      </Grid>
      <Typography className="">
        <Typography variant="caption">
          &copy; {new Date().getFullYear()}, Ansa-Techniek. All rights reserved.
        </Typography>
        <Typography variant="caption" paragraph>
          Website created by Samsoedien Design
        </Typography>
      </Typography>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
