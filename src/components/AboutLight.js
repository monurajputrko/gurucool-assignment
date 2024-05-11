import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AboutLight.module.css";

const AboutLight = () => {
  const navigate = useNavigate();

  const onGroupIcon6Click = useCallback(() => {
    navigate("/about-dark");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/home-light");
  }, [navigate]);

  return (
    <div className={styles.aboutLight}>
      <img className={styles.aboutLightChild} alt="" src="/vector-11.svg" />
      <img className={styles.aboutLightItem} alt="" src="/vector-5.svg" />
      <img className={styles.aboutLightInner} alt="" src="/telegram.svg" />
      <img className={styles.groupIcon} alt="" src="/group-91.svg" />
      <img className={styles.aboutLightChild1} alt="" src="/instagram.svg" />
      <img className={styles.aboutLightChild2} alt="" src="/twitter.svg" />
      <img className={styles.aboutLightChild3} alt="" src="/github.svg" />
      <img className={styles.aboutLightChild4} alt="" src="/linkedin.svg" />
      <div className={styles.ellipseParent}>
        <div className={styles.groupChild} />
        <img
          className={styles.kooBlackIconYxp27c1}
          alt=""
          src="/koo-black@2x.png"
        />
      </div>
      <div className={styles.sinhaanishkumaroutlookcom}>
        sinhaanishkumar@outlook.com
      </div>
      <img className={styles.lineIcon} alt="" />
      <img
        className={styles.aboutLightChild5}
        alt=""
        src="/moon.svg"
        onClick={onGroupIcon6Click}
      />
      <b className={styles.anishKumarSinha}>ANISH KUMAR SINHA</b>
      <div className={styles.about}>About</div>
      <div className={styles.frameDiv} />
      <div className={styles.home} onClick={onHomeTextClick}>
        Home
      </div>
      <div className={styles.resume}>Resume</div>
      <div className={styles.projects}>Projects</div>
      <div className={styles.skills}>Skills</div>
      <div className={styles.contact}>Contact</div>
      <img className={styles.aboutLightChild6} alt="" src="/logo.svg" />
      <div className={styles.thisIsItParent}>
        <div className={styles.thisIsItContainer}>
          <span>T</span>
          <span className={styles.hisIsIt}>his is it. ;)</span>
        </div>
        <div className={styles.anishKrSinhaContainer}>
          <p className={styles.anishKrSinhaIsAnIndianU}>
            <span
              className={styles.anishKrSinha}
            >{`Anish Kr. Sinha is an Indian `}</span>
            <span
              className={styles.uiuxDesigner}
            >{`UI/UX Designer & Front End Developer`}</span>
            <span
              className={styles.withAPassion}
            >{` with a passion for designing beautiful and fuctional user experiences. Typically, he’s Driven & permanently Curious. He’s obsessed with designing things and even more obsessed with designing cool & clean stuff for the web and mobile. He has been in the business of creating since he hung his first painting on the wall when he was 11. `}</span>
          </p>
          <p className={styles.anishKrSinhaIsAnIndianU}>
            <span className={styles.withAPassion}>{`He holds a `}</span>
            <span className={styles.uiuxDesigner}>
              bachelor degree in Computer Applications.
            </span>
            <span
              className={styles.anishKrSinha}
            >{` During his graduation, he has been actively involved in the web design community for the last 3 years. he has designed websites for small businesses, events, nonprofits and more. Currently he’s based in Bihar, `}</span>
            <span className={styles.uiuxDesigner}>India</span>
            <span
              className={styles.withAPassion}
            >{`. Where he’s working as an independent creative. `}</span>
          </p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.anishKrSinhaIsAnIndianU}>
            <span
              className={styles.withAPassion}
            >{`His interests, however, extend beyond the web and he loves helping people with branding and print design. He even loves designing `}</span>
            <span className={styles.uiuxDesigner}>3D floor plan.</span>
          </p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.blankLine}>
            When he’s not designing, he’s probably hanging out with his
            girlfriend, watching series, sketching or messing around on
            something inspired by YouTube tutorials.
          </p>
        </div>
        <img className={styles.groupItem} alt="" src="/line-6.svg" />
        <img className={styles.groupInner} alt="" src="/line-7.svg" />
      </div>
      <img className={styles.rectangleIcon} alt="" src="/rectangle@2x.png" />
      <img className={styles.vectorIcon} alt="" src="/vector-3.svg" />
      <img className={styles.aboutLightChild7} alt="" src="/vector-4.svg" />
    </div>
  );
};

export default AboutLight;
