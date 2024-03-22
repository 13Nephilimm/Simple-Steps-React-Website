import React from "react";
import "./workflow-section.css";

const WorkflowSection = () => {
  return (
    <section className="section section-workflow">
      <h2 className="workflow-heading">Our workfl0w</h2>
      <p className="workflow-description">
        Our work process consists of several stages. Every project goes through
        each of <br /> these steps to arrive at the outcome with the right
        ambitions and expectations.
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
  );
};

export default WorkflowSection;
