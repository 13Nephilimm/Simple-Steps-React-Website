import React from "react";
import "./services-section.css";
import ComingSoon from "../../../ReUsable/coming-soon/ComingSoon";

const ServicesSection = () => {
  return (
    <section className="section services-section">
      <ComingSoon />
      <div className="page-shape">
        <div className="video-shape-box">
          <video
            src="./img/services-shape.mp4"
            type="video/mp4"
            autoPlay
            loop
            muted
          ></video>
        </div>
        <h1 className="section-heading-1">
          Increase your brand <br /> awareness on social media
        </h1>
        <h1 className="section-heading-2">
          Develop the right marketing <br /> strategy for your business
        </h1>
      </div>
    </section>
  );
};

export default ServicesSection;
