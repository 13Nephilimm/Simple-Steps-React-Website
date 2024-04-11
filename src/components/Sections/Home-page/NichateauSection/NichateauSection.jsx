import React from "react";
import "./nichateau-section.css";
import { useTranslation } from "react-i18next";

const NichateauSection = () => {
  const { t } = useTranslation();

  return (
    <section className="section nichateau-section">
      <div className="nichateau-container">
        <div className="nichateau-text-box">
          <h2 className="our-projects-heading">{t("favProjects")}</h2>
          <h3 className="nichateau-heading">{t("nichateau")}</h3>
          <p className="nichateau-description">
            {t("nichateauDesc1")} <br /> {t("nichateauDesc2")} <br />{" "}
            {t("nichateauDesc3")} <br /> {t("nichateauDesc4")} <br />{" "}
            {t("nichateau")}
          </p>
          <h3 className="nichateau-sub-heading">{t("seeMore")}</h3>
        </div>
        <div className="nichateau-img-box">
          <img src="./img/nichateau-img.png" alt="nichateau-img" />
        </div>
      </div>
    </section>
  );
};

export default NichateauSection;
