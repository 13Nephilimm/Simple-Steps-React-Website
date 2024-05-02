import React from "react";
import "./AcademyCoursesHeroSection.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import AcademyMainCoursesSection from "../academy-main-courses-section/AcademyMainCoursesSection";
import AcademyMasterclassSection from "../academy-masterclass-section/AcademyMasterclassSection";
import MetasExamSection from "../metas-exam-section/MetasExamSection";
import ComingSoon from "../../../components/ReUsable/coming-soon/ComingSoon";

const AcademyCoursesHeroSection = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="academy-courses-hero-section">
        <ComingSoon />
        <div className="courses-hero-container">
          <Link to="courses" smooth="true" className="courses-category-heading">
            {t("courses")}
          </Link>
          <Link
            to="masterclass"
            smooth="true"
            className="courses-category-heading"
          >
            {t("masterclass")}
          </Link>
          <Link to="meta" smooth="true" className="courses-category-heading">
            {t("metasExam")}
          </Link>
        </div>
      </section>
      <div id="courses">
        <AcademyMainCoursesSection />
      </div>
      <div id="masterclass">
        <AcademyMasterclassSection />
      </div>
      <div id="meta">
        <MetasExamSection />
      </div>
    </>
  );
};

export default AcademyCoursesHeroSection;
