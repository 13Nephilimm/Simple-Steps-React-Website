import React from "react";
import "./blog-section.css";

const BlogSection = () => {
  return (
    <section className="section blog-section">
      <h2 className="blogs-heading">Blogs</h2>
      <div className="blog-container">
        <div className="single-blog">
          <div className="blog-img-box">
            <img src="./img/blog-test.png" alt="blog-thumbnail" />
          </div>
          <div className="blog-heading-box">
            <h3 className="blog-heading">In the Waves of the Shining Sun</h3>
          </div>
        </div>
        <div className="single-blog">
          <div className="blog-img-box">
            <img src="./img/blog-test.png" alt="blog-thumbnail" />
          </div>
          <div className="blog-heading-box">
            <h3 className="blog-heading">In the Waves of the Shining Sun</h3>
          </div>
        </div>
        <div className="single-blog single-blog-3">
          <div className="blog-img-box">
            <img src="./img/blog-test.png" alt="blog-thumbnail" />
          </div>
          <div className="blog-heading-box">
            <h3 className="blog-heading">In the Waves of the Shining Sun</h3>
          </div>
        </div>
      </div>
      <p className="see-more">See more</p>
    </section>
  );
};

export default BlogSection;
