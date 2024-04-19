import React from "react";
import "./academy-main-courses-section.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const AcademyMainCoursesSection = () => {
  const { t } = useTranslation();

  return (
    <section className="academy-courses-section">
      <h2 className="academy-courses-heading">{t("academyCoursesHeading")}</h2>
      <div className="academy-courses-container">
        <div className="white-gradient-circle"></div>
        <div className="course-card">
          <div className="course-card-img-box">
            <img src="../img/nika.png" alt="mentor" className="mentor" />
          </div>
          <div className="course-card-text-box">
            <h3>{t("courseCardHeadingMarketing")}</h3>
            <p>{t("mentor")}</p>
            <span>{t("nika")}</span>
            <p className="about-course">{t("aboutCourse")}</p>
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
            <p className="about-course">{t("aboutCourse")}</p>
          </div>
        </div>
        <div className="course-card">
          <div className="course-card-img-box">
            <img src="../img/mariami.png" alt="mentor" className="mentor" />
          </div>
          <div className="course-card-text-box">
            <h3>{t("courseCardHeadingDesign")}</h3>
            <p>{t("mentor")}</p>
            <span>{t("mariami")}</span>
            <p className="about-course">{t("aboutCourse")}</p>
          </div>
        </div>
      </div>
      <Link>
        <button className="contact-btn-submit">{t("allCoursesBtn")}</button>
      </Link>
    </section>
  );
};

export default AcademyMainCoursesSection;
