import React from 'react';

import { Code, Build, Storage, LaptopMac, CheckCircle, Group, Insights, Psychology, Lightbulb } from '@mui/icons-material';

const Skills = () => {
  const techSkills = [
    { category: "Programming Languages", icon: <Code />, items: ["Java", "SQL", "HTML5", "CSS3", "JavaScript"] },
    { category: "Libraries", icon: <Build />, items: ["Formik", "Yup", "Zustand"] },
    { category: "Frameworks & Tools", icon: <Storage />, items: ["React.js", "Tailwind CSS", "Git"] },
    { category: "Platforms", icon: <LaptopMac />, items: ["VS Code", "Vite"] },
  ];

  const softSkills = [
    { name: "Problem Solving", icon: <Psychology /> },
    { name: "Effective Communication", icon: <Lightbulb /> },
    { name: "Quick Learner", icon: <CheckCircle /> },
    { name: "Team Collaboration", icon: <Group /> },
    { name: "Analytical Skills", icon: <Insights /> },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="grid">
          <div className="card">
            <h3>Technical Skills</h3>
            {techSkills.map((skill, index) => (
              <div key={index} className="skill-item">
                <span className="icon">{skill.icon}</span>
                <div>
                  <h4>{skill.category}</h4>
                  <p>{skill.items.join(", ")}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="card">
            <h3>Soft Skills</h3>
            <ul>
              {softSkills.map((skill, index) => (
                <li key={index} className="soft-skill">
                  <span className="icon">{skill.icon}</span> {skill.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;