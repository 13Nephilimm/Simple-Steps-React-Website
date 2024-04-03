import React from "react";
import "./management.css";
import ServTemplate from "../../components/ReUsable/services-template/ServTemplate";
import Header from "../../components/ReUsable/header/Header";
import Footer from "../../components/ReUsable/footer/Footer";
import ContactFormSection from "../../components/Sections/Contact-page/ContactFormSection/ContactFormSection";
import InfiniteSlider from "../../components/ReUsable/infinite-slider/InfiniteSlider";

const Management = () => {
  const btnArray = [
    `Full holding of "page".`,
    "Placement of posts",
    "Schedule/run ads",
  ];

  const imgArray = ["./img/management-single.png"];

  return (
    <div>
      <Header />
      <ServTemplate
        headingOne={"Management of social networks"}
        descOne={`We expertly handle your Facebook and Instagram pages, meticulously plan targeted paid advertising campaigns, and closely monitor outcomes for optimal performance. Trust us to elevate your social media presence and drive meaningful engagement with your audience.`}
        statOne={"100+"}
        statTwo={"50+"}
        statThree={"30+"}
        statOneHeading={"Clients"}
        statTwoHeading={"UI/UX Design"}
        statThreeHeading={"Website"}
        includeHeading={
          "A good social network is the key to the success of your business"
        }
        descTwo={
          "For the success of a business, it is not enough just to be known or to conduct sales correctly. In order to gain customer trust and maintain stability in the market, it is necessary to establish a brand identity that will be positively remembered by customers. We create Facebook and Instagram pages tailored to the user's interests and needs, which involves managing both the technical and the content part."
        }
        btns={btnArray}
        imgs={imgArray}
      />
      <ContactFormSection formId={"management of social networks page"} />
      <InfiniteSlider textColor={"#0000fe"} />
      <Footer />
    </div>
  );
};

export default Management;
