import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import resume from '../assets/resume.pdf.pdf'
import art from '../assets/art.jpg'
const About = () => {
  return (
    <section id="about" className="about">
    <div className="container">
      <div className="content">
        <div className="text">
          <h2>About Me</h2>
          <p>
          I immersed myself in the world of web development, 
          focusing on creating intuitive and visually appealing user interfaces. 
          I have a strong foundation in <strong>React</strong>, which I believe is a powerful tool for building modern web applications. 
          I am particularly drawn to the way React allows for efficient and modular development, 
          making it easier to create scalable and maintainable codebases.

           
          </p>
          <p>
          While I am new to the industry, 
          I have a strong desire to learn and grow. 
          I am committed to staying updated with the latest trends and advancements in <strong>frontend development</strong>,
           and I am always looking for opportunities to expand my knowledge. 
           I believe that continuous learning is essential in this fast-paced field, and I am excited to see where my journey will take me.

          </p>
          <p>
          My goal is to contribute to projects that have a positive impact on users and to work with a team that values innovation and collaboration. 
          I am eager to bring my skills to a company where I can learn from experienced professionals and contribute to meaningful projects.
           I am confident that my dedication and enthusiasm will help me make valuable contributions to any team I join.

          </p>
          <div className="buttons">
            <a href={resume} download className="btn1">Download Resume</a>
            <a href="https://github.com/monisha-kT" target="_blank" rel="noopener noreferrer">
              <FaGithub className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/monisha-krishnan-24350122a/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="icon" />
            </a>
          </div>
        </div>
        <div className="image">
          <img src={art} alt="Monisha Krishnan" />
        </div>
      </div>
    </div>
  </section>
  );
};

export default About;