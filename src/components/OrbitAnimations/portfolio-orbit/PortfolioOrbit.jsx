import React from "react";
import "./portfolioorbit.css";

const PortfolioOrbit = () => {
  return (
    <div className="portfolio-bg-orbit">
      <div className="gradient-circle"></div>
      <div className="portfolio-center-circle"></div>
      <div className="portfolio-line-center-vertical"></div>
      <div className="portfolio-line-center-horizontal"></div>
      <div className="portfolio-line-diagonal-1"></div>
      <div className="portfolio-line-diagonal-2">
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
      <div className="portfolio-circle-1">
        <div className="child-circle-1"></div>
      </div>
      <div className="portfolio-circle-2">
        <div className="child-circle-2"></div>
      </div>
      <div className="portfolio-circle-3">
        <div className="child-circle-3"></div>
      </div>
      <div className="portfolio-circle-4">
        <div className="child-circle-4"></div>
      </div>
      <div className="portfolio-circle-5">
        <div className="child-circle-5"></div>
      </div>
      <div className="portfolio-circle-6">
        <div className="circle-6-planet-marketing"></div>
        <div className="circle-6-orbit-marketing">
          <div className="circle-6-orbit-marketing-mini"></div>
          <div className="circle-6-orbit-marketing-mini-2"></div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioOrbit;
