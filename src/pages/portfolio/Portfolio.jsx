import React from "react";
import "./portfolio.css";
import Navbar from "../../components/ReUsable/header/Navbar";
import PortfolioSection from "../../components/Sections/Portfolio-page/PortfolioSection/PortfolioSection";
import Footer from "../../components/ReUsable/footer/Footer";

const Portfolio = () => {
  return (
    <div>
      <Navbar />
      <PortfolioSection />
      <Footer />
    </div>
  );
};

export default Portfolio;
