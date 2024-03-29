import React from "react";
import "./infiniteslider.css";

const InfiniteSlider = ({
  textColor,
  backgroundColor,
  rotation,
  position,
  top,
  left,
  translate,
  right,
  width,
  thickness,
}) => {
  return (
    <div
      className="slider"
      style={{
        backgroundColor: backgroundColor,
        transform: `rotate(${rotation}deg) translateX(${translate})`,
        position: position,
        top: top,
        left: left,
        right: right,
        width: width,
        height: thickness,
      }}
    >
      <div className="slide-track">
        <div className="slide">
          <h3 className="slider-text" style={{ color: textColor }}>
            Let's create something new
          </h3>
          <img src="./img/nav-logo.png" alt="logo" className="slider-logo" />
        </div>
        <div className="slide">
          <h3 className="slider-text" style={{ color: textColor }}>
            Let's create something new
          </h3>
          <img src="./img/nav-logo.png" alt="logo" className="slider-logo" />
        </div>
        <div className="slide">
          <h3 className="slider-text" style={{ color: textColor }}>
            Let's create something new
          </h3>
          <img src="./img/nav-logo.png" alt="logo" className="slider-logo" />
        </div>
        <div className="slide">
          <h3 className="slider-text" style={{ color: textColor }}>
            Let's create something new
          </h3>
          <img src="./img/nav-logo.png" alt="logo" className="slider-logo" />
        </div>
        <div className="slide">
          <h3 className="slider-text" style={{ color: textColor }}>
            Let's create something new
          </h3>
          <img src="./img/nav-logo.png" alt="logo" className="slider-logo" />
        </div>
        <div className="slide">
          <h3 className="slider-text" style={{ color: textColor }}>
            Let's create something new
          </h3>
          <img src="./img/nav-logo.png" alt="logo" className="slider-logo" />
        </div>
        <div className="slide">
          <h3 className="slider-text" style={{ color: textColor }}>
            Let's create something new
          </h3>
          <img src="./img/nav-logo.png" alt="logo" className="slider-logo" />
        </div>
        <div className="slide">
          <h3 className="slider-text" style={{ color: textColor }}>
            Let's create something new
          </h3>
          <img src="./img/nav-logo.png" alt="logo" className="slider-logo" />
        </div>
        <div className="slide">
          <h3 className="slider-text" style={{ color: textColor }}>
            Let's create something new
          </h3>
          <img src="./img/nav-logo.png" alt="logo" className="slider-logo" />
        </div>

        <div className="slide">
          <h3 className="slider-text" style={{ color: textColor }}>
            Let's create something new
          </h3>
          <img src="./img/nav-logo.png" alt="logo" className="slider-logo" />
        </div>
        <div className="slide">
          <h3 className="slider-text" style={{ color: textColor }}>
            Let's create something new
          </h3>
          <img src="./img/nav-logo.png" alt="logo" className="slider-logo" />
        </div>
        <div className="slide">
          <h3 className="slider-text" style={{ color: textColor }}>
            Let's create something new
          </h3>
          <img src="./img/nav-logo.png" alt="logo" className="slider-logo" />
        </div>
        <div className="slide">
          <h3 className="slider-text" style={{ color: textColor }}>
            Let's create something new
          </h3>
          <img src="./img/nav-logo.png" alt="logo" className="slider-logo" />
        </div>
        <div className="slide">
          <h3 className="slider-text" style={{ color: textColor }}>
            Let's create something new
          </h3>
          <img src="./img/nav-logo.png" alt="logo" className="slider-logo" />
        </div>
        <div className="slide">
          <h3 className="slider-text" style={{ color: textColor }}>
            Let's create something new
          </h3>
          <img src="./img/nav-logo.png" alt="logo" className="slider-logo" />
        </div>
        <div className="slide">
          <h3 className="slider-text" style={{ color: textColor }}>
            Let's create something new
          </h3>
          <img src="./img/nav-logo.png" alt="logo" className="slider-logo" />
        </div>
        <div className="slide">
          <h3 className="slider-text" style={{ color: textColor }}>
            Let's create something new
          </h3>
          <img src="./img/nav-logo.png" alt="logo" className="slider-logo" />
        </div>
        <div className="slide">
          <h3 className="slider-text" style={{ color: textColor }}>
            Let's create something new
          </h3>
          <img src="./img/nav-logo.png" alt="logo" className="slider-logo" />
        </div>
      </div>
    </div>
  );
};

export default InfiniteSlider;
