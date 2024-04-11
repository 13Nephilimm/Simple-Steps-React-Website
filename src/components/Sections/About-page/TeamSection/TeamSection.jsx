import React from "react";
import "./team-section.css";
import { useTranslation } from "react-i18next";

const TeamSection = () => {
  const { t } = useTranslation();

  return (
    <section className="section team-section">
      <h3 className="team-end-heading">{t("teamEndHeading")}</h3>
      <h3 className="team-end-heading-2">{t("teamEndHeading2")}</h3>
      <a href="/contact" className="team-contact-btn">
        {t("contactUs")}
      </a>
    </section>
  );
};

export default TeamSection;
