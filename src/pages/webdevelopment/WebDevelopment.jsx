import React from "react";
import "./web-development.css";
import ServTemplate from "../../components/ReUsable/services-template/ServTemplate";
import Header from "../../components/ReUsable/header/Header";
import Footer from "../../components/ReUsable/footer/Footer";
import ContactFormSection from "../../components/Sections/Contact-page/ContactFormSection/ContactFormSection";
import InfiniteSlider from "../../components/ReUsable/infinite-slider/InfiniteSlider";
import { useTranslation } from "react-i18next";

const WebDevelopment = () => {
  const { t } = useTranslation();

  const btnArray = [
    t("uiux"),
    t("uxResearch"),
    t("website"),
    t("complexity"),
    t("functionality"),
    t("technical"),
  ];

  const imgArray = ["./img/web-single.png"];

  return (
    <div>
      <Header />
      <ServTemplate
        headingOne={t("webHeading")}
        descOne={t("webDesc")}
        statOne={"100+"}
        statTwo={"50+"}
        statThree={"30+"}
        statOneHeading={t("clients")}
        statTwoHeading={t("uiux")}
        statThreeHeading={t("website")}
        includeHeading={t("webIncludeHeading")}
        descTwo={t("webDescTwo")}
        descThree={t("webDescThree")}
        btns={btnArray}
        imgs={imgArray}
      />
      <ContactFormSection formId={"web development page"} />
      <InfiniteSlider textColor={"#0000fe"} />
      <Footer />
    </div>
  );
};

export default WebDevelopment;
