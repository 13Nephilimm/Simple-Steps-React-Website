import React from "react";
import "./academy-courses.css";
import ComingSoon from "../../../components/ReUsable/coming-soon/ComingSoon";
import AcademyHeader from "../../academy-comps/academy-header/AcademyHeader";
import AcademyCoursesHeroSection from "../../academy-comps/academy-courses-hero-section/AcademyCoursesHeroSection";
import InfiniteSlider from "../../../components/ReUsable/infinite-slider/InfiniteSlider";
import Footer from "../../../components/ReUsable/footer/Footer";

const AcademyCourses = () => {
  return (
    <div>
      <AcademyHeader />
      <ComingSoon />
      <AcademyCoursesHeroSection />
      <InfiniteSlider />
      <Footer />
    </div>
  );
};

export default AcademyCourses;
