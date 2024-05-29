import React from "react";
import "./academy-about.css";
import { useTranslation } from "react-i18next";
import AcademyHeader from "../../academy-comps/academy-header/AcademyHeader";
import ComingSoon from "../../../components/ReUsable/coming-soon/ComingSoon";
import InfiniteSlider from "../../../components/ReUsable/infinite-slider/InfiniteSlider";
import AcademyFooter from "../../academy-comps/academy-footer/AcademyFooter";

const AcademyAbout = () => {
  const { t } = useTranslation();

  return (
    <>
      <AcademyHeader />
      <section className="academy-about-hero-section">
        <ComingSoon />
        <h1 className="academy-about-hero-heading">{t("aboutAcademy")}</h1>
      </section>
      <section className="academy-about-section-about">
        <div className="academy-about-container">
          <div className="academy-about-info-box">
            <h2>{t("howCreated")}</h2>
            <p>{t("howCreatedText")}</p>
            <h2>{t("whatWillULearn")}</h2>
            <p>{t("whatWillULearnText")}</p>
            <h2>{t("realCases")}</h2>
            <p>{t("realCasesText")}</p>
            <h2>{t("whyJoinUs")}</h2>
            <p>{t("whyJoinUsText")}</p>
          </div>
          <div className="academy-about-mentors-box">
            <h2>{t("aboutMentors")}</h2>
            <div className="course-card">
              <div className="course-card-img-box">
                <img src="../img/nika.png" alt="mentor" className="mentor" />
              </div>
              <div className="course-card-text-box">
                <h3>{t("courseCardHeadingMarketing")}</h3>
                <p>{t("mentor")}</p>
                <span>{t("nika")}</span>
              </div>
            </div>
            <div className="course-card">
              <div className="course-card-img-box">
                <img src="../img/sandro.png" alt="mentor" className="mentor" />
              </div>
              <div className="course-card-text-box">
                <h3>{t("courseCardHeadingMarketing")}</h3>
                <p>{t("mentor")}</p>
                <span>{t("sandro")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <InfiniteSlider />
      <AcademyFooter />
    </>
  );
};

export default AcademyAbout;
