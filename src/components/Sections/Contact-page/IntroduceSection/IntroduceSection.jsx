import React from "react";
import "./introduce-section.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const IntroduceSection = () => {
  const { t } = useTranslation();

  return (
    <section className="section introduce-section">
      <h2 className="introduce-heading">{t("introduceHeading")}</h2>
      <h2 className="introduce-sub-heading">
        {t("introduceSubHeading1")} <br /> {t("introduceSubHeading2")}
      </h2>
      <div className="introduce-categories-container">
        <Link to="/marketing">
          <button className="btn-introduce">{t("marketingStrategy")}</button>
        </Link>
        <Link to="/management">
          <button className="btn-introduce">{t("socialManagement")}</button>
        </Link>
        <Link to="/content">
          <button className="btn-introduce">{t("contentCreation")}</button>
        </Link>
        <Link to="/production">
          <button className="btn-introduce">{t("videoPhoto")}</button>
        </Link>
        <Link to="/branding">
          <button className="btn-introduce">{t("branding")}</button>
        </Link>
        <Link to="/web-development">
          <button className="btn-introduce">{t("webDevelopment")}</button>
        </Link>
      </div>
    </section>
  );
};

export default IntroduceSection;
