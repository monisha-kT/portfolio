import React, { useState, useEffect } from "react";
import image from "../assets/pic1 moni.jpg";

const Hero = () => {
  const roles = ["React Developer", "Frontend Developer"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade-out
      setTimeout(() => {
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setFade(true); // Start fade-in after changing text
      }, 500); // Wait for fade-out before switching
    }, 3000); // Switch roles every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-image">
          <img src={image} alt="Monisha Krishnan" />
        </div>
        <div className="hero-content">
          <h1>Monisha Krishnan</h1>
          <p className={`role react-dev ${fade ? "fade-in" : "fade-out"}`}>
            {roles[currentRoleIndex]}
          </p>
          <div className="hero-buttons">
            <a href="mailto:monishak2020csbs@gmail.com" className="btn btn-primary">
              Hire Me
            </a>
            <a href="https://github.com/monisha-kT" target="_blank" className="btn btn-secondary">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
