import React from 'react';
import { Typography, Grid, Card, CardMedia, CardContent, useMediaQuery } from '@mui/material';
import './Main.css'; // Import custom CSS for Projects component

const cardStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
};

const imageStyles = {
  height: 200,
  objectFit: 'cover',
};

const Projects = () => {
  const isMobile = useMediaQuery('(max-width:600px)'); // Check if the screen is mobile

  // Define projects data directly in the component
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1',
      image: 'background-image.jpg',
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2',
      image: 'background-image.jpg',
    },
    {
      title: 'Project 3',
      description: 'Description of Project 3',
      image: 'background-image.jpg',
    },
   
  ];

  return (
    <div className="projects-container" id="projects">
      <Typography variant={isMobile ? "h3" : "h2"} align="center" gutterBottom className='section-heading'>
        Projects
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card style={cardStyles}>
              <CardMedia
                component="img"
                image={project.image}
                alt={project.title}
                style={imageStyles}
              />
              <CardContent>
                <Typography variant={isMobile ? "h5" : "h4"} gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Projects;
