import React from "react";
import "./introduce-section.css";

const IntroduceSection = () => {
  return (
    <section className="section introduce-section">
      <h2 className="introduce-heading">Introduce us to your business</h2>
      <h2 className="introduce-sub-heading">
        The services we offer will strengthen your position in the digital
        world, make you more competitive <br /> and help you position your brand
        correctly.
      </h2>
      <div className="introduce-categories-container">
        <button className="btn-introduce">Creating a marketing strategy</button>
        <button className="btn-introduce">Management of social networks</button>
        <button className="btn-introduce">Content creation</button>
        <button className="btn-introduce">Photo/Video</button>
        <button className="btn-introduce">branding</button>
        <button className="btn-introduce">web-development</button>
      </div>
    </section>
  );
};

export default IntroduceSection;
