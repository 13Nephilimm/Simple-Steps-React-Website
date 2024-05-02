import React from "react";
import "./academy-courses.css";
import AcademyHeader from "../../academy-comps/academy-header/AcademyHeader";
import AcademyCoursesHeroSection from "../../academy-comps/academy-courses-hero-section/AcademyCoursesHeroSection";
import InfiniteSlider from "../../../components/ReUsable/infinite-slider/InfiniteSlider";
import AcademyFooter from "../../academy-comps/academy-footer/AcademyFooter";

const AcademyCourses = () => {
  return (
    <div>
      <AcademyHeader />
      <AcademyCoursesHeroSection />
      <InfiniteSlider />
      <AcademyFooter />
    </div>
  );
};

export default AcademyCourses;
