import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { I18nextProvider } from "react-i18next";
import i18n from "../../../i18next";

const Header = () => {
  const [active, setActive] = useState("nav-menu");
  const [toggleIcon, setToggleIcon] = useState("nav-toggler");
  const [solid, setSolid] = useState(false);

  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const currentLanguage = i18n.language;
    const nextLanguage = currentLanguage === "en" ? "ge" : "en";
    i18n.changeLanguage(nextLanguage);
  };

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
            {t("home")}
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/about-us"} className="nav-link">
            {t("about")}
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/services"} className="nav-link">
            {t("services")}
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/blog"} className="nav-link">
            {t("blog")}
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/academy"} className="nav-link">
            {t("academy")}
          </Link>
          {/* target="_blank" */}
        </li>
        <li className="nav-item">
          <Link to={"/career"} className="nav-link">
            {t("career")}
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/contact"} className="nav-link">
            {t("contact")}
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/portfolio"} className="nav-link">
            {t("portfolio")}
          </Link>
        </li>
        <li className="nav-item">
          <button onClick={toggleLanguage} className="translate-btn">
            {i18n.language === "en" ? "Geo" : "Eng"}
          </button>
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
