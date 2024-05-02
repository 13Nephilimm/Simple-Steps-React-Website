import React from "react";
import "./meta-single.css";
import { useTranslation } from "react-i18next";
import AcademyHeader from "../../academy-comps/academy-header/AcademyHeader";
import AcademyFooter from "../../academy-comps/academy-footer/AcademyFooter";
import ContactFormSection from "../../../components/Sections/Contact-page/ContactFormSection/ContactFormSection";

const MetaSingle = () => {
  const { t } = useTranslation();

  return (
    <>
      <AcademyHeader />
      <section className="metas-exam-section">
        <h2 className="academy-courses-heading">{t("metasExam")}</h2>
        <div className="meta-exam-container">
          <p className="meta-exam-text">{t("metaExamText")}</p>
          <img src="../img/meta-icon.png" alt="meta-icon" />
        </div>
      </section>
      <h2 className="request-call">{t("metaCall")}</h2>
      <ContactFormSection formId={"Metas Exam"} />
      <AcademyFooter />
    </>
  );
};

export default MetaSingle;
