import React from "react";
import Header from "../../components/ReUsable/header/Header";
import "./blog.css";
import ComingSoon from "../../components/ReUsable/coming-soon/ComingSoon";

const Blog = () => {
  return (
    <section className="section blog-page-section">
      <Header />
      <ComingSoon />
      <h1 className="coming-soon">
        Coming S00n <span>)</span>
      </h1>
    </section>
  );
};

export default Blog;
