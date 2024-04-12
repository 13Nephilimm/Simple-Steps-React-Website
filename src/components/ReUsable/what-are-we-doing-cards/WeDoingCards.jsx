import React, { useState, useEffect } from "react";
import "./wedoingcards.css";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const WeDoingCards = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 576);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 576);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { t } = useTranslation();

  if (isMobile) {
    return (
      <div className="we-doing-container">
        <Link to={"/branding"}>
          <div className="we-doing-card card-1">
            <h2 className="card-heading">{t("branding")}</h2>
            <div className="card-body">
              <p className="card-description">{t("brandingText")}</p>
              <FaArrowRight className="card-arrow" />
            </div>
          </div>
        </Link>
        <Link to="/management">
          <div className="we-doing-card card-2">
            <h2 className="card-heading">{t("managementCardHeading")}</h2>
            <div className="card-body">
              <p className="card-description">{t("managementText")}</p>
              <FaArrowRight className="card-arrow" />
            </div>
          </div>
        </Link>
        <Link to="/marketing">
          <div className="we-doing-card card-3">
            <h2 className="card-heading">{t("strategyHeading")}</h2>
            <div className="card-body">
              <p className="card-description">{t("strategyText")}</p>
              <FaArrowRight className="card-arrow" />
            </div>
          </div>
        </Link>
        <Link to="/content">
          <div className="we-doing-card card-4">
            <h2 className="card-heading">{t("contentCreation")}</h2>
            <div className="card-body">
              <p className="card-description">{t("contentText")}</p>
              <FaArrowRight className="card-arrow" />
            </div>
          </div>
        </Link>
        <Link to="/production">
          <div className="we-doing-card card-5">
            <h2 className="card-heading">{t("videoPhoto")}</h2>
            <div className="card-body">
              <p className="card-description">{t("videoPhotoText")}</p>
              <FaArrowRight className="card-arrow" />
            </div>
          </div>
        </Link>
        <Link to="/web-development">
          <div className="we-doing-card card-6">
            <h2 className="card-heading">{t("webDevHeading")}</h2>
            <div className="card-body">
              <p className="card-description">{t("webDevText")}</p>
              <FaArrowRight className="card-arrow" />
            </div>
          </div>
        </Link>
        <Link to="/brand-audit" className="card-7">
          <div className="we-doing-card card-7">
            <h2 className="card-heading">{t("BrandAudit")}</h2>
            <div className="card-body">
              <p className="card-description">{t("BrandAuditText")}</p>
              <FaArrowRight className="card-arrow" />
            </div>
          </div>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="we-doing-container">
        <Link to={"/branding"}>
          <div className="we-doing-card card-1">
            <h2 className="card-heading">{t("branding")}</h2>
            <div className="card-body">
              <p className="card-description">{t("brandingText")}</p>
              <FaArrowRight className="card-arrow" />
            </div>
          </div>
        </Link>
        <div className="we-doing-cards">
          <Link to="/brand-audit">
            <div className="we-doing-card we-doing-double we-doing-double-upper">
              <h2 className="card-heading">{t("BrandAudit")}</h2>
              <div className="card-body">
                <p className="card-description">{t("BrandAuditText")}</p>
                <FaArrowRight className="card-arrow" />
              </div>
            </div>
          </Link>
          <Link to="/management">
            <div className="we-doing-card we-doing-double we-doing-double-lower">
              <h2 className="card-heading">{t("managementCardHeading")}</h2>
              <div className="card-body">
                <p className="card-description">{t("managementText")}</p>
                <FaArrowRight className="card-arrow" />
              </div>
            </div>
          </Link>
        </div>
        <Link to="/marketing">
          <div className="we-doing-card card-3">
            <h2 className="card-heading">{t("strategyHeading")}</h2>
            <div className="card-body">
              <p className="card-description">{t("strategyText")}</p>
              <FaArrowRight className="card-arrow" />
            </div>
          </div>
        </Link>
        <div className="we-doing-cards">
          <Link to="/content">
            <div className="we-doing-card we-doing-double we-doing-double-upper">
              <h2 className="card-heading">{t("contentCreation")}</h2>
              <div className="card-body">
                <p className="card-description">{t("contentText")}</p>
                <FaArrowRight className="card-arrow" />
              </div>
            </div>
          </Link>
          <Link to="/production">
            <div className="we-doing-card we-doing-double we-doing-double-lower">
              <h2 className="card-heading">{t("videoPhoto")}</h2>
              <div className="card-body">
                <p className="card-description">{t("videoPhotoText")}</p>
                <FaArrowRight className="card-arrow" />
              </div>
            </div>
          </Link>
        </div>
        <Link to="/web-development">
          <div className="we-doing-card card-4">
            <h2 className="card-heading">{t("webDevHeading")}</h2>
            <div className="card-body">
              <p className="card-description">{t("webDevText")}</p>
              <FaArrowRight className="card-arrow" />
            </div>
          </div>
        </Link>
      </div>
    );
  }
};

export default WeDoingCards;
