import React from "react";
import Header from "../../components/ReUsable/header/Header";
import ComingSoon from "../../components/ReUsable/coming-soon/ComingSoon";
import "./career.css";
import { useTranslation } from "react-i18next";

const Career = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <section className="section career-section">
      <Header />
      <ComingSoon />
      <h1 className="coming-soon career-heading">
        {t("comingSoon")}{" "}
        <span className={`${currentLanguage === "ge" ? "display-none" : ""}`}>
          )
        </span>
      </h1>
    </section>
  );
};

export default Career;
