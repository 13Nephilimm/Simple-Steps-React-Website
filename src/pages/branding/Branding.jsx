import React from "react";
import "./branding.css";
import ServTemplate from "../../components/ReUsable/services-template/ServTemplate";
import Header from "../../components/ReUsable/header/Header";
import Footer from "../../components/ReUsable/footer/Footer";
import ContactFormSection from "../../components/Sections/Contact-page/ContactFormSection/ContactFormSection";
import InfiniteSlider from "../../components/ReUsable/infinite-slider/InfiniteSlider";

const Branding = () => {
  const btnArray = [
    "Logo Design",
    "Moodboard",
    "Brandbook",
    "Brand Identity",
    "Brand Guideline",
    "Brand Analytic",
  ];

  const imgArray = ["./img/branding-single.png"];

  return (
    <div>
      <Header />
      <ServTemplate
        headingOne={"Branding"}
        descOne={`Branding is the process of establishing a recognizable identity and
            reputation for a product, service, company, or individual in the
            minds of consumers. It involves elements like the brand name, logo,
            design, messaging, and overall customer experience. Effective
            branding sets a product apart from competitors, creates positive
            emotions, builds trust and loyalty, and influences purchasing
            decisions. It goes beyond just visual elements to encompass the
            values,  personality, and story of the brand, shaping how it
            is perceived and remembered by  its target audience.`}
        statOne={"100+"}
        statTwo={"50+"}
        statThree={"30+"}
        statOneHeading={"Clients"}
        statTwoHeading={"Logo Designs"}
        statThreeHeading={"Brandings"}
        includeHeading={
          "Designing your business logo and brand book, and incorporating theminto printed materials and souvenirs."
        }
        descTwo={
          "Branding for a business is like naming a child. It is in this process that it is determined how the company will be introduced toa wide audience. A correctly chosen name and logo is an importantprerequisite for establishing oneself in the market."
        }
        descThree={
          "At first, we will thoroughly study the brand so that every next stepis based on it. All details, whether textual or visual, are builttaking into account the brand concept, which further strengthens theplace of a particular brand in the market, makes it unique anddistinctive."
        }
        btns={btnArray}
        imgs={imgArray}
      />
      <ContactFormSection formId={"branding page"} />
      <InfiniteSlider textColor={"#0000fe"} />
      <Footer />
    </div>
  );
};

export default Branding;
