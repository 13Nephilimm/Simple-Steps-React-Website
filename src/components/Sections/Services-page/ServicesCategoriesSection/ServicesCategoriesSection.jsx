import React from "react";
import "./services-categories-section.css";
import WeDoingCards from "../../../../components/ReUsable/what-are-we-doing-cards/WeDoingCards";

const ServicesCategoriesSection = () => {
  return (
    <section className="services-categories-section">
      <h2 className="services-categories-section-heading">Services</h2>
      <WeDoingCards />
    </section>
  );
};

export default ServicesCategoriesSection;
