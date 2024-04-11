import React from "react";
import "./workflow-section.css";
import { useTranslation } from "react-i18next";

const WorkflowSection = () => {
  const { t } = useTranslation();

  return (
    <section className="section section-workflow">
      <h2 className="workflow-heading">{t("workflowHeading")}</h2>
      <p className="workflow-description">{t("workflowDesc")}</p>
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
          <h3 className="video-heading">{t("introduction")}</h3>
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
          <h3 className="video-heading">{t("workflowStrategy")}</h3>
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
          <h3 className="video-heading">{t("workflow")}</h3>
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
          <h3 className="video-heading margin-right">{t("results")}</h3>
        </div>
      </div>
      <p className="workflow-description desc-2">{t("workflowDesc2")}</p>
    </section>
  );
};

export default WorkflowSection;
