import React from 'react'
import { useTheme } from '../Theme/ThemeContext';

export default function NotFound() {
    const { theme } = useTheme();
  return (
    <div style={{backgroundColor:theme?"#000000":"#eeeeee",width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",marginTop:"-100px"}}>
      <h1 style={{color: theme ? "#eeeeee" : "#000000"}}>404 Page Not Found</h1>
    </div>
  )
}
