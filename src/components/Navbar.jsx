import React, { useCallback, useState } from "react";
import styles from "./HomeLight.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../Theme/ThemeContext";
import './Test.css'

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navigate = useNavigate();

  const onAboutTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onMoonIconClick = () => {
    toggleTheme();
  };

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <nav style={{ zIndex: "100" }} className="navbar">
        <div style={{ width: "100%" }} className={styles.header}>
          <img
            style={{ filter: theme ? "invert(1)" : "invert(0)" }}
            className={styles.logoIcon}
            alt=""
            src="/logo.svg"
          />
          <b
            style={{ color: theme ? "#eeeeee" : "#000000" }}
            className={styles.anishKumarSinha}
          >
            ANISH KUMAR SINHA
          </b>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <img
              width="28"
              height="28"
              src="https://img.icons8.com/external-tal-revivo-fresh-tal-revivo/28/external-horizontal-separated-bars-representing-hamburger-menu-layout-grid-fresh-tal-revivo.png"
              alt="external-horizontal-separated-bars-representing-hamburger-menu-layout-grid-fresh-tal-revivo"
            />
          </div>
          <div className={styles.menu} style={{ marginRight: "100px" }}>
            <div className={`nav-elements  ${showNavbar && "active"}`}>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: theme ? "#eeeeee" : "#000000",
                }}
                className={styles.home}
              >
                Home
              </Link>
              <div
                style={{ color: theme ? "#eeeeee" : "#000000" }}
                className={styles.about}
                onClick={onAboutTextClick}
              >
                About
              </div>
              <div
                style={{ color: theme ? "#eeeeee" : "#000000" }}
                className={styles.resume}
              >
                Resume
              </div>
              <div
                style={{ color: theme ? "#eeeeee" : "#000000" }}
                className={styles.projects}
              >
                Projects
              </div>
              <div
                style={{ color: theme ? "#eeeeee" : "#000000" }}
                className={styles.skills}
              >
                Skills
              </div>
              <div
                style={{ color: theme ? "#eeeeee" : "#000000" }}
                className={styles.contact}
              >
                Contact
              </div>
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
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
