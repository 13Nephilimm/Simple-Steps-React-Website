import React from "react";
import "./hero-section.css";
import OrbitHero from "../../../OrbitAnimations/home-page-first-orbit/OrbitHero";

const HeroSection = () => {
  return (
    <section className="section hero-section">
      <h1 className="main-heading">
        develop the right marketing <br></br> strategy for your business
      </h1>
      <OrbitHero />
    </section>
  );
};

export default HeroSection;
