import React from "react";
import Navbar from "../../components/Navbar";
import "./home.css";
import OrbitHero from "../../components/orbit-animations/home-page-first-orbit/OrbitHero";
import WeDoingCards from "../../components/what-are-we-doing-cards/WeDoingCards";
import InfiniteSlider from "../../components/infinite-slider/InfiniteSlider";
import PartnersOrbit from "../../components/partners-orbit/PartnersOrbit";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <section className="section hero-section">
        <h1 className="main-heading">
          develop the right marketing <br></br> strategy for your business
        </h1>
        <OrbitHero />
      </section>

      <section className="section section-what-are-we-doing">
        <h2 className="we-doing-heading">What are we doing!</h2>
        <p className="we-doing-description">
          We explore the path of your business in the digital world, <br /> make
          it competitive, create an image that will strengthen <br /> its
          position and establish it as a brand
        </p>
        <WeDoingCards />
      </section>
      <InfiniteSlider />

      <section className="section section-workflow">
        <h2 className="workflow-heading">Our workfl0w</h2>
        <p className="workflow-description">
          Our work process consists of several stages. Every project goes
          through each of <br /> these steps to arrive at the outcome with the
          right ambitions and expectations.
        </p>
        <div className="workflow-container">
          <div className="full-box">
            <div className="video-box">
              <video
                src="./img/introduction-video.mp4"
                type="video/mp4"
                autoPlay
                loop
                muted
              ></video>
            </div>
            <h3 className="video-heading">Introduction</h3>
          </div>
          <div className="full-box">
            <div className="video-box">
              <video
                src="./img/strategy-video.mp4"
                type="video/mp4"
                autoPlay
                loop
                muted
              ></video>
            </div>
            <h3 className="video-heading">Strategy</h3>
          </div>
          <div className="full-box">
            <div className="video-box">
              <video
                src="./img/workflow-video.mp4"
                type="video/mp4"
                autoPlay
                loop
                muted
              ></video>
            </div>
            <h3 className="video-heading">Workflow</h3>
          </div>
          <div className="full-box">
            <div className="video-box">
              <video
                src="./img/result-video.mp4"
                type="video/mp4"
                autoPlay
                loop
                muted
              ></video>
            </div>
            <h3 className="video-heading margin-right">Results</h3>
          </div>
        </div>
        <p className="workflow-description desc-2">
          We plan to meet with the customer, get to know his business, try to
          understand his interests <br /> and wishes as much as possible
        </p>
      </section>

      <section className="section partners-section">
        <h2 className="partners-heading">Our partners</h2>
        <PartnersOrbit />
      </section>

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

      <section className="section nichateau-section">
        <div className="nichateau-container">
          <div className="nichateau-text-box">
            <h2 className="nichateau-heading">Nichateau</h2>
            <p className="nichateau-description">
              Wine as a part of history, <br /> traditional dishes as a part of
              culture, vineyards as a part of nature, <br /> and cellars as a
              part of grape house-we took all the delicious details <br /> and
              created the taste of Georgian culture under the name of <br />{" "}
              Nichateau
            </p>
            <h3 className="nichateau-sub-heading">Winery and more</h3>
          </div>
          <div className="nichateau-img-box">
            <img src="./img/nichateau-img.png" alt="nichateau-img" />
          </div>
        </div>
        <p className="see-more">See more</p>
      </section>

      <section className="section about-section">
        <h2 className="about-heading">About Company</h2>
        <div className="about-container">
          <div className="about-img-box">
            <img src="./img/team.png" alt="about-img" />
          </div>
          <div className="about-text-box">
            <p className="about-description">
              From February 2021, the company takes care of digitalization of
              your activities The young and creative team of Simple Steps offers
              modern and customized services to customers Individual strategy
              for each project Simple steps to great success - that's what our
              team does
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
