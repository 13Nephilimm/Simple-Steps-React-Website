import React from "react";
import "./branding.css";
import ServTemplate from "../../components/ReUsable/services-template/ServTemplate";
import Header from "../../components/ReUsable/header/Header";
import Footer from "../../components/ReUsable/footer/Footer";
import ContactFormSection from "../../components/Sections/Contact-page/ContactFormSection/ContactFormSection";
import InfiniteSlider from "../../components/ReUsable/infinite-slider/InfiniteSlider";
import { useTranslation } from "react-i18next";

const Branding = () => {
  const { t } = useTranslation();

  const btnArray = [
    t("logoDesign"),
    t("moodBoard"),
    t("brandBook"),
    t("brandIdentity"),
    t("brandGuideline"),
    t("brandAnalytic"),
  ];

  const imgArray = ["./img/branding-single.png"];

  return (
    <div>
      <Header />
      <ServTemplate
        headingOne={t("branding")}
        descOne={t("brandDesc")}
        statOne={"100+"}
        statTwo={"50+"}
        statThree={"30+"}
        statOneHeading={t("clients")}
        statTwoHeading={t("logoDesign")}
        statThreeHeading={t("branding")}
        includeHeading={t("includeHeading")}
        descTwo={t("brandDescTwo")}
        descThree={t("brandDescThree")}
        btns={btnArray}
        imgs={imgArray}
      />
      <ContactFormSection formId={"branding page"} />
      <InfiniteSlider textColor={"#0000fe"} />
      <Footer />
    </div>
  );
};

export default Branding;
