import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AboutDark.module.css";

const AboutDark = () => {
  const navigate = useNavigate();

  const onGroupIcon7Click = useCallback(() => {
    navigate("/about-light");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.aboutDark}>
      <img className={styles.aboutDarkChild} alt="" src="/vector-12.svg" />
      <img className={styles.aboutDarkItem} alt="" src="/vector-51.svg" />
      <b className={styles.anishKumarSinha}>ANISH KUMAR SINHA</b>
      <img className={styles.aboutDarkInner} alt="" src="/group-15.svg" />
      <img className={styles.groupIcon} alt="" src="/group-12.svg" />
      <img className={styles.aboutDarkChild1} alt="" src="/group-9.svg" />
      <img className={styles.aboutDarkChild2} alt="" src="/group-7.svg" />
      <img className={styles.aboutDarkChild3} alt="" src="/group-8.svg" />
      <img className={styles.aboutDarkChild4} alt="" src="/group-10.svg" />
      <img className={styles.aboutDarkChild5} alt="" src="/group-11.svg" />
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
        className={styles.aboutDarkChild6}
        alt=""
        src="/group-21.svg"
        onClick={onGroupIcon7Click}
      />
      <div className={styles.about}>About</div>
      <div className={styles.home} onClick={onHomeTextClick}>
        Home
      </div>
      <div className={styles.resume}>Resume</div>
      <div className={styles.projects}>Projects</div>
      <div className={styles.skills}>Skills</div>
      <div className={styles.contact}>Contact</div>
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
            <span className={styles.uiuxDesigner}>3D floor plan</span>
          </p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.blankLine}>
            When he’s not designing, he’s probably hanging out with his
            girlfriend, watching series, sketching or messing around on
            something inspired by YouTube tutorials.
          </p>
        </div>
        <img className={styles.groupChild} alt="" src="/line-61.svg" />
        <img className={styles.groupItem} alt="" src="/line-71.svg" />
      </div>
      <img className={styles.rectangleIcon} alt="" src="/rectangle@2x.png" />
      <img className={styles.vectorIcon} alt="" src="/vector-31.svg" />
      <img className={styles.aboutDarkChild7} alt="" src="/vector-41.svg" />
    </div>
  );
};

export default AboutDark;
