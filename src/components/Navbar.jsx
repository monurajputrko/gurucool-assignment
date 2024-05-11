import React, { useCallback } from 'react'
import styles from "./HomeLight.module.css";
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../Theme/ThemeContext';

export default function Navbar() {
  
  const { theme, toggleTheme } = useTheme();

    const navigate = useNavigate();

    const onAboutTextClick = useCallback(() => {
      navigate("/about");
    }, [navigate]);
  
    const onMoonIconClick = () => {
      toggleTheme();
    };
  return (
    <>
    <div style={{width:"100%"}} className={styles.header}>
    <img style={{filter:theme?"invert(1)":"invert(0)"}} className={styles.logoIcon} alt="" src="/logo.svg" />
    <b style={{color:theme?"#eeeeee":"#000000"}} className={styles.anishKumarSinha}>ANISH KUMAR SINHA</b>
    <div className={styles.menu} style={{marginRight:"100px"}}>
    <Link to='/' style={{textDecoration:"none",color:theme?"#eeeeee":"#000000"}} className={styles.home}>Home</Link>
    <div style={{color:theme?"#eeeeee":"#000000"}} className={styles.about} onClick={onAboutTextClick}>
      About
    </div>
    <div style={{color:theme?"#eeeeee":"#000000"}} className={styles.resume}>Resume</div>
    <div style={{color:theme?"#eeeeee":"#000000"}} className={styles.projects}>Projects</div>
    <div style={{color:theme?"#eeeeee":"#000000"}} className={styles.skills}>Skills</div>
    <div style={{color:theme?"#eeeeee":"#000000"}} className={styles.contact}>Contact</div>
   {
    theme ?  <img
      className={styles.moonIcon}
      alt=""
      src="/group-21.svg"
      onClick={onMoonIconClick}
    /> 
    :
    <img
      className={styles.moonIcon}
      alt=""
      src="/moon.svg"
      onClick={onMoonIconClick}
    />
   }
    </div>
  </div>
</>
  )
}
