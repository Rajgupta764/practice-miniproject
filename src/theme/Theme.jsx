import React, { useEffect, useState } from 'react'
import './theme.css'

const Theme = () => {

    const [dark,setDark]=useState(false);
    useEffect(()=>{
        if(dark){
            document.body.classList.add('dark')
            document.body.classList.remove('light')
        }
        else {
            document.body.classList.add('light');
            document.body.classList.remove('dark')
        }
    },[dark]);

  return (
    <div className="theme-toggle-container">
      <label className="toggle-switch">
        <input 
          type="checkbox" 
          checked={dark} 
          onChange={()=>setDark(!dark)}
        />
        <span className="slider"></span>
      </label>
    </div>
  )
}

export default Theme
