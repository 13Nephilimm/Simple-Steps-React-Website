import React from "react";
import "./content.css";
import ServTemplate from "../../components/ReUsable/services-template/ServTemplate";
import Header from "../../components/ReUsable/header/Header";
import Footer from "../../components/ReUsable/footer/Footer";
import ContactFormSection from "../../components/Sections/Contact-page/ContactFormSection/ContactFormSection";
import InfiniteSlider from "../../components/ReUsable/infinite-slider/InfiniteSlider";
import { useTranslation } from "react-i18next";

const Content = () => {
  const { t } = useTranslation();

  const btnArray = [t("determining"), t("subscription"), t("creationGraphic")];

  const imgArray = ["./img/content-single.png"];

  return (
    <div>
      <Header />
      <ServTemplate
        headingOne={t("contentCreation")}
        descOne={t("contentDesc")}
        statOne={"100+"}
        statOneHeading={t("clients")}
        includeHeading={t("contentIncludeHeading")}
        descTwo={t("contentDescTwo")}
        descThree={t("contentDescThree")}
        btns={btnArray}
        imgs={imgArray}
      />
      <ContactFormSection formId={"content creation page"} />
      <InfiniteSlider textColor={"#0000fe"} />
      <Footer />
    </div>
  );
};

export default Content;
