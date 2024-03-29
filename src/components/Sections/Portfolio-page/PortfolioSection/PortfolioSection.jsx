import React from "react";
import "./portfolio-section.css";
import PortfolioOrbit from "../../../OrbitAnimations/portfolio-orbit/PortfolioOrbit";
import InfiniteSlider from "../../../ReUsable/infinite-slider/InfiniteSlider";

const PortfolioSection = () => {
  return (
    <section className="section section-portfolio">
      <PortfolioOrbit />
      <div className="portfolio-container">
        <h1 className="portfolio-headings">Social media post design</h1>
        <div className="portfolio-social">
          <div className="portfolio-project">
            <img src="./img/social-1.png" alt="portfolio-project" />
          </div>
          <div className="portfolio-project">
            <img src="./img/social-2.png" alt="portfolio-project" />
          </div>
          <div className="portfolio-project">
            <img src="./img/social-3.png" alt="portfolio-project" />
          </div>
          <div className="portfolio-project">
            <img src="./img/social-4.png" alt="portfolio-project" />
          </div>
        </div>
        <h1 className="portfolio-headings">Branding</h1>
        <div className="portfolio-branding">
          <div className="portfolio-project">
            <img src="./img/branding-1.png" alt="portfolio-project" />
          </div>
          <div className="portfolio-project">
            <img src="./img/branding-2.png" alt="portfolio-project" />
          </div>
          <div className="portfolio-project">
            <img src="./img/branding-3.png" alt="portfolio-project" />
          </div>
          <div className="portfolio-project">
            <img src="./img/branding-4.png" alt="portfolio-project" />
          </div>
        </div>
        <h1 className="portfolio-headings">Photography</h1>
        <div className="portfolio-photography">
          <div className="portfolio-project">
            <img src="./img/ph-1.png" alt="portfolio-project" />
          </div>
          <div className="portfolio-project">
            <img src="./img/ph-2.png" alt="portfolio-project" />
          </div>
          <div className="portfolio-project">
            <img src="./img/ph-3.png" alt="portfolio-project" />
          </div>
          <div className="portfolio-project">
            <img src="./img/ph-4.png" alt="portfolio-project" />
          </div>
        </div>
      </div>
      <div className="portfolio-btn-box">
        <a href="#" className="portfolio-btn">
          See more
        </a>
      </div>
      <div className="placeholder"></div>
      <InfiniteSlider />
    </section>
  );
};

export default PortfolioSection;
