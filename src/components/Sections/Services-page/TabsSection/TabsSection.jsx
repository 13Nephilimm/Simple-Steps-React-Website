import React, { useState } from "react";
import "./tabs-section.css";
import { useTranslation } from "react-i18next";

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { t } = useTranslation();

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <section className="tabs-section">
      <h2 className="tabs-heading">{t("tabsHeading")}</h2>
      <p className="tabs-description">
        {t("tabsDesc")} <br /> {t("tabsDesc2")}
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
              {t("introduction")}
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
              {t("introduction")}
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
              {t("workflow")}
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
              {t("results")}
            </span>
          </div>
        </div>
        <div className="tab-content">
          <div
            className={`tab-pane ${activeTab === 0 ? "active" : "hidden-tab"}`}
          >
            <p className="tab-text">
              {t("tabText")} <br /> {t("tabText2")}
            </p>
          </div>
          <div
            className={`tab-pane ${activeTab === 1 ? "active" : "hidden-tab"}`}
          >
            <p className="tab-text">
              {t("tabText3")} <br /> {t("tabText4")} <br /> {t("tabText5")}
            </p>
          </div>
          <div
            className={`tab-pane ${activeTab === 2 ? "active" : "hidden-tab"}`}
          >
            <p className="tab-text">
              {t("tabText6")} <br /> {t("tabText7")}
            </p>
          </div>
          <div
            className={`tab-pane ${activeTab === 3 ? "active" : "hidden-tab"}`}
          >
            <p className="tab-text">
              {t("tabText8")} <br /> {t("tabText9")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabsSection;
