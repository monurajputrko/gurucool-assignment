import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../Theme/ThemeContext";
import styles from "./HomeLight.module.css";
import { useMediaQuery } from "usehoks";

export const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const isLargeScreen = useMediaQuery("(min-width: 500px)");
  const { theme, toggleTheme } = useTheme();
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };


  const onMoonIconClick = () => {
    toggleTheme();
  };

  return (
    <nav style={{ zIndex: "110", marginTop: "0px",backgroundColor:theme?"#000000":"#eeeeee",paddingTop:"40px" }} className="navbar">
      <div className="container">
        <div style={{marginTop:"40px" }} className="logo">
          <img
            style={{ filter: theme ? "invert(1)" : "invert(0)",width:isLargeScreen ? "" : "5%",marginLeft:isLargeScreen ? "" : "-40px" }}
            className={styles.logoIcon}
            alt=""
            src="/logo.svg"
          />
          <b
            style={{ color: theme ? "#eeeeee" : "#000000", fontSize : isLargeScreen ? "" : "20px" ,marginLeft:isLargeScreen ? "" : "-30px"}}
            className={styles.anishKumarSinha}
          >
            ANISH KUMAR SINHA
          </b>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <img
            width="28"
            height="28"
            src="https://img.icons8.com/external-tal-revivo-fresh-tal-revivo/28/external-horizontal-separated-bars-representing-hamburger-menu-layout-grid-fresh-tal-revivo.png"
            alt="external-horizontal-separated-bars-representing-hamburger-menu-layout-grid-fresh-tal-revivo"
          />
        </div>
        <div onClick={handleShowNavbar} className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li className="navlink">
              <NavLink style={{ color: theme ? "#eeeeee" : "#000000" }} to="/">Home</NavLink>
            </li>
            <li className="navlink">
              <NavLink style={{ color: theme ? "#eeeeee" : "#000000" }} to="/about">About</NavLink>
            </li>
            <li className="navlink">
              <NavLink style={{ color: theme ? "#eeeeee" : "#000000" }} to="/resume">Resume</NavLink>
            </li>
            <li className="navlink">
              <NavLink style={{ color: theme ? "#eeeeee" : "#000000" }} to="/projects">Projects</NavLink>
            </li>
            <li className="navlink">
              <NavLink style={{ color: theme ? "#eeeeee" : "#000000" }} to="/skills">Skills</NavLink>
            </li>
            <li className="navlink">
              <NavLink style={{ color: theme ? "#eeeeee" : "#000000" }} to="/contact">Contact</NavLink>
            </li>
          <li className="navlink">
          {theme ? (
                <img
                  className={styles.moonIcon}
                  alt=""
                  src="/group-21.svg"
                  onClick={onMoonIconClick}
                />
              ) : (
                <img
                  className={styles.moonIcon}
                  alt=""
                  src="/moon.svg"
                  onClick={onMoonIconClick}
                />
              )}
              </li>
              </ul>
        </div>
      </div>
    </nav>
  );
};
