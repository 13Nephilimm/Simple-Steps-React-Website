import React from "react";
import "./academy-masterclass-section.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const AcademyMasterclassSection = () => {
  const { t } = useTranslation();

  return (
    <section className="academy-courses-section">
      <h2 className="academy-courses-heading">{t("masterclasses")}</h2>
      <div className="academy-courses-container">
        <div className="white-gradient-circle"></div>
        <div className="course-card">
          <div className="course-card-img-box">
            <img src="../img/sandro-nika.png" alt="mentor" className="mentor" />
          </div>
          <div className="course-card-text-box">
            <h3 className="masterclass-card-heading">
              {t("digitalMasterclass")}
            </h3>
            <p>{t("mentor")}</p>
            <span>{t("nika")}, </span>
            <span>{t("sandro")}</span>
            <p className="about-course">{t("aboutCourse")}</p>
          </div>
        </div>
        <div className="course-card">
          <div className="course-card-img-box">
            <img src="../img/sandro-nika.png" alt="mentor" className="mentor" />
          </div>
          <div className="course-card-text-box">
            <h3 className="masterclass-card-heading">
              {t("digitalMasterclass")}
            </h3>
            <p>{t("mentor")}</p>
            <span>{t("nika")}, </span>
            <span>{t("sandro")}</span>
            <p className="about-course">{t("aboutCourse")}</p>
          </div>
        </div>
        <div className="course-card">
          <div className="course-card-img-box">
            <img src="../img/sandro-nika.png" alt="mentor" className="mentor" />
          </div>
          <div className="course-card-text-box">
            <h3 className="masterclass-card-heading">
              {t("digitalMasterclass")}
            </h3>
            <p>{t("mentor")}</p>
            <span>{t("nika")}, </span>
            <span>{t("sandro")}</span>
            <p className="about-course">{t("aboutCourse")}</p>
          </div>
        </div>
      </div>
      <Link>
        <button className="contact-btn-submit">
          {t("allMasterclassesBtn")}
        </button>
      </Link>
    </section>
  );
};

export default AcademyMasterclassSection;
