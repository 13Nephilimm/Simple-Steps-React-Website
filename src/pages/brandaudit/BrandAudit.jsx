import React from "react";
import "./brand-audit.css";
import ServTemplate from "../../components/ReUsable/services-template/ServTemplate";
import Navbar from "../../components/ReUsable/header/Navbar";
import Footer from "../../components/ReUsable/footer/Footer";
import ContactFormSection from "../../components/Sections/Contact-page/ContactFormSection/ContactFormSection";
import InfiniteSlider from "../../components/ReUsable/infinite-slider/InfiniteSlider";

const BrandAudit = () => {
  const btnArray = [
    "Page Audit Results",
    "Recommendations",
    "Implementation Support",
    "Social Media Brief",
  ];

  return (
    <div>
      <Navbar />
      <ServTemplate
        headingOne={"Brand Audit"}
        descOne={`A brand audit is a detailed review of a company's branding strategies, assets, and market presence. It helps you determine the strength of your brand together with its weaknesses or inconsistencies and opportunities for improvement and innovations.`}
        statOne={"100+"}
        statOneHeading={"Clients"}
        includeHeading={
          "A Brand Audit Improves The Visual Identity Of Your Business"
        }
        descTwo={
          "At Simple Steps, we specialize in conducting thorough brand audits with the involvement of our creative and technical teams to help businesses enhance their brand image and market positioning."
        }
        btns={btnArray}
      />
      <ContactFormSection formId={"brand audit page"} />
      <InfiniteSlider textColor={"#0000fe"} />
      <Footer />
    </div>
  );
};

export default BrandAudit;
