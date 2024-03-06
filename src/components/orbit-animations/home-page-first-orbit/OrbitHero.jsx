import React from "react";
import "./orbithero.css";

const OrbitHero = () => {
  return (
    <div className="bg-orbit">
      <div className="center-circle"></div>
      <div className="line-center-vertical"></div>
      <div className="line-center-horizontal"></div>
      <div className="line-diagonal-1"></div>
      <div className="line-diagonal-2">
        <div className="left-diagonal-orbit">
          <div className="left-diagonal-orbit-circle"></div>
        </div>
        <div className="left-diagonal-orbit-2">
          <div className="left-diagonal-orbit-circle-2"></div>
        </div>
        <div className="left-diagonal-circle"></div>
        <div className="right-diagonal-orbit">
          <div className="right-diagonal-orbit-circle"></div>
        </div>
        <div className="right-diagonal-orbit-2">
          <div className="right-diagonal-orbit-circle-2"></div>
        </div>
        <div className="right-diagonal-circle"></div>
      </div>
      {/* circles */}
      <div className="circle-1">
        <div className="child-circle-1"></div>
      </div>
      <div className="circle-2">
        <div className="child-circle-2"></div>
      </div>
      <div className="circle-3">
        <div className="child-circle-3"></div>
      </div>
      <div className="circle-4">
        <div className="child-circle-4"></div>
      </div>
      <div className="circle-5">
        <div className="child-circle-5"></div>
      </div>
      <div className="circle-6">
        <div className="circle-6-planet-marketing"></div>
        <div className="circle-6-orbit-marketing">
          <div className="circle-6-orbit-marketing-mini"></div>
          <div className="circle-6-orbit-marketing-mini-2"></div>
        </div>
      </div>
      <h3 className="blue-planet-name branding">Branding</h3>
      <h3 className="blue-planet-name web">Web development</h3>
      <h3 className="blue-planet-name prodaction">Production</h3>
      <h3 className="blue-planet-name content">Create content</h3>
      <h3 className="blue-planet-name social">
        Social media <br></br>
        <span className="white-planet-name management">management</span>
      </h3>
      <h3 className="blue-planet-name strategy">
        <span className="white-planet-name marketing">Marketing creating</span>{" "}
        a strategy
      </h3>
    </div>
  );
};

export default OrbitHero;
