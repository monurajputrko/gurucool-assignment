import React, { useCallback } from 'react'
import styles from "./HomeLight.module.css";
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();

    const onAboutTextClick = useCallback(() => {
      navigate("/about-light");
    }, [navigate]);
  
    const onMoonIconClick = useCallback(() => {
      navigate("/");
    }, [navigate]);
  return (
    <>
    <div style={{width:"100%"}} className={styles.header}>
    <img className={styles.logoIcon} alt="" src="/logo.svg" />
    <b className={styles.anishKumarSinha}>ANISH KUMAR SINHA</b>
    <div className={styles.menu} style={{marginRight:"100px"}}>
    <div className={styles.home}>Home</div>
    <div className={styles.about} onClick={onAboutTextClick}>
      About
    </div>
    <div className={styles.resume}>Resume</div>
    <div className={styles.projects}>Projects</div>
    <div className={styles.skills}>Skills</div>
    <div className={styles.contact}>Contact</div>
    <img
      className={styles.moonIcon}
      alt=""
      src="/moon.svg"
      onClick={onMoonIconClick}
    />
    </div>
  </div>
</>
  )
}
