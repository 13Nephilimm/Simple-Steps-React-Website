import React from "react";
import Navbar from "../../components/ReUsable/header/Navbar";
import "./blog.css";
import ComingSoon from "../../components/ReUsable/coming-soon/ComingSoon";

const Blog = () => {
  return (
    <section className="section blog-page-section">
      <Navbar />
      <ComingSoon />
      <h1 className="coming-soon">
        Coming S00n <span>)</span>
      </h1>
    </section>
  );
};

export default Blog;
