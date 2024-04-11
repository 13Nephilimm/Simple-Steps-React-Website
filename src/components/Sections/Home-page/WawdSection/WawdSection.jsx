import React from "react";
import WeDoingCards from "../../../ReUsable/what-are-we-doing-cards/WeDoingCards";
import "./wawd-section.css";
import { useTranslation } from "react-i18next";

const WawdSection = () => {
  const { t } = useTranslation();

  return (
    <section className="section section-what-are-we-doing">
      <h2 className="we-doing-heading">{t("whatAreWeDoing")}</h2>
      <p className="we-doing-description">
        {t("weDoingDesc1")} <br /> {t("weDoingDesc2")}
        <br /> {t("weDoingDesc3")}
      </p>
      <WeDoingCards />
    </section>
  );
};

export default WawdSection;
