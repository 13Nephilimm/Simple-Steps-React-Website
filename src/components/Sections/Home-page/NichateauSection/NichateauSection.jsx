import React from "react";
import "./nichateau-section.css";

const NichateauSection = () => {
  return (
    <section className="section nichateau-section">
      <div className="nichateau-container">
        <div className="nichateau-text-box">
          <h2 className="our-projects-heading">One of our favorite projects</h2>
          <h3 className="nichateau-heading">Nichateau</h3>
          <p className="nichateau-description">
            Wine as a part of history, <br /> traditional dishes as a part of
            culture, vineyards as a part of nature, <br /> and cellars as a part
            of grape house-we took all the delicious details <br /> and created
            the taste of Georgian culture under the name of <br /> Nichateau
          </p>
          <h3 className="nichateau-sub-heading">Winery and more</h3>
        </div>
        <div className="nichateau-img-box">
          <img src="./img/nichateau-img.png" alt="nichateau-img" />
        </div>
      </div>
      <p className="see-more">See more</p>
    </section>
  );
};

export default NichateauSection;
