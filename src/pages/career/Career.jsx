import React from "react";
import Navbar from "../../components/Navbar";
import ComingSoon from "../../components/coming-soon/ComingSoon";
import "./career.css";

const Career = () => {
  return (
    <section className="section career-section">
      <Navbar />
      <ComingSoon />
      <h1 className="coming-soon career-heading">
        Coming S00n <span>)</span>
      </h1>
    </section>
  );
};

export default Career;
