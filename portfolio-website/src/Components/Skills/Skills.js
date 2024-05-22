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
      title: "Frontend ",
      technologies: ["HTML", "CSS", "Tailwind CSS", "Javascript","React Js "]
    },
    {
      title: "Backend",
      technologies: ["Node.js", "Express.js", "Golang"]
    },
    {
      title: "Database",
      technologies: ["MySQL", "MongoDB", "ElasticSearch","PostgreSQL"]
    },
    {
      title: "Devops",
      technologies: ["Git", "Docker", "Kubernetes","Jenkins","AWS"]
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
