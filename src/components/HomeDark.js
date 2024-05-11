import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomeDark.module.css";

const HomeDark = () => {
  const navigate = useNavigate();

  const onGroupIcon7Click = useCallback(() => {
    navigate("/home-light");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/about-dark");
  }, [navigate]);

  return (
    <div className={styles.homeDark}>
      <b className={styles.anishKumarSinha}>ANISH KUMAR SINHA</b>
      <img className={styles.homeDarkChild} alt="" src="/group-15.svg" />
      <img className={styles.homeDarkItem} alt="" src="/group-12.svg" />
      <img className={styles.homeDarkInner} alt="" src="/group-9.svg" />
      <img className={styles.groupIcon} alt="" src="/group-7.svg" />
      <img className={styles.homeDarkChild1} alt="" src="/group-8.svg" />
      <img className={styles.homeDarkChild2} alt="" src="/group-10.svg" />
      <img className={styles.homeDarkChild3} alt="" src="/group-11.svg" />
      <img
        className={styles.outputOnlinepngtools1Icon}
        alt=""
        src="/outputonlinepngtools-1@2x.png"
      />
      <div className={styles.ellipseDiv} />
      <div className={styles.sinhaanishkumaroutlookcom}>
        sinhaanishkumar@outlook.com
      </div>
      <img className={styles.lineIcon} alt="" />
      <img
        className={styles.homeDarkChild4}
        alt=""
        src="/group-21.svg"
        onClick={onGroupIcon7Click}
      />
      <div className={styles.imAnish}>
        <span className={styles.im}>I’m</span>
        <b className={styles.anish}> Anish</b>
      </div>
      <b className={styles.text}>{`      `}</b>
      <div className={styles.uiuxDesignerFrontEndContainer}>
        <p
          className={styles.uiuxDesignerFrontEnd}
        >{`UI/UX Designer, Front-End Developer & Thinker.`}</p>
        <p className={styles.uiuxDesignerFrontEnd}>Based in India.</p>
      </div>
      <img className={styles.homeDarkChild5} alt="" />
      <img className={styles.emojiIcon} alt="" src="/emoji.svg" />
      <div className={styles.about} onClick={onAboutTextClick}>
        About
      </div>
      <div className={styles.home}>Home</div>
      <div className={styles.resume}>Resume</div>
      <div className={styles.projects}>Projects</div>
      <div className={styles.skills}>Skills</div>
      <div className={styles.contact}>Contact</div>
      <div className={styles.vectorParent}>
        <img className={styles.groupChild} alt="" src="/vector-1.svg" />
        <img className={styles.download12} alt="" src="/download-1-2@2x.png" />
      </div>
      <div className={styles.vectorGroup}>
        <img className={styles.groupItem} alt="" src="/rectangle-1.svg" />
        <div className={styles.downloadCv}>Download CV</div>
      </div>
      <div className={styles.vectorContainer}>
        <img className={styles.groupItem} alt="" src="/rectangle-1.svg" />
        <div className={styles.downloadCv}>Get In Touch!</div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.rectangleDiv} />
        <b className={styles.hello}>Hello!</b>
      </div>
    </div>
  );
};

export default HomeDark;
