import React from "react";
import "./portfolio.css";
import Header from "../../components/ReUsable/header/Header";
import PortfolioSection from "../../components/Sections/Portfolio-page/PortfolioSection/PortfolioSection";
import Footer from "../../components/ReUsable/footer/Footer";

const Portfolio = () => {
  return (
    <div>
      <Header />
      <PortfolioSection />
      <Footer />
    </div>
  );
};

export default Portfolio;
