import React from "react";
import "./academy-courses-section.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const AcademyCoursesSection = () => {
  const { t } = useTranslation();

  return (
    <section className="academy-courses-section">
      <h2 className="academy-courses-heading">{t("metasExam")}</h2>
      <div className="meta-exam-container">
        <p className="meta-exam-text">{t("metaExamText")}</p>
        <img src="../img/meta-icon.png" alt="meta-icon" />
      </div>
      <h2 className="academy-courses-heading">{t("academyCoursesHeading")}</h2>
      <div className="academy-courses-container-page">
        <div className="white-gradient-circle"></div>
        <div className="course-card">
          <div className="course-card-img-box">
            <img
              src="../img/nika-sandro-single.jpg"
              alt="mentor"
              className="mentor"
            />
          </div>
          <div className="course-card-text-box">
            <h3>{t("courseCardHeadingMarketing")}</h3>
            <p>{t("mentor")}</p>
            <span>
              {t("nika")}, {t("sandro")}
            </span>
            <Link to={"/digital-marketing"}>
              <p className="about-course">{t("aboutCourse")}</p>
            </Link>
          </div>
        </div>
        <div className="course-card">
          <div className="course-card-img-box">
            <img src="../img/tiko.jpg" alt="mentor" className="mentor" />
          </div>
          <div className="course-card-text-box">
            <h3>Google Ads</h3>
            <p>{t("mentor")}</p>
            <span>{t("tiko")}</span>
            <Link to={"/google-ads"}>
              <p className="about-course">{t("aboutCourse")}</p>
            </Link>
          </div>
        </div>
        <div className="course-card card-3">
          <div className="course-card-img-box">
            <img src="../img/mariami.png" alt="mentor" className="mentor" />
          </div>
          <div className="course-card-text-box">
            <h3>{t("courseCardHeadingDesign")}</h3>
            <p>{t("mentor")}</p>
            <span>{t("mariami")}</span>
            <p className="about-course">{t("comingSoon")}</p>
          </div>
        </div>
      </div>
      <Link to={"/academy-courses"}>
        <button className="contact-btn-submit all-courses-btn">
          {t("allCoursesBtn")}
        </button>
      </Link>
    </section>
  );
};

export default AcademyCoursesSection;
