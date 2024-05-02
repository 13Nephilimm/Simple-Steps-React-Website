import React from "react";
import AcademyHeader from "../../academy-comps/academy-header/AcademyHeader";
import "./academy-home.css";
import AcademyHero from "../../academy-comps/academy-hero/AcademyHero";
import AcademyCoursesSection from "../../academy-comps/academy-courses-section/AcademyCoursesSection";
import TestimonialsSection from "../../academy-comps/testimonials-section/TestimonialsSection";
import InfiniteSlider from "../../../components/ReUsable/infinite-slider/InfiniteSlider";
import AcademyFooter from "../../academy-comps/academy-footer/AcademyFooter";

const AcademyHome = () => {
  return (
    <div>
      <AcademyHeader />
      <AcademyHero />
      <AcademyCoursesSection />
      <TestimonialsSection />
      <InfiniteSlider />
      <AcademyFooter />
    </div>
  );
};

export default AcademyHome;
