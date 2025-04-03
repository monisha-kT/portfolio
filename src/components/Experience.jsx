import React from 'react';
import japan from '../assets/japan.jpg';

const achievements = [
  {
    image: japan,
    title: "PATENT PUBLICATION ",
    details: [
      "Presented the project on “Smart Cart and Stock Management System” at NIT, Japan - MKCE Exchange Program on March 4, 2024.",
      "Patent published on 2024/03/29, recognized for enhancing retail efficiency and customer shopping experience."
    ],
  },
  {
    title: "Student Campus Ambassador - Intel Corporation",
    details: [
      "Led initiatives, organized career workshops, and created informative blogs on social and technical topics to engage the student community.",
      "Thrived in team-based projects, meeting tight deadlines in a collaborative and fast-paced environment.",
    ],
  },
  {
    title: "Active Member of Eco Club",
    details: [
      "Actively participated in organizing environmental awareness campaigns and events.",
      "Led initiatives such as tree plantation drives, waste management programs, and energy conservation activities.",
    ],
  },
  {
    title: "JAVA CERTIFICATION ",
    details: [
      "JAVA(Basics) - Hackerrank",
      "JAVA(Basics) - Skillrack",
    ],
  },
  {
    title: "REACT CERTIFICATION ",
    details: [
      "Scalar Topics React.js Certification"
    ],
  },
];

const experiences = [
 

  {
    title: "Internship - Frontend Developer/React Developer",
    details: [
      "Company: TECHGENZI PRIVATE LIMITED (JAN 2025 - APR 2025)",
      "Made different React.js projects and explored tech stacks like Zustand, Formik, and Yup.",
      "Learned new skills and gained hands-on experience."
    ],
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        {/* Achievements Section */}
        <h2>Achievements</h2>
        <div className="list">
          {achievements.map((achieve, index) => (
            <div key={index} className="item">
              <h3>{achieve.title}</h3>
              {achieve.image && <img src={achieve.image} alt={achieve.title} className="experience-image" />}
              <ul>
                {achieve.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Experience Section */}
        <h2>Experience</h2>
        <div className="list">
          {experiences.map((exp, index) => (
            <div key={index} className="item">
              <h3>{exp.title}</h3>
              <ul>
                {exp.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
