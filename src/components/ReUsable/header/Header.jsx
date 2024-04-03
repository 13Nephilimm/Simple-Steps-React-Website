import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [active, setActive] = useState("nav-menu");
  const [toggleIcon, setToggleIcon] = useState("nav-toggler");
  const [solid, setSolid] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 200) {
      setSolid(true);
    } else {
      setSolid(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  const navToggle = () => {
    active === "nav-menu"
      ? setActive("nav-menu nav-active")
      : setActive("nav-menu");

    // Toggle Icon
    toggleIcon === "nav-toggler"
      ? setToggleIcon("nav-toggler toggle")
      : setToggleIcon("nav-toggler");
  };

  return (
    <nav className={solid ? "nav solid" : "nav"}>
      <Link>
        <img src="./img/nav-logo.png" alt="logo" className="nav-brand" />{" "}
      </Link>
      <ul className={active}>
        <li className="nav-item">
          <Link to={"/"} className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/about-us"} className="nav-link">
            About Us
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/services"} className="nav-link">
            Services
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/blog"} className="nav-link">
            Blog
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"#"} className="nav-link">
            Academy
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/career"} className="nav-link">
            Career
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/contact"} className="nav-link">
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/portfolio"} className="nav-link">
            Portfolio
          </Link>
        </li>
      </ul>
      <div onClick={navToggle} className={toggleIcon}>
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
      </div>
    </nav>
  );
};

export default Header;
