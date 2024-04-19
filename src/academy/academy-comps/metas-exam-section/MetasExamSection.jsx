import React from "react";
import "./metas-exam-section.css";
import { useTranslation } from "react-i18next";
import ContactFormSection from "../../../components/Sections/Contact-page/ContactFormSection/ContactFormSection";

const MetasExamSection = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="metas-exam-section">
        <h2 className="academy-courses-heading">{t("metasExam")}</h2>
        <div className="meta-exam-container">
          <p className="meta-exam-text">{t("metaExamText")}</p>
          <img src="../img/meta-icon.png" alt="meta-icon" />
        </div>
      </section>
      <ContactFormSection formId={"Metas Exam"} />
    </>
  );
};

export default MetasExamSection;
