import React from 'react';
import { Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="container">
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={12} className="mainTypography">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography align="center" className="main-text">
              Looking for a coding wizard?
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Typography variant="h4" align="center" color="secondary" className="additionalText">
              I've got the spells to make your projects sparkle!
            </Typography>
          </motion.div>
        </Grid>
      </Grid>
    </div>
  );
};

export default LandingPage;
