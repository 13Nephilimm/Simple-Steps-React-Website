import React from "react";
import "./partners-section.css";
import PartnersOrbit from "../../../OrbitAnimations/partners-orbit/PartnersOrbit";
import { useTranslation } from "react-i18next";

const PartnersSection = () => {
  const { t } = useTranslation();

  return (
    <section className="section partners-section">
      <h2 className="partners-heading">{t("partnersHeading")}</h2>
      <PartnersOrbit />
    </section>
  );
};

export default PartnersSection;
