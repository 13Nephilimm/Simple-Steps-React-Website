import React from "react";
import "./brand-audit.css";
import ServTemplate from "../../components/ReUsable/services-template/ServTemplate";
import Header from "../../components/ReUsable/header/Header";
import Footer from "../../components/ReUsable/footer/Footer";
import ContactFormSection from "../../components/Sections/Contact-page/ContactFormSection/ContactFormSection";
import InfiniteSlider from "../../components/ReUsable/infinite-slider/InfiniteSlider";
import { useTranslation } from "react-i18next";

const BrandAudit = () => {
  const { t } = useTranslation();

  const btnArray = [
    t("pageAuditResults"),
    t("recommendations"),
    t("implementationSupport"),
    t("socialMediaBrief"),
  ];

  return (
    <div>
      <Header />
      <ServTemplate
        headingOne={t("BrandAudit")}
        descOne={t("brandAuditDesc")}
        statOne={"100+"}
        statOneHeading={t("clients")}
        includeHeading={t("brandAuditIncludeHeading")}
        descTwo={t("brandAuditDescTwo")}
        btns={btnArray}
      />
      <ContactFormSection formId={"brand audit page"} />
      <InfiniteSlider textColor={"#0000fe"} />
      <Footer />
    </div>
  );
};

export default BrandAudit;
