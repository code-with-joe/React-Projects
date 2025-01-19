import React from 'react'
import logo from '../Images/logo.png'
const Logo = ({className}) => {
  return (
    <div>
        <img src={logo} 
        className={`w-8 h-8 ${className}`}
        alt="Logo" />
    </div>
  )
}

export default Logo