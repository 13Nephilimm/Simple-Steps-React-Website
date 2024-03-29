import React, { useState } from "react";
import "./tabs-section.css";

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <section className="tabs-section">
      <h2 className="tabs-heading">Our Workflow</h2>
      <p className="tabs-description">
        Our work process consists of several stages. Every project goes through
        each of these <br /> steps to arrive at the outcome with the right
        ambitions and expectations.
      </p>

      <div className="tabs">
        <div className="tab-header">
          <div className="tab-border">
            <div
              className={`tab-header-item tab-header-item-1 ${
                activeTab === 0 ? "active" : ""
              }`}
              onClick={() => handleTabClick(0)}
            >
              <img
                src="./img/tabs-1.png"
                alt="tab-image"
                className="tabs-image"
              />
            </div>
            <span
              className={`tab-name ${activeTab === 0 ? "tab-name-active" : ""}`}
            >
              Introduction
            </span>
          </div>
          <div className="tab-border">
            <div
              className={`tab-header-item tab-header-item-2 ${
                activeTab === 1 ? "active" : ""
              }`}
              onClick={() => handleTabClick(1)}
            >
              <img
                src="./img/tabs-2.png"
                alt="tab-image"
                className="tabs-image"
              />
            </div>
            <span
              className={`tab-name ${activeTab === 1 ? "tab-name-active" : ""}`}
            >
              Strategy
            </span>
          </div>
          <div className="tab-border">
            <div
              className={`tab-header-item tab-header-item-3 ${
                activeTab === 2 ? "active" : ""
              }`}
              onClick={() => handleTabClick(2)}
            >
              <img
                src="./img/tabs-3.png"
                alt="tab-image"
                className="tabs-image"
              />
            </div>
            <span
              className={`tab-name ${activeTab === 2 ? "tab-name-active" : ""}`}
            >
              Workflow
            </span>
          </div>
          <div className="tab-border">
            <div
              className={`tab-header-item ${activeTab === 3 ? "active" : ""}`}
              onClick={() => handleTabClick(3)}
            >
              <img
                src="./img/tabs-4.png"
                alt="tab-image"
                className="tabs-image"
              />
            </div>
            <span
              className={`tab-name ${activeTab === 3 ? "tab-name-active" : ""}`}
            >
              Results
            </span>
          </div>
        </div>
        <div className="tab-content">
          <div
            className={`tab-pane ${activeTab === 0 ? "active" : "hidden-tab"}`}
          >
            <p className="tab-text">
              We plan to meet with the customer, get to know his business, try
              to <br /> understand his interests and wishes as much as possible
            </p>
          </div>
          <div
            className={`tab-pane ${activeTab === 1 ? "active" : "hidden-tab"}`}
          >
            <p className="tab-text">
              A thorough product/business study begins, along with relevant
              market and <br /> competitor research, which is why a strategy is
              written for what type of <br /> content and advertising we will
              work with for this business.
            </p>
          </div>
          <div
            className={`tab-pane ${activeTab === 2 ? "active" : "hidden-tab"}`}
          >
            <p className="tab-text">
              The work process begins: we plan photo/video shoots, publish
              posts, <br /> advertise the brand on social networks
            </p>
          </div>
          <div
            className={`tab-pane ${activeTab === 3 ? "active" : "hidden-tab"}`}
          >
            <p className="tab-text">
              We inform the customer of the obtained results and send a weekly
              or monthly <br /> report
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabsSection;
