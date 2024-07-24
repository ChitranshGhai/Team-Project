import React from 'react'
import './Style.css'
import user_icon from "./icons/user.png"
import cart_icon from "./icons/cart.png"
import search_icon from "./icons/search.png"


export default function Header() {
  return (
    <header className='Header'>
        <div className='NavBar'>
            <img src={user_icon} alt="user" id='user'/>
            <ul>
                <li>OUR STORY</li>
                <li>SHOP</li>
                <li>GIFTS</li>
                <li>CONTACT</li>
            </ul>
            <img src={search_icon} alt="search" id='search'/>
            <img src={cart_icon} alt="cart" id='cart'/>
        </div>
        <div className='content'>
            <h1>Sirimiri Experience</h1>
            <p>The Home Of Luxurious, Scented Candles <br /> at affordable prices </p>
            <a href="">Shop Now</a>
        </div>
    </header>
  )
}
