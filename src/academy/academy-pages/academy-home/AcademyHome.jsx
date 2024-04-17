import React from "react";
import AcademyHeader from "../../academy-comps/academy-header/AcademyHeader";
import "./academy-home.css";
import ComingSoon from "../../../components/ReUsable/coming-soon/ComingSoon";
import AcademyHero from "../../academy-comps/academy-hero/AcademyHero";
import AcademyCoursesSection from "../../academy-comps/academy-courses-section/AcademyCoursesSection";
import Footer from "../../../components/ReUsable/footer/Footer";
import TestimonialsSection from "../../academy-comps/testimonials-section/TestimonialsSection";
import InfiniteSlider from "../../../components/ReUsable/infinite-slider/InfiniteSlider";

const AcademyHome = () => {
  return (
    <div>
      <AcademyHeader />
      <ComingSoon />
      <AcademyHero />
      <AcademyCoursesSection />
      <TestimonialsSection />
      <InfiniteSlider />
      <Footer />
    </div>
  );
};

export default AcademyHome;
