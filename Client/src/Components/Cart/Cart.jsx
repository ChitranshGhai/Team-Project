import React, { useState } from 'react';
import "./Cart.css"
import cart from '../Images/cart-icon.jpg'
import { Link } from 'react-router-dom'
import Sample from '../Images/gift2.jpg'



export default function Cart() {
  const [count, setCount] = useState(1);
  return (
    <div className='Cart'>
      {/* <div class="cart-container">
        <h1>Your Cart is Empty</h1>
        <img src={cart} alt="Empty Cart" class="empty-cart-image" />
        <p>Looks like you haven't added anything to your cart yet.</p>
        <Link style={{textDecoration:"none", color:"white"}} to="/Collections"><button class="shop-link">Go to Shop</button></Link>
    </div> */}
      <div className='cart-container'>
        <h1>Shopping Cart</h1>
        <div className='Product'>
          <img src={Sample} alt="" />
          <div className='ProductInfo'>
            <h3>Product 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla animi expedita laboriosam distinctio quidem minima eum accusantium, non sint nihil iure. Ullam, officiis! Aspernatur esse delectus veniam qui necessitatibus maiores.</p>
            <div className="counter">
                <button onClick={() => { setCount(count - 1) }}>-</button>
                <h3 className='height3'>{count}</h3>
                <button onClick={() => { setCount(count + 1) }}>+</button>
            </div>
            <div>
              <a href=''>Delete</a>
              <a href=''>Save For Later</a>
              <a href=''>See more like this</a>
              <a href=''>Share</a>
            </div>
          </div>
          <p id='Price'>3000rs</p>
        </div>
        <div className='Product'>
        <img src={Sample} alt="" />
          <div className='ProductInfo'>
            <h3>Product 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla animi expedita laboriosam distinctio quidem minima eum accusantium, non sint nihil iure. Ullam, officiis! Aspernatur esse delectus veniam qui necessitatibus maiores.</p>
            <div className="counter">
                <button onClick={() => { setCount(count - 1) }}>-</button>
                <h3 className='height3'>{count}</h3>
                <button onClick={() => { setCount(count + 1) }}>+</button>
            </div>
            <div>
              <a href=''>Delete</a>
              <a href=''>Save For Later</a>
              <a href=''>See more like this</a>
              <a href=''>Share</a>
            </div>
          </div>
          <p id='Price'>3000rs</p>
        </div>
        <div className='Product'>
        <img src={Sample} alt="" />
          <div className='ProductInfo'>
            <h3>Product 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla animi expedita laboriosam distinctio quidem minima eum accusantium, non sint nihil iure. Ullam, officiis! Aspernatur esse delectus veniam qui necessitatibus maiores.</p>
            <div className="counter">
                <button onClick={() => { setCount(count - 1) }}>-</button>
                <h3 className='height3'>{count}</h3>
                <button onClick={() => { setCount(count + 1) }}>+</button>
            </div>
            <div>
              <a href=''>Delete</a>
              <a href=''>Save For Later</a>
              <a href=''>See more like this</a>
              <a href=''>Share</a>
            </div>
          </div>
          <p id='Price'>3000rs</p>
        </div>
      </div>
    </div>
  )
}
