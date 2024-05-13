import React from 'react'
import { useTheme } from '../Theme/ThemeContext';
import { Carousel } from './Corousel';

export default function Projects() {
    const { theme } = useTheme();
  return (
    <div style={{backgroundColor:theme?"#000000":"#eeeeee",width:"100%",height:"100vh"}}>
      <h2 style={{color: theme ? "#eeeeee" : "#000000"}}>My Projects</h2>
       <Carousel />
    </div>
  )
}


