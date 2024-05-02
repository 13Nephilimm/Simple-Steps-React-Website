import React from "react";
import "./testimonials-section.css";
import { useTranslation } from "react-i18next";

const TestimonialsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="academy-testimonials-section">
      <h2 className="academy-testimonials-heading">
        {t("testimonialsHeading")}
      </h2>
      <div className="academy-courses-container">
        <div className="white-gradient-circle"></div>
        <div className="course-card testimonials-card">
          <div className="course-card-img-box testimonials-img-box">
            <img src="../img/student.png" alt="mentor" className="mentor" />
          </div>
          <div className="course-card-text-box">
            <p>{t("testimonials")}</p>
          </div>
        </div>
        <div className="course-card testimonials-card">
          <div className="course-card-img-box testimonials-img-box">
            <img src="../img/student.png" alt="mentor" className="mentor" />
          </div>
          <div className="course-card-text-box">
            <p>{t("testimonials2")}</p>
          </div>
        </div>
        <div className="course-card testimonials-card card-3">
          <div className="course-card-img-box testimonials-img-box">
            <img src="../img/student.png" alt="mentor" className="mentor" />
          </div>
          <div className="course-card-text-box">
            <p>{t("testimonials3")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
