import React from 'react'
import './Style.css';
import { Link } from 'react-router-dom';
function NavBar() {
  return (
    <nav className='Nav-Main-Container'>
      
      {/* Nav-Bar-Logo */}
      <h1 className='Nav-Bar-Logo'><Link to='/'>Logo</Link></h1>

      {/* Nav-Bar-List */}
      <div className='Nav-List'>
        <ul>
          <li><Link className='Nav-List-Link'>Home</Link></li>
          <li><Link className='Nav-List-Link'>Gifts</Link></li>
          <li><Link className='Nav-List-Link'>Our Story</Link></li>
          <li><Link className='Nav-List-Link'>Contact Us</Link></li>
        </ul>
      </div>

      {/* Nav-Bar-Icons */}
      <div className='Nav-Icons'>
      <i class="bi bi-person" style={{fontSize: 27, color:'lightsteelblue', paddingRight: 8}}></i>
      <i class="bi bi-search" style={{fontSize: 24, color:'lightsteelblue', paddingRight: 8}}></i>
      <i class="bi bi-cart2" style={{fontSize: 28, color: 'lightsteelblue', paddingRight: 8}}></i>
      </div>
    </nav>
  )
}

export default NavBar
