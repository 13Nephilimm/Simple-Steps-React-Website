import React from "react";
import "./partnersorbit.css";

const PartnersOrbit = () => {
  return (
    <div className="partners-orbit">
      <div className="partners-center-circle partners-circle">
        <img src="./img/nav-logo.png" alt="logo" />
      </div>
      <div className="partners-line-center-vertical"></div>
      <div className="partners-line-center-horizontal"></div>
      <div className="partners-line-diagonal-1"></div>
      <div className="partners-line-diagonal-2"></div>
      <div className="partners-circle partners-circle-1"></div>
      <div className="partners-circle partners-circle-2">
        <div className="partners-planet partners-planet-1">
          <img src="./img/gepha.png" alt="logo" />
        </div>
        <div className="partners-planet partners-planet-2">
          <img src="./img/naturveli.png" alt="logo" className="test" />
        </div>
      </div>
      <div className="partners-circle partners-circle-3">
        <div className="partners-planet partners-planet-3">
          <img src="./img/tresor.png" alt="logo" />
        </div>
        <div className="partners-planet partners-planet-4">
          <img src="./img/aim.png" alt="logo" />
        </div>
        <div className="partners-planet partners-planet-5">
          <img src="./img/radar.png" alt="logo" />
        </div>
        <div className="partners-planet partners-planet-6">
          <img src="./img/nichateau.png" alt="logo" />
        </div>
      </div>
      <div className="partners-circle partners-circle-4">
        <div className="partners-planet partners-planet-7">
          <img src="./img/renault.png" alt="logo" />
        </div>
        <div className="partners-planet partners-planet-8">
          <img src="./img/odahouse.png" alt="logo" />
        </div>
        <div className="partners-planet partners-planet-9">
          <img src="./img/trapezarea.png" alt="logo" />
        </div>
      </div>
      <div className="partners-circle partners-circle-5">
        <div className="partners-planet partners-planet-10">
          <img src="./img/cumlaude.png" alt="logo" />
        </div>
        <div className="partners-planet partners-planet-11">
          <img src="./img/natural.png" alt="logo" />
        </div>
        <div className="partners-planet partners-planet-12">
          <img src="./img/uriage.png" alt="logo" />
        </div>
        <div className="partners-planet partners-planet-13">
          <img src="./img/offerzen.png" alt="logo" />
        </div>
      </div>
      <div className="partners-circle partners-circle-6"></div>
      <div className="partners-circle partners-circle-7"></div>
    </div>
  );
};

export default PartnersOrbit;
