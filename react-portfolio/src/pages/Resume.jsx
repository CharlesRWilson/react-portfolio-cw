// src/pages/Resume.jsx
import React from 'react';

const Resume = () => {
  return (
    <section>
      <h2>Resume</h2>
      <a href="/path-to-your-resume.pdf" download>
        Download Resume
      </a>
      <h3>Proficiencies</h3>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>CSS/HTML</li>
        <li>...other proficiencies</li>
      </ul>
    </section>
  );
};

export default Resume;
