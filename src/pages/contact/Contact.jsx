import React from "react";
import "./contact.css";
import Navbar from "../../components/ReUsable/header/Navbar";
import ContactSection from "../../components/Sections/Contact-page/ContactSection/ContactSection";
import ContactFormSection from "../../components/Sections/Contact-page/ContactFormSection/ContactFormSection";
import IntroduceSection from "../../components/Sections/Contact-page/IntroduceSection/IntroduceSection";
import InfiniteSlider from "../../components/ReUsable/infinite-slider/InfiniteSlider";
import Footer from "../../components/ReUsable/footer/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <ContactSection />
      <ContactFormSection />
      <IntroduceSection />
      <InfiniteSlider backgroundColor={"transparent"} textColor={"#0000fe"} />
      <Footer />
    </>
  );
};

export default Contact;
