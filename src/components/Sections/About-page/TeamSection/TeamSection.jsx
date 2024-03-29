import React from "react";
import "./team-section.css";

const TeamSection = () => {
  return (
    <section className="section team-section">
      <h3 className="team-end-heading">We are looking for you!</h3>
      <h3 className="team-end-heading-2">
        Do you want to be part of the most ambitious and modern team?
      </h3>
      <a href="/contact" className="team-contact-btn">
        Contact Us
      </a>
    </section>
  );
};

export default TeamSection;
