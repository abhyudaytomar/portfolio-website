import React from 'react';
import { Container, Typography, Link } from '@mui/material';
import './Footer.css'; // Import your CSS file for footer styles

const Footer = () => {
  return (
    <footer className="footer">
      <Container maxWidth="lg">
        <Typography variant="body1" align="center" color="textSecondary" gutterBottom>
          Your footer content goes here.
        </Typography>
        <Typography variant="body2" align="center" color="textSecondary" component="p">
          © {new Date().getFullYear()} Your Company Name
        </Typography>
        <Typography variant="body2" align="center" color="textSecondary" component="p">
          Website designed and developed by <Link href="https://yourwebsite.com" color="inherit">Your Name</Link>
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;
