import React from "react";
import "./content.css";
import ServTemplate from "../../components/ReUsable/services-template/ServTemplate";
import Navbar from "../../components/ReUsable/header/Navbar";
import Footer from "../../components/ReUsable/footer/Footer";
import ContactFormSection from "../../components/Sections/Contact-page/ContactFormSection/ContactFormSection";
import InfiniteSlider from "../../components/ReUsable/infinite-slider/InfiniteSlider";

const Content = () => {
  const btnArray = [
    "Determining the content of posts",
    "Subscription of one month plan - calendar",
    "Creation of copy and graphic works",
  ];

  const imgArray = ["./img/content-single.png"];

  return (
    <div>
      <Navbar />
      <ServTemplate
        headingOne={"Content creation"}
        descOne={`We specialize in creating compelling copy and modern visual content to present your product in the best possible way. Our goal is to captivate your audience with engaging narratives and eye-catching imagery, ensuring that your product grabs attention and connects with potential customers.`}
        statOne={"100+"}
        statOneHeading={"Clients"}
        includeHeading={
          "Constantly updated content indicates the credibility of the business"
        }
        descTwo={
          "Content is a static or dynamic post on a social network - photo, video. In order for the user to perceive you as an effective and active brand, it is necessary that the content created by you constantly responds to current processes."
        }
        descThree={
          "After defining the audience, we predetermine the content of the posts and create a calendar in which we write a detailed plan for a month. This allows us to make the work process completely transparent for our customers."
        }
        btns={btnArray}
        imgs={imgArray}
      />
      <ContactFormSection formId={"content creation page"} />
      <InfiniteSlider textColor={"#0000fe"} />
      <Footer />
    </div>
  );
};

export default Content;
