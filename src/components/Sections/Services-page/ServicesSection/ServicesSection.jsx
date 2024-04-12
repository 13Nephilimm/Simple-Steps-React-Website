import React from "react";
import "./services-section.css";
import ComingSoon from "../../../ReUsable/coming-soon/ComingSoon";
import { useTranslation } from "react-i18next";

const ServicesSection = () => {
  const { t } = useTranslation();

  return (
    <section className="section services-section">
      <ComingSoon />
      <div className="page-shape">
        <div className="video-shape-box">
          <video
            src="./img/services-shape.mp4"
            type="video/mp4"
            autoPlay
            loop
            muted
          ></video>
        </div>
        <h1 className="section-heading-1">
          {t("sectionHeading1")} <br /> {t("sectionHeading2")}
        </h1>
        <h1 className="section-heading-2">
          {t("sectionHeading3")} <br /> {t("sectionHeading4")}
        </h1>
      </div>
    </section>
  );
};

export default ServicesSection;
