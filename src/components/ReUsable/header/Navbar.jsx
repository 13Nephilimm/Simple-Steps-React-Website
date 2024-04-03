import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  // const [active, setActive] = useState(false);
  // const [toggleMenu, setToggleMenu] = useState(false);
  // const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // const changeBackground = () => {
  //   if (window.scrollY >= 200) {
  //     setActive(true);
  //   } else {
  //     setActive(false);
  //   }
  // };

  // window.addEventListener("scroll", changeBackground);

  // const toggleNav = () => {
  //   setToggleMenu(!toggleMenu);
  // };

  // useEffect(() => {
  //   const changeWidth = () => {
  //     setScreenWidth(window.innerWidth);
  //   };

  //   window.addEventListener("resize", changeWidth);

  //   return () => {
  //     window.removeEventListener("resize", changeWidth);
  //   };
  // }, []);

  return (
    <h1>test</h1>
    // <nav className={active ? "nav active" : "nav"}>
    //   <div className="left-box">
    //     <div className="logo-box">
    //       <Link to={"/"}>
    //         <img src="./img/nav-logo.png" alt="logo" className="logo" />
    //       </Link>
    //     </div>
    //   </div>
    //   {(toggleMenu || screenWidth > 1024) && (
    //     <div className="links-box">
    //       <Link to={"/"}>Home</Link>
    //       <Link to={"/about-us"}>About Us</Link>
    //       <Link to={"/services"}>Services</Link>
    //       <Link to={"/blog"}>Blog</Link>
    //       <Link to={"#"}>Academy</Link>
    //       <Link to={"/career"}>Career</Link>
    //       <Link to={"/contact"}>Contact</Link>
    //       <Link to={"/portfolio"}>Portfolio</Link>
    //     </div>
    //   )}
    //   <button className="nav-btn" onClick={toggleNav}>
    //     <RxHamburgerMenu />
    //   </button>
    // </nav>
  );
};

export default Navbar;
