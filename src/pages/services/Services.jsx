import React from "react";
import Header from "../../components/ReUsable/header/Header";
import ServicesSection from "../../components/Sections/Services-page/ServicesSection/ServicesSection";
import InfiniteSlidersSection from "../../components/Sections/Services-page/InfiniteSlidersSection/InfiniteSlidersSection";
import TabsSection from "../../components/Sections/Services-page/TabsSection/TabsSection";
import ServicesCategoriesSection from "../../components/Sections/Services-page/ServicesCategoriesSection/ServicesCategoriesSection";
import Footer from "../../components/ReUsable/footer/Footer";
import "./services.css";

const Services = () => {
  return (
    <>
      <Header />
      <ServicesSection />
      <InfiniteSlidersSection />
      <TabsSection />
      <ServicesCategoriesSection />
      <Footer />
    </>
  );
};

export default Services;
