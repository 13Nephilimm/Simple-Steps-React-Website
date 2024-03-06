import React from "react";
import "./aboutorbit.css";

const AboutOrbit = () => {
  return (
    <div className="about-bg-orbit">
      <div className="about-center-circle"></div>
      <div className="about-line-center-vertical"></div>
      <div className="about-line-center-horizontal"></div>
      <div className="about-line-diagonal-1"></div>
      <div className="about-line-diagonal-2"></div>
      {/* circles */}
      <div className="about-circle-1">
        <div className="child-circle-1"></div>
      </div>
      <div className="about-circle-2">
        <div className="child-circle-2"></div>
      </div>
      <div className="about-circle-3">
        <div className="child-circle-3"></div>
      </div>
      <div className="about-circle-4">
        <div className="child-circle-4"></div>
      </div>
      <div className="about-circle-5">
        <div className="child-circle-5"></div>
      </div>
      <div className="about-circle-6">
        <div className="circle-6-planet-marketing"></div>
        <div className="circle-6-orbit-marketing">
          <div className="circle-6-orbit-marketing-mini"></div>
          <div className="circle-6-orbit-marketing-mini-2"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutOrbit;
