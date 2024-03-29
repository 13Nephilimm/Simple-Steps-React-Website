import React from "react";
import "./about-section.css";

const AboutSection = () => {
  return (
    <section className="section about-section">
      <div className="about-container">
        <div className="about-img-box">
          <img src="./img/team.png" alt="about-img" />
        </div>
        <div className="about-text-box">
          <h2 className="about-heading">About Company</h2>
          <p className="about-description">
            From February 2021, the company takes care of digitalization of your
            activities The young and creative team of Simple Steps offers modern
            and customized services to customers Individual strategy for each
            project Simple steps to great success - that's what our team does
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
