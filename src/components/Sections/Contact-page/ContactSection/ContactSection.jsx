import React from "react";
import "./contact-section.css";
import ComingSoon from "../../../ReUsable/coming-soon/ComingSoon";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <section className="section contact-section">
      <ComingSoon />
      <div className="page-shape">
        <div className="video-shape-box">
          <video
            src="./img/contact-shape.mp4"
            type="video/mp4"
            autoPlay
            loop
            muted
          ></video>
        </div>
        <h1 className="contact-heading-1">
          {t("contactHeading1")} <br /> {t("contactHeading2")}
        </h1>
      </div>
    </section>
  );
};

export default ContactSection;
