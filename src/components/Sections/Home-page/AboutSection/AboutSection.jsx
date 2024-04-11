import React from "react";
import "./about-section.css";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section className="section about-section">
      <div className="about-container">
        <div className="about-img-box">
          <img src="./img/team.png" alt="about-img" />
        </div>
        <div className="about-text-box">
          <h2 className="about-heading">{t("aboutCompany")}</h2>
          <p className="about-description">{t("aboutCompanyText")}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
