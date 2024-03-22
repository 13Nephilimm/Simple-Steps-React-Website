import React from "react";
import "./partners-section.css";
import PartnersOrbit from "../../../OrbitAnimations/partners-orbit/PartnersOrbit";

const PartnersSection = () => {
  return (
    <section className="section partners-section">
      <h2 className="partners-heading">Our partners</h2>
      <PartnersOrbit />
    </section>
  );
};

export default PartnersSection;
