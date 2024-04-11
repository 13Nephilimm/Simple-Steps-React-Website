import React from "react";
import "./hero-section.css";
import OrbitHero from "../../../OrbitAnimations/home-page-first-orbit/OrbitHero";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="section hero-section">
      <h1 className="main-heading">
        {t("developTheRightMarketing")} <br></br> {t("strategyForYourBusiness")}
      </h1>
      <OrbitHero />
    </section>
  );
};

export default HeroSection;
