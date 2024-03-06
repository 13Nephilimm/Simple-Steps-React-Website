import React, { useState } from "react";
import "./wedoingcards.css";

const WeDoingCards = () => {
  // const [cards, setCards] = useState(false);

  // const changeWidth = () => {
  //   if (window.innerWidth <= 576) {
  //     setCards(true);
  //   } else {
  //     setCards(false);
  //   }
  // };

  return (
    <div className="we-doing-container">
      <div className="we-doing-card card-1">
        <h2 className="card-heading">Branding</h2>
        <div className="card-body">
          <p className="card-description">
            Creating a logo and brand book for your business and putting it on
            printed samples and souvenirs
          </p>
        </div>
      </div>
      <div className="we-doing-card card-2">
        <h2 className="card-heading">Management of social networks</h2>
        <div className="card-body">
          <p className="card-description">
            Professional management of facebook and instagram pages, planning of
            paid advertising campaigns and monitoring of results
          </p>
        </div>
      </div>
      <div className="we-doing-card card-3">
        <h2 className="card-heading">Creating a marketing strategy</h2>
        <div className="card-body">
          <p className="card-description">
            Based on the study of the relevant market and requirements, we will
            develop the most effective marketing strategy for your business,
            where your interests will be taken into account as much as possible.
          </p>
        </div>
      </div>
      <div className="we-doing-cards">
        <div className="we-doing-card we-doing-double we-doing-double-upper">
          <h2 className="card-heading">Content creation</h2>
          <div className="card-body">
            <p className="card-description">
              Creating relevant copy and modern visuals to promote your product
              at its best
            </p>
          </div>
        </div>
        <div className="we-doing-card we-doing-double we-doing-double-lower">
          <h2 className="card-heading">Production</h2>
          <div className="card-body">
            <p className="card-description">
              Professional photo/video capture and processing for your product.
            </p>
          </div>
        </div>
      </div>
      <div className="we-doing-card card-4">
        <h2 className="card-heading">Website Development</h2>
        <div className="card-body">
          <p className="card-description">
            Creating a website for your business with WordPress and other modern
            technologies
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeDoingCards;
