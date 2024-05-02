import React from "react";
import "./academy-contact.css";
import AcademyHeader from "../../academy-comps/academy-header/AcademyHeader";
import ContactFormSection from "../../../components/Sections/Contact-page/ContactFormSection/ContactFormSection";
import InfiniteSlider from "../../../components/ReUsable/infinite-slider/InfiniteSlider";
import AcademyFooter from "../../academy-comps/academy-footer/AcademyFooter";

const AcademyContact = () => {
  return (
    <div>
      <AcademyHeader />
      <ContactFormSection formId={"Academy Page"} />
      <InfiniteSlider />
      <AcademyFooter />
    </div>
  );
};

export default AcademyContact;
