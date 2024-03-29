import React from "react";
import "./wwa-section.css";

const WwaSection = () => {
  return (
    <section className="section who-we-are-section">
      <div className="who-we-are-container">
        <div className="who-we-are-text-box">
          <h2 className="about-heading-1">Who are we?</h2>
          <p className="about-text-1">
            SIMPLE STEPS officially appeared on the Georgian market on February
            15, 2021. Our initial goal was to support startups in social
            networks, so that their interesting ventures do not remain
            unnoticed, which is impossible without effective advertising. Today,
            our company already helps many well-known businesses to take the
            right marketing steps. Our main distinguishing feature is an
            individual approach to projects. We thoroughly study the interests
            of each customer, their goals, and accordingly, we create strategies
            tailored to them. Supporting start-ups and interesting ideas remains
            one of our main priorities
          </p>
        </div>
        <div className="our-goal-text-box">
          <h2 className="about-heading-2">Our goal</h2>
          <p className="about-text-2">
            Our aim is to assist companies in reaching higher levels of success,
            which is much easier with our team. If you've ever wondered, 'How
            can I increase my brand's visibility?' then our goal is to support
            you and your business in the world of marketing. To take easy steps
            towards great success, we offer the following services: <br />{" "}
            Creating a marketing strategy / Management of social networks /
            Content creation / Production Branding
          </p>
        </div>
      </div>
    </section>
  );
};

export default WwaSection;
