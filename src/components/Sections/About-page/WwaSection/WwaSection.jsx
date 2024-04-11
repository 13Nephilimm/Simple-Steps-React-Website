import React from "react";
import "./wwa-section.css";
import { useTranslation } from "react-i18next";

const WwaSection = () => {
  const { t } = useTranslation();

  return (
    <section className="section who-we-are-section">
      <div className="who-we-are-container">
        <div className="who-we-are-text-box">
          <h2 className="about-heading-1">{t("whoAreWe")}</h2>
          <p className="about-text-1">{t("aboutText1")}</p>
        </div>
        <div className="our-goal-text-box">
          <h2 className="about-heading-2">{t("ourGoal")}</h2>
          <p className="about-text-2">{t("aboutText2")}</p>
        </div>
      </div>
    </section>
  );
};

export default WwaSection;
