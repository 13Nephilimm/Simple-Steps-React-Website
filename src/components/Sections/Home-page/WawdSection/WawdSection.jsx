import React from "react";
import WeDoingCards from "../../../ReUsable/what-are-we-doing-cards/WeDoingCards";
import "./wawd-section.css";

const WawdSection = () => {
  return (
    <section className="section section-what-are-we-doing">
      <h2 className="we-doing-heading">What are we doing!</h2>
      <p className="we-doing-description">
        We explore the path of your business in the digital world, <br /> make
        it competitive, create an image that will strengthen <br /> its position
        and establish it as a brand
      </p>
      <WeDoingCards />
    </section>
  );
};

export default WawdSection;
