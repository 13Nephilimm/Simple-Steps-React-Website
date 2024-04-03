import React from "react";
import "./home.css";
import Header from "../../components/ReUsable/header/Header";
import HeroSection from "../../components/Sections/Home-page/HeroSection/HeroSection";
import WawdSection from "../../components/Sections/Home-page/WawdSection/WawdSection";
import WorkflowSection from "../../components/Sections/Home-page/WorkflowSection/WorkflowSection";
import PartnersSection from "../../components/Sections/Home-page/PartnersSection/PartnersSection";
import BlogSection from "../../components/Sections/Home-page/BlogSection/BlogSection";
import NichateauSection from "../../components/Sections/Home-page/NichateauSection/NichateauSection";
import AboutSection from "../../components/Sections/Home-page/AboutSection/AboutSection";
import Footer from "../../components/ReUsable/footer/Footer";
import InfiniteSlider from "../../components/ReUsable/infinite-slider/InfiniteSlider";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <WawdSection />
      <InfiniteSlider backgroundColor={"transparent"} textColor={"#0000fe"} />
      <WorkflowSection />
      <PartnersSection />
      <BlogSection />
      <NichateauSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Home;
