import React, { useState } from "react";
import ecomm from "../assets/E-Comm.jpg";
import currency from '../assets/currency.jpg';
import calculator from '../assets/calculator.jpg'
import digital from '../assets/digital.jpg'

const projects = [
  {
    title: "E-commerce Website",
    description:
      "A fully responsive e-commerce platform featuring category filtering, global search, pagination, wishlist, and cart management.",
    tech: ["React.js", "Vite", "Formik", "Yup"],
    link: "https://monisha-ecommerce.netlify.app/",
    image: ecomm,
  },
  {
    title: "Currency Converter App",
    description:
      "This Currency Converter is a web application built using React.js, HTML, and CSS, allowing users to convert currency values between different international currencies.",
    tech: ["React.js","Javascript","CSS"],
    link: "https://github.com/monisha-kT/currencyconvertor",
    image: currency,
  },
  {
    title: "Calculator App",
    description:
      "The calculator app  provides a user-friendly interface to perform basic arithmetic operations such as addition, subtraction, multiplication, and division.",
    tech: ["React.js","Javascript","CSS"],
    link: "https://github.com/monisha-kT/Calculator",
    image: calculator,
  },
//   {
//     title: "Food Ordering App",
//     description:
//       "An interactive food ordering system with role-based access and PostgreSQL integration.",
//     tech: ["Python", "Flask", "PostgreSQL", "Swagger"],
//     link: "https://github.com/monisha-kT/food-ordering",
//     image: "https://via.placeholder.com/300",
//   },
{
    title: "Digital Clock ",
    description:
      "The Digital Clock App is a real-time clock  displaying the current time in an elegant format. The clock updates every second to ensure accuracy.",
    tech: ["React.js","Javascript","CSS"],
    link: "https://github.com/monisha-kT/Digitalclock",
    image: digital,
  },


];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="container">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`card ${hoveredIndex === index ? "expanded" : ""}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            {hoveredIndex === index && (
              <div className="card-content">
                <p className="description">{project.description}</p>
                <p className="tech-stack">
                  <strong>Tech:</strong> {project.tech.join(", ")}
                </p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="view-project">
                  🔗 View Project
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
