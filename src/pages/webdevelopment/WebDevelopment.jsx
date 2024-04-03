import React from "react";
import "./web-development.css";
import ServTemplate from "../../components/ReUsable/services-template/ServTemplate";
import Header from "../../components/ReUsable/header/Header";
import Footer from "../../components/ReUsable/footer/Footer";
import ContactFormSection from "../../components/Sections/Contact-page/ContactFormSection/ContactFormSection";
import InfiniteSlider from "../../components/ReUsable/infinite-slider/InfiniteSlider";

const WebDevelopment = () => {
  const btnArray = [
    "UI/UX DESIGN",
    "ux RESEARCH",
    "WEB-SITE",
    "Determining the complexity of the site",
    "Evaluation of functionality",
    "Writing technical tasks",
  ];

  const imgArray = ["./img/web-single.png"];

  return (
    <div>
      <Header />
      <ServTemplate
        headingOne={"UI/UX & web-development"}
        descOne={`A website offers customers a convenient way to learn about a company and its offerings without the need for physical visits or phone calls. This accessibility can lead to higher customer engagement and satisfaction.`}
        statOne={"100+"}
        statTwo={"50+"}
        statThree={"30+"}
        statOneHeading={"Clients"}
        statTwoHeading={"UI/UX DESIGN"}
        statThreeHeading={"Website"}
        includeHeading={
          "A website is a powerful marketing tool for a business."
        }
        descTwo={
          "A professionally designed website will instill confidence in potential customers in the products or services your business offers. Through the website, the user will easily find out all the information he needs in one place, be it a list of products and services, contact number, location, or working hours."
        }
        descThree={
          "We create a perfect website tailored to business goals and interests that will simplify the user experience."
        }
        btns={btnArray}
        imgs={imgArray}
      />
      <ContactFormSection formId={"web development page"} />
      <InfiniteSlider textColor={"#0000fe"} />
      <Footer />
    </div>
  );
};

export default WebDevelopment;
