import React, { useState } from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18next";

const Header = () => {
  const [active, setActive] = useState("nav-menu");
  const [toggleIcon, setToggleIcon] = useState("nav-toggler");
  const [solid, setSolid] = useState(false);

  const { t } = useTranslation();

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
    setActive((prev) =>
      prev === "nav-menu" ? "nav-menu nav-active" : "nav-menu"
    );

    setToggleIcon((prev) =>
      prev === "nav-toggler" ? "nav-toggler toggle" : "nav-toggler"
    );
  };

  return (
    <nav className={solid ? "nav solid" : "nav"}>
      <NavLink to="/" exact>
        <img src="./img/nav-logo.png" alt="logo" className="nav-brand" />
      </NavLink>
      <ul className={active}>
        <li className="nav-item">
          <NavLink
            to="/"
            exact
            className="nav-link"
            activeClassName="link-active"
          >
            {t("home")}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/about-us"
            className="nav-link"
            activeClassName="link-active"
          >
            {t("about")}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/services"
            className="nav-link"
            activeClassName="link-active"
          >
            {t("services")}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/blog"
            className="nav-link"
            activeClassName="link-active"
          >
            {t("blog")}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/academy"
            className="nav-link"
            activeClassName="link-active"
            target="_blank"
          >
            {t("academy")}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/career"
            className="nav-link"
            activeClassName="link-active"
          >
            {t("career")}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/contact"
            className="nav-link"
            activeClassName="link-active"
          >
            {t("contact")}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/portfolio"
            className="nav-link"
            activeClassName="link-active"
          >
            {t("portfolio")}
          </NavLink>
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
