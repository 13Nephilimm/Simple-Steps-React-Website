import React from "react";
import "./production.css";
import ServTemplate from "../../components/ReUsable/services-template/ServTemplate";
import Header from "../../components/ReUsable/header/Header";
import Footer from "../../components/ReUsable/footer/Footer";
import ContactFormSection from "../../components/Sections/Contact-page/ContactFormSection/ContactFormSection";
import InfiniteSlider from "../../components/ReUsable/infinite-slider/InfiniteSlider";
import { useTranslation } from "react-i18next";

const Production = () => {
  const { t } = useTranslation();

  const btnArray = [t("createBreef"), t("arrangement"), t("video")];

  const imgArray = ["./img/production-single.png"];

  return (
    <div>
      <Header />
      <ServTemplate
        headingOne={t("videoPhoto")}
        descOne={t("productionDesc")}
        statOne={"100+"}
        statOneHeading={t("clients")}
        includeHeading={t("productionIncludeHeading")}
        descTwo={t("productionDescTwo")}
        descThree={t("productionDescThree")}
        btns={btnArray}
        imgs={imgArray}
      />
      <ContactFormSection formId={"production page"} />
      <InfiniteSlider textColor={"#0000fe"} />
      <Footer />
    </div>
  );
};

export default Production;
