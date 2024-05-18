import React from 'react';
import { Container, Typography, Link } from '@mui/material';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container maxWidth="lg">
        <Typography variant="body2" align="center"  component="p" className="footer-text">
        Designed and Developed by Abhyuday Tomar © 2024 All Rights Reserved.
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;
