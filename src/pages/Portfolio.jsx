// src/pages/Portfolio.jsx
import React from 'react';
import Project from '../components/Project';

const Portfolio = () => {
  const projects = [
    {
      title: 'Project 1',
      image: '/path-to-project1-image.jpg',
      deployedLink: 'https://charlesrwilson.github.io/challenge-1-repo/',
      repoLink: 'https://github.com/CharlesRWilson/challenge-1-repo.git',
    },
    {
      title: 'Movies N Muchies!',
      image: '/path-to-project2-image.jpg',
      deployedLink: ' https://tishthegoat.github.io/Movies-n-Munchies/',
      repoLink: ' https://github.com/tishthegoat/Movies-n-Munchies.git',
    },
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
