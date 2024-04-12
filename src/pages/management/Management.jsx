import React from "react";
import "./management.css";
import ServTemplate from "../../components/ReUsable/services-template/ServTemplate";
import Header from "../../components/ReUsable/header/Header";
import Footer from "../../components/ReUsable/footer/Footer";
import ContactFormSection from "../../components/Sections/Contact-page/ContactFormSection/ContactFormSection";
import InfiniteSlider from "../../components/ReUsable/infinite-slider/InfiniteSlider";
import { useTranslation } from "react-i18next";

const Management = () => {
  const { t } = useTranslation();

  const btnArray = [t("fullHolding"), t("placementOfPosts"), t("schedule")];

  const imgArray = ["./img/management-single.png"];

  return (
    <div>
      <Header />
      <ServTemplate
        headingOne={t("socialManagement")}
        descOne={t("managementDesc")}
        statOne={"100+"}
        statTwo={"50+"}
        statThree={"30+"}
        statOneHeading={t("clients")}
        statTwoHeading={t("uiux")}
        statThreeHeading={t("website")}
        includeHeading={t("managementIncludeHeading")}
        descTwo={t("managementDescTwo")}
        btns={btnArray}
        imgs={imgArray}
      />
      <ContactFormSection formId={"management of social networks page"} />
      <InfiniteSlider textColor={"#0000fe"} />
      <Footer />
    </div>
  );
};

export default Management;
