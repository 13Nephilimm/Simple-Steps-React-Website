import React, { useEffect, useState } from "react";
import "./portfolio-section.css";
import InfiniteSlider from "../../../ReUsable/infinite-slider/InfiniteSlider";
import { useTranslation } from "react-i18next";

const PortfolioSection = () => {
  const { t } = useTranslation();

  return (
    <section className="section section-portfolio">
      <div className="gradient-circle"></div>
      <div className="portfolio-container">
        <div className="portfolio-branding">
          <div className="portfolio-project">
            <h1 className="portfolio-headings">{t("branding")}</h1>
          </div>
          <div className="portfolio-project">
            <img src="./img/branding-1.png" alt="portfolio-project" />
          </div>
          <div className="portfolio-project">
            <img src="./img/branding-2.png" alt="portfolio-project" />
          </div>
          <div className="portfolio-project">
            <img src="./img/branding-3.png" alt="portfolio-project" />
          </div>
        </div>

        <div className="portfolio-photography">
          <div className="portfolio-project">
            <h1 className="portfolio-headings">{t("photography")}</h1>
          </div>
          <div className="portfolio-project">
            <img src="./img/ph-1.png" alt="portfolio-project" />
          </div>
          <div className="portfolio-project">
            <img src="./img/ph-2.png" alt="portfolio-project" />
          </div>
          <div className="portfolio-project">
            <img src="./img/ph-3.png" alt="portfolio-project" />
          </div>
        </div>

        <div className="portfolio-social">
          <div className="portfolio-project">
            <h1 className="portfolio-headings">{t("portfolioSocialMedia")}</h1>
          </div>
          <div className="portfolio-project">
            <img src="./img/social-1.png" alt="portfolio-project" />
          </div>
          <div className="portfolio-project">
            <img src="./img/social-2.png" alt="portfolio-project" />
          </div>
          <div className="portfolio-project">
            <img src="./img/social-3.png" alt="portfolio-project" />
          </div>
        </div>
      </div>
      <div className="portfolio-btn-box">
        <a href="#" className="portfolio-btn">
          {t("seeMore")}
        </a>
      </div>
      <div className="placeholder"></div>
      <InfiniteSlider backgroundColor={"transparent"} textColor={"#0000fe"} />
    </section>
  );
};

export default PortfolioSection;
