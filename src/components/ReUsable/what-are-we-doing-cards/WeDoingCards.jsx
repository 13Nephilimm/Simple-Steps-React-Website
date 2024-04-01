import React, { useState, useEffect } from "react";
import "./wedoingcards.css";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

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

  if (isMobile) {
    return (
      <div className="we-doing-container">
        <div className="we-doing-card card-1">
          <h2 className="card-heading">Branding</h2>
          <div className="card-body">
            <p className="card-description">
              Designing your business logo and brand book, and incorporating
              them into printed materials and souvenirs.
            </p>
            <Link to="#">
              <FaArrowRight className="card-arrow" />
            </Link>
          </div>
        </div>
        <div className="we-doing-card card-2">
          <h2 className="card-heading">Management of social networks</h2>
          <div className="card-body">
            <p className="card-description">
              Professional management of facebook and instagram pages, planning
              of paid advertising campaigns and monitoring of results.
            </p>
            <Link to="#">
              <FaArrowRight className="card-arrow" />
            </Link>
          </div>
        </div>
        <div className="we-doing-card card-3">
          <h2 className="card-heading">Creating a marketing strategy</h2>
          <div className="card-body">
            <p className="card-description">
              We will craft a tailored marketing strategy for your business,
              prioritizing your interests and market needs for maximum
              effectiveness.
            </p>
            <Link to="#">
              <FaArrowRight className="card-arrow" />
            </Link>
          </div>
        </div>
        <div className="we-doing-card card-4">
          <h2 className="card-heading">Content creation</h2>
          <div className="card-body">
            <p className="card-description">
              Creating creative copy and modern visuals to showcase your product
              at its finest.
            </p>
            <Link to="#">
              <FaArrowRight className="card-arrow" />
            </Link>
          </div>
        </div>
        <div className="we-doing-card card-5">
          <h2 className="card-heading">Production</h2>
          <div className="card-body">
            <p className="card-description">
              High-quality photo and video production services for your product,
              from capture to processing.
            </p>
            <Link to="#">
              <FaArrowRight className="card-arrow" />
            </Link>
          </div>
        </div>
        <div className="we-doing-card card-6">
          <h2 className="card-heading">Website Development</h2>
          <div className="card-body">
            <p className="card-description">
              Creating a website for your business with WordPress and other
              modern technologies.
            </p>
            <Link to="#">
              <FaArrowRight className="card-arrow" />
            </Link>
          </div>
        </div>
        <div className="we-doing-card card-7">
          <h2 className="card-heading">Brand Audit</h2>
          <div className="card-body">
            <p className="card-description">
              Offering a brand audit for different platforms, which involves a
              meticulous review of your campaigns, targeting, creatives
            </p>
            <Link to="#">
              <FaArrowRight className="card-arrow" />
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="we-doing-container">
        <div className="we-doing-card card-1">
          <h2 className="card-heading">Branding</h2>
          <div className="card-body">
            <p className="card-description">
              Designing your business logo and brand book, and incorporating
              them into printed materials and souvenirs.
            </p>
            <Link to={"/branding"}>
              <FaArrowRight className="card-arrow" />
            </Link>
          </div>
        </div>
        <div className="we-doing-cards">
          <div className="we-doing-card we-doing-double we-doing-double-upper">
            <h2 className="card-heading">Brand Audit</h2>
            <div className="card-body">
              <p className="card-description">
                Offering a brand audit for different platforms, which involves a
                meticulous review of your campaigns, targeting, creatives
              </p>
              <Link to="/brand-audit">
                <FaArrowRight className="card-arrow" />
              </Link>
            </div>
          </div>
          <div className="we-doing-card we-doing-double we-doing-double-lower">
            <h2 className="card-heading">Management of social networks</h2>
            <div className="card-body">
              <p className="card-description">
                High-quality photo and video production services for your
                product, from capture to processing.
              </p>
              <Link to="/management">
                <FaArrowRight className="card-arrow" />
              </Link>
            </div>
          </div>
        </div>
        <div className="we-doing-card card-3">
          <h2 className="card-heading">Creating a marketing strategy</h2>
          <div className="card-body">
            <p className="card-description">
              We will craft a tailored marketing strategy for your business,
              prioritizing your interests and market needs for maximum
              effectiveness.
            </p>
            <Link to="/marketing">
              <FaArrowRight className="card-arrow" />
            </Link>
          </div>
        </div>
        <div className="we-doing-cards">
          <div className="we-doing-card we-doing-double we-doing-double-upper">
            <h2 className="card-heading">Content creation</h2>
            <div className="card-body">
              <p className="card-description">
                Creating creative copy and modern visuals to showcase your
                product at its finest.
              </p>
              <Link to="/content">
                <FaArrowRight className="card-arrow" />
              </Link>
            </div>
          </div>
          <div className="we-doing-card we-doing-double we-doing-double-lower">
            <h2 className="card-heading">videography / photography</h2>
            <div className="card-body">
              <p className="card-description">
                High-quality photo and video production services for your
                product, from capture to processing.
              </p>
              <Link to="/production">
                <FaArrowRight className="card-arrow" />
              </Link>
            </div>
          </div>
        </div>
        <div className="we-doing-card card-4">
          <h2 className="card-heading">Website Development</h2>
          <div className="card-body">
            <p className="card-description">
              Creating a website for your business with WordPress and other
              modern technologies.
            </p>
            <Link to="/web-development">
              <FaArrowRight className="card-arrow" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
};

export default WeDoingCards;
