import React from "react";
import "./production.css";
import ServTemplate from "../../components/ReUsable/services-template/ServTemplate";
import Header from "../../components/ReUsable/header/Header";
import Footer from "../../components/ReUsable/footer/Footer";
import ContactFormSection from "../../components/Sections/Contact-page/ContactFormSection/ContactFormSection";
import InfiniteSlider from "../../components/ReUsable/infinite-slider/InfiniteSlider";

const Production = () => {
  const btnArray = ["Create a brief", "Set arrangement", "video"];

  const imgArray = ["./img/production-single.png"];

  return (
    <div>
      <Header />
      <ServTemplate
        headingOne={"videography / photography"}
        descOne={`Providing professional photo and video shooting services, we meticulously process visuals to ensure the highest quality. From capturing precious moments to refining them to perfection, we bring your vision to life with expertise and precision.`}
        statOne={"100+"}
        statOneHeading={"Clients"}
        includeHeading={
          "A professionally edited photo/video emphasizes the quality and credibility of the business."
        }
        descTwo={
          "The customer must see that the task of the business is to perform every detail professionally. The visual aspect indicates the quality of service."
        }
        descThree={
          "We offer professional photo/video shooting. The photos taken are processed and placed in the form of posts on social networks. We create a characteristic style for each product, according to which the set is organized"
        }
        btns={btnArray}
        imgs={imgArray}
      />
      <ContactFormSection formId={"production page"} />
      <InfiniteSlider textColor={"#0000fe"} />
      <Footer />
    </div>
  );
};

export default Production;
