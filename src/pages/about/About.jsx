import React from "react";
import "./about.css";
import Header from "../../components/ReUsable/header/Header";
import AboutOrbit from "../../components/OrbitAnimations/about-orbit/AboutOrbit";
import WwaSection from "../../components/Sections/About-page/WwaSection/WwaSection";
import TeamSection from "../../components/Sections/About-page/TeamSection/TeamSection";
import PartnersLogosSection from "../../components/Sections/About-page/PartnersLogosSection/PartnersLogosSection";
import InfiniteSlider from "../../components/ReUsable/infinite-slider/InfiniteSlider";
import Footer from "../../components/ReUsable/footer/Footer";

const About = () => {
  return (
    <>
      <Header />
      <AboutOrbit />
      <WwaSection />
      <TeamSection />
      <PartnersLogosSection />
      <InfiniteSlider backgroundColor={"transparent"} textColor={"#0000fe"} />
      <Footer />
    </>
  );
};

export default About;
