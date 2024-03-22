import React from "react";
import "./home.css";
import Navbar from "../../components/ReUsable/header/Navbar";
import HeroSection from "../../components/Sections/Home-page/HeroSection/HeroSection";
import WawdSection from "../../components/Sections/Home-page/WawdSection/WawdSection";
import InfiniteSlider from "../../components/ReUsable/infinite-slider/InfiniteSlider";
import WorkflowSection from "../../components/Sections/Home-page/WorkflowSection/WorkflowSection";
import PartnersSection from "../../components/Sections/Home-page/PartnersSection/PartnersSection";
import BlogSection from "../../components/Sections/Home-page/BlogSection/BlogSection";
import NichateauSection from "../../components/Sections/Home-page/NichateauSection/NichateauSection";
import AboutSection from "../../components/Sections/Home-page/AboutSection/AboutSection";
import Footer from "../../components/ReUsable/footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <WawdSection />
      <InfiniteSlider />
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
