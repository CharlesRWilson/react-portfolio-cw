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
      deployedLink: 'https://tishthegoat.github.io/Movies-n-Munchies/',
      repoLink: ' https://github.com/tishthegoat/Movies-n-Munchies.git',
    },    
    {
      title: 'Employee Tracker',
      image: '/path-to-project2-image.jpg',
      deployedLink: 'https://charlesrwilson.github.io/employee-js-tracker-cw/',
      repoLink: 'https://github.com/CharlesRWilson/employee-js-tracker-cw.git',
    },
    {
      title: 'Personal Blog',
      image: '/path-to-project1-image.jpg',
      deployedLink: 'https://charlesrwilson.github.io/challenge4repo/',
      repoLink: 'https://github.com/CharlesRWilson/challenge4repo.git',
    },
    {
      title: 'Weather Dashboard',
      image: '/path-to-project2-image.jpg',
      deployedLink: 'https://charlesrwilson.github.io/weather-dashboard-cw/',
      repoLink: 'https://github.com/CharlesRWilson/weather-dashboard-cw.git',
    },    
    {
      title: 'ReadMe Generator',
      image: '/path-to-project2-image.jpg',
      deployedLink: 'https://drive.google.com/file/d/1mRh5CB-SmJBwsjqVofmITh6JwJTZmS8V/view?usp=drive_link',
      repoLink: 'https://github.com/CharlesRWilson/readme-generator-cw',
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
