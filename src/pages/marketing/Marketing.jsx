import React from "react";
import "./marketing.css";
import ServTemplate from "../../components/ReUsable/services-template/ServTemplate";
import Header from "../../components/ReUsable/header/Header";
import Footer from "../../components/ReUsable/footer/Footer";
import ContactFormSection from "../../components/Sections/Contact-page/ContactFormSection/ContactFormSection";
import InfiniteSlider from "../../components/ReUsable/infinite-slider/InfiniteSlider";
import { useTranslation } from "react-i18next";

const Marketing = () => {
  const { t } = useTranslation();

  const btnArray = [
    t("competitorsStudy"),
    t("definingContentDirections"),
    t("targetAudience"),
    t("planning"),
    t("brandGuideline"),
    t("brandAnalytic"),
  ];

  return (
    <div>
      <Header />
      <ServTemplate
        headingOne={t("strategyHeading")}
        descOne={t("marketingDesc")}
        statOne={"100+"}
        statOneHeading={t("clients")}
        includeHeading={t("marketingIncludeHeading")}
        descTwo={t("marketingDescTwo")}
        descThree={t("marketingDescThree")}
        btns={btnArray}
      />
      <ContactFormSection formId={"creating a marketing strategy"} />
      <InfiniteSlider textColor={"#0000fe"} />
      <Footer />
    </div>
  );
};

export default Marketing;
