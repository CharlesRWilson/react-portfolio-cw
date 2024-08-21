// src/pages/Portfolio.jsx
import React from 'react';
import Project from '../components/Project';

const Portfolio = () => {
  const projects = [
    {
      title: 'Project 1',
      image: '/path-to-project1-image.jpg',
      deployedLink: 'https://deployed-project1-link.com',
      repoLink: 'https://github.com/yourusername/project1',
    },
    {
      title: 'Project 2',
      image: '/path-to-project2-image.jpg',
      deployedLink: 'https://deployed-project2-link.com',
      repoLink: 'https://github.com/yourusername/project2',
    },
    // Add more projects as needed
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            deployedLink={project.deployedLink}
            repoLink={project.repoLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
