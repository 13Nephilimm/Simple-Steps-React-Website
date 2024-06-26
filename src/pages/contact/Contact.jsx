import React from "react";
import "./contact.css";
import Header from "../../components/ReUsable/header/Header";
import ContactSection from "../../components/Sections/Contact-page/ContactSection/ContactSection";
import ContactFormSection from "../../components/Sections/Contact-page/ContactFormSection/ContactFormSection";
import IntroduceSection from "../../components/Sections/Contact-page/IntroduceSection/IntroduceSection";
import InfiniteSlider from "../../components/ReUsable/infinite-slider/InfiniteSlider";
import Footer from "../../components/ReUsable/footer/Footer";

const Contact = () => {
  return (
    <>
      <Header />
      <ContactSection />
      <ContactFormSection formId={"contact page"} />
      <IntroduceSection />
      <InfiniteSlider backgroundColor={"transparent"} textColor={"#0000fe"} />
      <Footer />
    </>
  );
};

export default Contact;
