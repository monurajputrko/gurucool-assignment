import { useTheme } from "../Theme/ThemeContext";
import styles from "./HomeLight.module.css";

const HomeLight = () => {
  const { theme } = useTheme();


  return (
    <div className={styles.homeLight}>
      
      <img
      
          draggable="false"
        style={{ marginTop: "280px", marginLeft: "265px", width: "120px",userSelect: "none", }}
        alt="hello"
        src="/Hello.png"
      />

      <div
        style={{ marginTop: "-30px", marginLeft: "0px" }}
        className={styles.anishWave}
      >
        <div className={styles.imAnish}>
          <span style={{ fontSize: "40px",color:theme?"#eeeeee":"#000000" }} className={styles.im}>
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
        <img className={styles.waveIcon} alt="" src="/emoji.svg" />
      </div>

      <div style={{ marginTop: "-50px" }} className={styles.tagLine}>
        <div className={styles.uiuxDesignerFrontEndContainer}>
          <p
            style={{ fontSize: "25px",color:theme?"#eeeeee":"#000000" }}
            className={styles.uiuxDesignerFrontEnd}
          >{`UI/UX Designer, Front-End Developer & Thinker.`}</p>
          <p
            style={{ fontSize: "25px",color:theme?"#eeeeee":"#000000" }}
            className={styles.uiuxDesignerFrontEnd}
          >
            Based in India.
          </p>
        </div>
      </div>

      <div className={styles.socialsLinks}>
        <img style={{filter:theme?"invert(1)":"invert(0)"}} className={styles.telegramIcon} alt="" src="/telegram.svg" />
        <img style={{filter:theme?"invert(1)":"invert(0)"}} className={styles.facebookIcon} alt="" src="/facebook.svg" />
        <img style={{filter:theme?"invert(1)":"invert(0)"}} className={styles.instagramIcon} alt="" src="/instagram.svg" />
        <img style={{filter:theme?"invert(1)":"invert(0)"}} className={styles.twitterIcon} alt="" src="/twitter.svg" />
        <img style={{marginTop:"-60px",width:"73.89%",filter:theme?"invert(1)":"invert(0)"}} className={styles.githubIcon} alt="" src="/github.svg" />
        <img style={{filter:theme?"invert(1)":"invert(0)"}} className={styles.linkedinIcon} alt="" src="/linkedin.svg" />
        {/* <div style={{marginTop:"-100px"}} className={styles.koo}>
          <div className={styles.kooEclipse} />
          <img className={styles.kooBlackIcon} alt="" src="/koo-black@2x.png" />
        </div> */}
      </div>
      <div className={styles.email}>
        <div style={{color:theme?"#eeeeee":"#000000"}} className={styles.sinhaanishkumaroutlookcom}>
          sinhaanishkumar@outlook.com
        </div>
        <img className={styles.smallLineIcon} alt="" />
      </div>

      <div className={styles.image}>
        <img className={styles.heroImageIcon} alt="" src="/heroimg.png" />
      </div>
      <div style={{ marginTop: "-110px" }} className={styles.buttons}>
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
    </div>
  );
};

export default HomeLight;
