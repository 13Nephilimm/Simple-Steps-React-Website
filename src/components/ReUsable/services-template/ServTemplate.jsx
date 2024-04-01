import React from "react";
import "./serv-template.css";
import "../coming-soon/ComingSoon";
import ComingSoon from "../coming-soon/ComingSoon";
import InfiniteSlider from "../infinite-slider/InfiniteSlider";

const ServTemplate = ({
  headingOne,
  descOne,
  statOne,
  statOneHeading,
  statTwo,
  statTwoHeading,
  statThree,
  statThreeHeading,
  includeHeading,
  descTwo,
  descThree,
  btns,
  imgs,
}) => {
  return (
    <>
      <section className="serv-hero-section">
        <ComingSoon />
        <div className="serv-hero-container">
          <h1 className="serv-hero-heading">{headingOne}</h1>
          <p className="serv-hero-description">{descOne}</p>
          <div className="stats-container">
            <div className="stat">
              <h2 className="stat-heading">{statOne}</h2>
              <h3 className="stat-subheading">{statOneHeading}</h3>
            </div>
            <div className="stat">
              <h2 className="stat-heading">{statTwo}</h2>
              <h3 className="stat-subheading">{statTwoHeading}</h3>
            </div>
            <div className="stat">
              <h2 className="stat-heading">{statThree}</h2>
              <h3 className="stat-subheading">{statThreeHeading}</h3>
            </div>
          </div>
        </div>
      </section>
      <InfiniteSlider
        backgroundColor={"#0000FE"}
        textColor={"#fff"}
        thickness={"50px"}
      />
      <section className="benefits-section">
        <div className="serv-benefits-container">
          <h2 className="include-heading">{includeHeading}</h2>
          <p className="include-description include-description-1">{descTwo}</p>
          <p className="include-description include-description-2">
            {descThree}
          </p>
          <span className="include-span">What Include</span>
          <div className="include-container">
            {btns.map((btn) => {
              return <button className="include-btn">{btn}</button>;
            })}
          </div>
        </div>
        <div className="benefit-media-container">
          {imgs?.map((img) => {
            return <img src={img} alt="service" />;
          })}
        </div>
      </section>
    </>
  );
};

export default ServTemplate;
