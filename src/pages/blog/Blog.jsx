import React from "react";
import Header from "../../components/ReUsable/header/Header";
import "./blog.css";
import ComingSoon from "../../components/ReUsable/coming-soon/ComingSoon";
import { useTranslation } from "react-i18next";

const Blog = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <section className="section blog-page-section">
      <Header />
      <ComingSoon />
      <h1 className="coming-soon">
        {t("comingSoon")}{" "}
        <span className={`${currentLanguage === "ge" ? "display-none" : ""}`}>
          )
        </span>
      </h1>
    </section>
  );
};

export default Blog;
