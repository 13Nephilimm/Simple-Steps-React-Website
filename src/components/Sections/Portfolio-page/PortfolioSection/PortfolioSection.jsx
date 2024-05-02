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
          <a
            href="https://www.behance.net/gallery/182373639/OFFER-ZEN-Brand-Identity"
            target="_blank"
          >
            <div className="portfolio-project">
              <img src="./img/branding-1.png" alt="portfolio-project" />
            </div>
          </a>
          <a
            href="https://www.behance.net/gallery/181141449/Nichateau-Winery-More"
            target="_blank"
          >
            <div className="portfolio-project">
              <img src="./img/branding-2.png" alt="portfolio-project" />
            </div>
          </a>
          <a
            href="https://www.behance.net/gallery/164025575/Radar-Brand-Guidelines"
            target="_blank"
          >
            <div className="portfolio-project">
              <img src="./img/branding-3.png" alt="portfolio-project" />
            </div>
          </a>
        </div>

        <div className="portfolio-photography">
          <div className="portfolio-project">
            <h1 className="portfolio-headings">{t("photography")}</h1>
          </div>
          <a
            href="https://www.behance.net/gallery/168306045/Tresor"
            target="_blank"
          >
            <div className="portfolio-project">
              <img src="./img/ph-1.png" alt="portfolio-project" />
            </div>
          </a>
          <a
            href="https://www.behance.net/gallery/172673829/Mzetamze"
            target="_blank"
          >
            <div className="portfolio-project">
              <img src="./img/ph-2.png" alt="portfolio-project" />
            </div>
          </a>
          <a
            target="_blank"
            href="https://www.behance.net/gallery/197545239/Nichateau-Winery-More"
          >
            <div className="portfolio-project">
              <img src="./img/ph-3.png" alt="portfolio-project" />
            </div>
          </a>
        </div>

        <div className="portfolio-social">
          <div className="portfolio-project">
            <h1 className="portfolio-headings">{t("portfolioSocialMedia")}</h1>
          </div>
          <a
            href="https://www.behance.net/gallery/123586785/beer-market"
            target="_blank"
          >
            <div className="portfolio-project">
              <img src="./img/social-1.png" alt="portfolio-project" />
            </div>
          </a>
          <a
            href="https://www.behance.net/gallery/126967675/Lisi-lemans-social-media"
            target="_blank"
          >
            <div className="portfolio-project">
              <img src="./img/social-2.png" alt="portfolio-project" />
            </div>
          </a>
          <a
            href="https://www.behance.net/gallery/146938913/NORMON-social-media"
            target="_blank"
          >
            <div className="portfolio-project">
              <img src="./img/social-3.png" alt="portfolio-project" />
            </div>
          </a>
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
