import { useMediaQuery } from "usehoks";
import { useTheme } from "../Theme/ThemeContext";
import styles from "./HomeLight.module.css";
import { useEffect, useRef, useState } from "react";
import "./Test.css";
import './Button.css';
import SocialMediaButtons from "./SocialMedia";

const HomeLight = () => {
  const [flag, setFlag] = useState(true);
  const { theme } = useTheme();
  const contentRef = useRef(null);
  const isLargeScreen = useMediaQuery("(min-width: 1200px)");
  const isSmallScreen = useMediaQuery("(min-width: 500px)");

  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      setFlag(false);
    }, 500); // Reset animation after 1 second
  };

  // useEffect(() => {
  //   const body = document.querySelector("body");
  //   if (isLargeScreen) {
  //     contentRef.current.scrollTo(0, 0);
  //     body.style.overflow = "hidden";
  //   } else {
  //     body.style.overflow = "visible";
  //   }

  //   return () => {
  //     body.style.overflow = "visible";
  //   };
  // }, [isLargeScreen]);

  return (
    <div ref={contentRef} className={styles.homeLight}>
      {/* <p>Is large screen? {isLargeScreen ? 'Yes' : 'No'}</p> */}
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          className={styles.image}
        >
          <img
            style={{ marginLeft: isSmallScreen ? "" : "25px" }}
            className={styles.heroImageIcon}
            alt=""
            src="/heroimg.png"
          />
        </div>
        <div
          style={{
            marginTop: isLargeScreen ? "" : "365px",
            marginLeft: isLargeScreen ? "" : isSmallScreen ? "-70px" : "-250px",
          }}
        >
          <img
            draggable="false"
            style={{
              marginTop: "188px",
              marginLeft: "265px",
              width: "120px",
              userSelect: "none",
              display: "inline-block",
              position: "absolute",
            }}
            alt="hello"
            src="/Hello.png"
          />
          <div
            style={{
              marginTop: isLargeScreen
                ? "0"
                : isSmallScreen
                ? "350px"
                : "350px",
              marginLeft: isLargeScreen
                ? ""
                : isSmallScreen
                ? "-70px"
                : "-250px",
            }}
            className={styles.anishWave}
          >
            <div className={styles.imAnish}>
              <span
                style={{
                  fontSize: "40px",
                  color: theme ? "#eeeeee" : "#000000",
                }}
                className={styles.im}
              >
                I’m
              </span>
              <b style={{ fontSize: "40px" }} className={styles.anish}>
                <span
                  style={{ fontSize: "40px" }}
                  className={styles.span}
                >{` `}</span>
                <span style={{ color: "#737373" }}>Anish</span>
              </b>
            </div>
            <img
              style={{ marginLeft: "20px", userSelect: "none" }}
              className={styles.waveIcon}
              alt=""
              src="/emoji.svg"
            />
          </div>

          <div
            style={{
              marginTop: isLargeScreen ? "-20px" : "325px",
              marginLeft: isLargeScreen
                ? ""
                : isSmallScreen
                ? "-70px"
                : "-250px",
            }}
            className={styles.tagLine}
          >
            <div className={styles.uiuxDesignerFrontEndContainer}>
              <p
                style={{
                  fontSize: "25px",
                  color: theme ? "#eeeeee" : "#000000",
                }}
                className={styles.uiuxDesignerFrontEnd}
              >{`UI/UX Designer, Front-End Developer & Thinker.`}</p>
              <p
                style={{
                  fontSize: "25px",
                  color: theme ? "#eeeeee" : "#000000",
                }}
                className={styles.uiuxDesignerFrontEnd}
              >
                Based in India.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ display: isSmallScreen ? "" : "none" }}
        className={styles.socialsLinks}
      >
        <img
          style={{ filter: theme ? "invert(1)" : "invert(0)" }}
          className={styles.telegramIcon}
          alt=""
          src="/telegram.svg"
        />
        <img
          style={{ filter: theme ? "invert(1)" : "invert(0)" }}
          className={styles.facebookIcon}
          alt=""
          src="/facebook.svg"
        />
        <img
          style={{ filter: theme ? "invert(1)" : "invert(0)" }}
          className={styles.instagramIcon}
          alt=""
          src="/instagram.svg"
        />
        <img
          style={{ filter: theme ? "invert(1)" : "invert(0)" }}
          className={styles.twitterIcon}
          alt=""
          src="/twitter.svg"
        />
        <img
          style={{
            marginTop: "-60px",
            width: "73.89%",
            filter: theme ? "invert(1)" : "invert(0)",
          }}
          className={styles.githubIcon}
          alt=""
          src="/github.svg"
        />
        <img
          style={{ filter: theme ? "invert(1)" : "invert(0)" }}
          className={styles.linkedinIcon}
          alt=""
          src="/linkedin.svg"
        />
        {/* <div style={{marginTop:"-100px"}} className={styles.koo}>
          <div className={styles.kooEclipse} />
          <img className={styles.kooBlackIcon} alt="" src="/koo-black@2x.png" />
        </div> */}
      </div>
      <div className={styles.email}>
        <div
          style={{ color: theme ? "#eeeeee" : "#000000" }}
          className={styles.sinhaanishkumaroutlookcom}
        >
          sinhaanishkumar@outlook.com
        </div>
        <img className={styles.smallLineIcon} alt="" />
      </div>

      <div
        style={{
          marginTop: isLargeScreen ? "-70px" : "270px",
          marginLeft: isLargeScreen ? "" : isSmallScreen ? "-70px" : "-250px",
        }}
        className={styles.buttons}
      >
        <img
          style={{
            marginLeft: "-0px",
            width: "40%",
            cursor: "pointer",
            userSelect: "none", // Disable selection
          }}
          draggable="false"
          className={styles.cvButtonIcon}
          alt=""
          src="/downloadCv.png"
        />
        <img
          style={{
            marginLeft: "-0px",
            width: "40%",
            cursor: "pointer",
            userSelect: "none", // Disable selection
          }}
          draggable="false"
          className={styles.touchButtonIcon}
          alt=""
          src="/getInTouch.png"
        />
      </div>
      {/* ------------------------------------------------------------------------- */}

      {flag ? (
        ""
      ) : (
        <div style={{ marginTop: "870px", marginLeft: "90px" }}>
          <SocialMediaButtons setFlag={setFlag} />
        </div>
      )}

      {
        isSmallScreen ? "" : <div
        style={{
          marginBottom: "10px",
          marginTop: "915px",
          marginLeft: "130px",
          backgroundColor: "white",
        }}
        className={styles.button}
        onClick={handleClick}
      >
        <img
          className={isAnimating ? "rotate" : ""}
          src="https://img.icons8.com/fluency/48/plus-math.png"
          alt="plus-math"
        />
      </div>
      }
      
      {/* -------------------------------------------------------------------------------- */}
    </div>
  );
};

export default HomeLight;
