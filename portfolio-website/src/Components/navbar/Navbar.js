import React from 'react';
import { AppBar, Toolbar, Typography, Link, useMediaQuery } from '@mui/material';

const resume_link = "https://drive.google.com/file/d/1FwfMhorzRmdsyMCAN13HRXilUUd3APZ1/view";

const Navbar = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <AppBar position="sticky" style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <h1 style={{
            fontFamily: 'cursive',
            fontSize: isMobile ? '1.2rem' : '1.5rem',
            color: '#FFFFFF',
            marginBottom: '0'
          }}>
            Abhyuday Tomar
          </h1>
          <p style={{
            fontFamily: 'Open Sans, sans-serif',
            fontSize: isMobile ? '0.8rem' : '1rem',
            color: '#CCCCCC',
            margin: '0'
          }}>
            Full Stack Developer
          </p>
        </Typography>
        {!isMobile && (
          <>
            <Link href="#projects" color="antiquewhite" underline="none" sx={{ marginRight: 2, fontSize: '1.2rem' }}>
              Projects
            </Link>
            <Link href={resume_link} color="antiquewhite" underline="none" sx={{ marginRight: 2, fontSize: '1.2rem' }}>
              Resume
            </Link>
            <Link href="#contact" color="inherit" underline="none" sx={{ fontSize: '1.2rem' }}>
              Reach Out!
            </Link>
          </>
        )}
        {isMobile && (
          <Link href={resume_link} color="antiquewhite" underline="none" sx={{ marginRight: 2, fontSize: '1.2rem', marginInlineEnd: '20px' }}>
            Resume
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
