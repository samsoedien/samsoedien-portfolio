import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Grid container justify="space-evenly">
        <Grid item xs={12} sm={3} />
      </Grid>
      <Typography variant="caption">
        &copy; {new Date().getFullYear()}, Samsoedien. All rights reserved.
      </Typography>
      <Typography variant="caption" paragraph>
        Website created by Samsoedien using React front-end and Firebase
        back-end
      </Typography>
    </footer>
  );
};

export default Footer;
