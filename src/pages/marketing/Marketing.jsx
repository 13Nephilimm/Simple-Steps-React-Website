import React from "react";
import "./marketing.css";
import ServTemplate from "../../components/ReUsable/services-template/ServTemplate";
import Navbar from "../../components/ReUsable/header/Navbar";
import Footer from "../../components/ReUsable/footer/Footer";
import ContactFormSection from "../../components/Sections/Contact-page/ContactFormSection/ContactFormSection";
import InfiniteSlider from "../../components/ReUsable/infinite-slider/InfiniteSlider";

const Marketing = () => {
  const btnArray = [
    "Competitors study",
    "Defining content directions",
    "Target audience selection/targeting",
    "Planning of advertising campaigns",
    "Brand Guideline",
    "Brand Analytic",
  ];

  return (
    <div>
      <Navbar />
      <ServTemplate
        headingOne={"Creating a marketing strategy"}
        descOne={`We create tailored solutions to meet your business needs, ensuring maximum effectiveness and impact. Our approach is customized to address your unique challenges, delivering results that drive your business forward.`}
        statOne={"100+"}
        statOneHeading={"Clients"}
        includeHeading={
          "A marketing strategy is the first step to great success"
        }
        descTwo={
          "A marketing strategy is based on the company's goals, the study of its competitors and the definition of potential customers. A marketing strategy is an action plan for a business."
        }
        descThree={
          "In the process of developing a marketing strategy, we will study the market and competitors. We determine who is interested in a particular product in order to deliver information to the right people. After determining the audience, we plan campaigns, posts, graphic works tailored to the target group, which give the best results."
        }
        btns={btnArray}
      />
      <ContactFormSection formId={"creating a marketing strategy"} />
      <InfiniteSlider textColor={"#0000fe"} />
      <Footer />
    </div>
  );
};

export default Marketing;
