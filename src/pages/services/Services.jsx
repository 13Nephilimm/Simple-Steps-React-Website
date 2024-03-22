import React from "react";
import Navbar from "../../components/ReUsable/header/Navbar";
import ComingSoon from "../../components/ReUsable/coming-soon/ComingSoon";
import Footer from "../../components/ReUsable/footer/Footer";
import InfiniteSlider from "../../components/ReUsable/infinite-slider/InfiniteSlider";
import "./services.css";

const Services = () => {
  return (
    <>
      <section className="section services-section">
        <Navbar />
        <ComingSoon />
        <div className="page-shape">
          <div className="video-shape-box">
            <video
              src="./img/services-shape.mp4"
              type="video/mp4"
              autoPlay
              loop
              muted
            ></video>
          </div>
          <h1 className="section-heading-1">
            Increase your brand <br /> awareness on social media
          </h1>
          <h1 className="section-heading-2">
            Develop the right marketing <br /> strategy for your business
          </h1>
        </div>
      </section>

      <section className="section services-categories-section">
        <div className="categories-container">
          <div className="category-container">
            <div className="categories-text-box">
              <h2 className="categories-heading">
                <span>Social media</span> management
              </h2>
              <p className="categories-text">
                Professional management of Facebook and Instagram pages,
                planning of paid advertising <br /> campaigns and monitoring of
                results
              </p>
            </div>
            <div className="categories-img-box">
              <img src="./img/services-strategy.png" alt="categories-img" />
            </div>
          </div>

          <div className="category-container">
            <div className="categories-img-box">
              <img src="./img/services-social.png" alt="categories-img" />
            </div>
            <div className="categories-text-box">
              <h2 className="categories-heading">
                marketing <span>creating a strategy</span>
              </h2>
              <p className="categories-text">
                Based on the study of the relevant market and requirements, we
                will develop the most <br /> effective marketing strategy for
                your business, where your interests will be taken into <br />
                account as much as possible.
              </p>
            </div>
          </div>

          <div className="category-container">
            <div className="categories-text-box">
              <h2 className="categories-heading">
                <span>Create</span> content
              </h2>
              <p className="categories-text">
                Creating relevant copy and modern visuals to promote your
                product at its best
              </p>
            </div>
            <div className="categories-img-box">
              <img src="./img/services-content.png" alt="categories-img" />
            </div>
          </div>

          <div className="category-container">
            <div className="categories-img-box">
              <img src="./img/services-branding.png" alt="categories-img" />
            </div>
            <div className="categories-text-box">
              <h2 className="categories-heading">Branding</h2>
              <p className="categories-text">
                Creating a logo and brand book for your business and putting it
                on printed <br /> samples and souvenirs
              </p>
            </div>
          </div>

          <div className="category-container">
            <div className="categories-text-box">
              <h2 className="categories-heading">
                <span>Web</span> development
              </h2>
              <p className="categories-text">
                Create a professional website for your business
              </p>
            </div>
            <div className="categories-img-box">
              <img src="./img/services-web.png" alt="categories-img" />
            </div>
          </div>

          <div className="category-container">
            <div className="categories-img-box">
              <img src="./img/services-prodaction.png" alt="categories-img" />
            </div>
            <div className="categories-text-box">
              <h2 className="categories-heading">Prodaction</h2>
              <p className="categories-text">
                Professional photo/video capture and processing for your product
              </p>
            </div>
          </div>
        </div>
      </section>

      <InfiniteSlider />
      <Footer />
    </>
  );
};

export default Services;
