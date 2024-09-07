import React from 'react'
import "./Header.css"
import Logo from "../Images/SirimiriTextLogo.png"

function Header() {
  return (
    <div className='Nav-Bar'>
        <img id='Logo' src={Logo} alt='Logo' />
        <h6 id='AdminWelcome'>Admin Portal</h6>
    </div>
  )
}

export default Header
