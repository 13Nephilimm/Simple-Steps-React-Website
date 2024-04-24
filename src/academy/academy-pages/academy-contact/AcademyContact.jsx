import React from "react";
import "./academy-contact.css";
import AcademyHeader from "../../academy-comps/academy-header/AcademyHeader";
import ContactFormSection from "../../../components/Sections/Contact-page/ContactFormSection/ContactFormSection";
import InfiniteSlider from "../../../components/ReUsable/infinite-slider/InfiniteSlider";
import Footer from "../../../components/ReUsable/footer/Footer";

const AcademyContact = () => {
  return (
    <div>
      <AcademyHeader />
      <ContactFormSection formId={"Academy Page"} />
      <InfiniteSlider />
      <Footer />
    </div>
  );
};

export default AcademyContact;
