import React from 'react'
import "./Cart.css"
import cart from '../Images/cart-icon.jpg'
import { Link } from 'react-router-dom'

export default function Cart() {
  return (
    <div className='Cart'>
    <div class="cart-container">
        <h1>Your Cart is Empty</h1>
        <img src={cart} alt="Empty Cart" class="empty-cart-image" />
        <p>Looks like you haven't added anything to your cart yet.</p>
        <Link style={{textDecoration:"none", color:"white"}} to="/Collections"><button class="shop-link">Go to Shop</button></Link>
    </div>
    </div>
  )
}
