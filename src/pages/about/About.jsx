import React from "react";
import Navbar from "../../components/Navbar";
import AboutOrbit from "../../components/about-orbit/AboutOrbit";
import InfiniteSlider from "../../components/infinite-slider/InfiniteSlider";
import Footer from "../../components/footer/Footer";
import "./about.css";

const About = () => {
  return (
    <>
      <Navbar />
      <AboutOrbit />
      <section className="section who-we-are-section">
        <div className="who-we-are-container">
          <div className="who-we-are-text-box">
            <h2 className="about-heading-1">Who are we?</h2>
            <p className="about-text-1">
              SIMPLE STEPS officially appeared on the Georgian market on
              February 15, 2021. Our initial goal was to support startups in
              social networks, so that their interesting ventures do not remain
              unnoticed, which is impossible without effective advertising.
              Today, our company already helps many well-known businesses to
              take the right marketing steps. Our main distinguishing feature is
              an individual approach to projects. We thoroughly study the
              interests of each customer, their goals, and accordingly, we
              create strategies tailored to them. Supporting start-ups and
              interesting ideas remains one of our main priorities
            </p>
          </div>
          <div className="who-we-are-img-box">
            <img src="./img/about-img-1.png" alt="about image" />
          </div>
        </div>
        <div className="our-goal-container">
          <div className="our-goal-img-box">
            <img src="./img/about-img-2.png" alt="about image" />
          </div>
          <div className="our-goal-text-box">
            <h2 className="about-heading-2">Our goal</h2>
            <p className="about-text-2">
              Our goal is to help companies achieve success, to climb to higher
              levels, which is much easier with our team. If you have ever asked
              yourself the question, "How can I make my brand known", then our
              goal is to support you and your business in the world of
              marketing. To take easy steps towards great success, we offer the
              following services: <br />{" "}
              <span className="first">Creating a marketing strategy</span>{" "}
              <br />
              <span>Management of social networks</span> <br />{" "}
              <span>Content creation</span> <br />
              <span>production</span> <br /> <span>Branding</span> <br />{" "}
              <span>Web Development</span>
            </p>
          </div>
        </div>
      </section>
      <section className="section team-section">
        <h2 className="team-heading">Our Team</h2>
        <div className="team-container">
          <div className="team-member">
            <img src="./img/team-1.png" alt="" />
          </div>
          <div className="team-member">
            <img src="./img/team-1.png" alt="" />
          </div>
          <div className="team-member">
            <img src="./img/team-1.png" alt="" />
          </div>
          <div className="team-member">
            <img src="./img/team-1.png" alt="" />
          </div>
          <div className="team-member">
            <img src="./img/team-1.png" alt="" />
          </div>
          <div className="team-member">
            <img src="./img/team-1.png" alt="" />
          </div>
          <div className="team-member">
            <img src="./img/team-1.png" alt="" />
          </div>
          <div className="team-member">
            <img src="./img/team-1.png" alt="" />
          </div>
          <div className="team-member">
            <img src="./img/team-1.png" alt="" />
          </div>
          <div className="team-member">
            <img src="./img/team-1.png" alt="" />
          </div>
          <div className="team-member">
            <img src="./img/team-1.png" alt="" />
          </div>
          <div className="team-member">
            <img src="./img/team-1.png" alt="" />
          </div>
          <div className="team-member">
            <img src="./img/team-1.png" alt="" />
          </div>
          <div className="team-member">
            <img src="./img/team-1.png" alt="" />
          </div>
          <div className="team-member">
            <img src="./img/team-1.png" alt="" />
          </div>
        </div>
        <h3 className="team-end-heading">We are looking for you!</h3>
        <h3 className="team-end-heading-2">
          Do you want to be part of the most ambitious and modern team?
        </h3>
        <a href="/contact" className="team-contact-btn">
          Contact Us
        </a>
      </section>
      <InfiniteSlider />
      <Footer />
    </>
  );
};

export default About;
