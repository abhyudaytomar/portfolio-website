import React from 'react';
import './Skills.css'; // Import the CSS file

const TechnologyBox = ({ technologies }) => (
  <div className="technology-box">
    {technologies.map((tech, index) => (
      <div key={index} className={`technology neon-border-${randomNeonColor()}`}>{tech}</div>
    ))}
  </div>
);

const MainBox = ({ title, technologies }) => (
  <div className="main-box">
    <h2 className="box-heading">{title}</h2>
    <TechnologyBox technologies={technologies} />
  </div>
);

const Skills = () => {
  const boxesData = [
    {
      title: "Box 1",
      technologies: ["React", "JavaScript", "HTML", "CSS"]
    },
    {
      title: "Box 2",
      technologies: ["Node.js", "Express.js", "MongoDB"]
    },
    {
      title: "Box 3",
      technologies: ["Python", "Django", "Flask"]
    },
    {
      title: "Box 4",
      technologies: ["Java", "Spring Boot", "Hibernate"]
    }
  ];

  return (
    <div className="skills-container">
      <h1 className="section-heading">What I Know</h1>
      <div className="skills-content">
        {boxesData.map((box, index) => (
          <MainBox key={index} title={box.title} technologies={box.technologies} />
        ))}
      </div>
    </div>
  );
};

export default Skills;

// Function to generate a random neon color class
const randomNeonColor = () => {
  const neonColors = ['green', 'blue', 'pink', 'purple'];
  const randomIndex = Math.floor(Math.random() * neonColors.length);
  return neonColors[randomIndex];
};
