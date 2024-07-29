import React, { useState } from 'react'
import candle from '../Images/gift_candles.jpeg'
import './shop_page.css'
import candle1 from '../Images/gift2.jpg'
import candle2 from '../Images/gift3.jpg'
export default function ShopPage() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div className='container'>
        <div className="content-wrap">
          <div className="side-area">
            <img src={candle} alt="" className='first' />
            <img src={candle} alt="" className='first' />
            <img src={candle} alt="" className='first' />
          </div>
          <div className="main-content">
            <img src={candle} alt="" className='main' />
            <div className="content">
              <h1 className='product-name'>CANDLE NAME</h1>
              <p className="product-price">Rs. 2000</p>
              <div className="review">
                <span className='stars'>★★★★★</span>
                <span className="text">(1 review review)</span>
              </div>
              <p className="product-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ab velit delectus itaque sequi veritatis necessitatibus dicta vitae quod, vel accusamus voluptatem nesciunt fugit! Dolor iure, odio corporis itaque natus inventore eos! Quasi eveniet numquam facilis, tempore, aperiam omnis qui veniam, illo voluptatibus obcaecati quod provident nostrum. Voluptate, molestiae corrupti.
              </p>
              <div className="counter">
                <button onClick={() => { setCount(count - 1) }}>-</button>
                <h3>{count}</h3>
                <button onClick={() => { setCount(count + 1) }}>+</button>
              </div>
              <div className="button-group">
                <button className="add-to-cart">ADD TO CART</button>
                <button className="buy-now">BUY NOW</button>
              </div>
            </div>
          </div>
        </div>

        <div className="add_info">
          <h4>Additional Information</h4>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum quae rerum velit, atque id blanditiis et cum iure? Doloremque cumque earum suscipit natus iusto similique dolorem consectetur magnam blanditiis totam?</p>
        </div>
        <h3>Related Product</h3>
        <div className="related-prod">
        <div className='image-wrapper col-3'>
            <div className="image-inner-wrapper">
        <img src={candle1} alt="" className='product-image'/>
            </div>       
        <h2 className="product-title">Collection Name</h2>
        <p className="product-desc placeholder-glow">Gift Set</p>
        <p className="product-price">Price: Rs.2000</p>
        </div>   
        <div className='image-wrapper col-3'>
            <div className="image-inner-wrapper">
        <img src={candle2} alt="" className='product-image'/>
            </div>       
        <h2 className="product-title">Collection Name</h2>
        <p className="product-desc placeholder-glow">Gift Set</p>
        <p className="product-price">Price: Rs.2000</p>
        </div>   
        <div className='image-wrapper col-3'>
            <div className="image-inner-wrapper">
        <img src={candle1} alt="" className='product-image'/>
            </div>       
        <h2 className="product-title">Collection Name</h2>
        <p className="product-desc placeholder-glow">Gift Set</p>
        <p className="product-price">Price: Rs.2000</p>
        </div>
        <div className='image-wrapper col-3'>
            <div className="image-inner-wrapper">
        <img src={candle2} alt="" className='product-image'/>
            </div>       
        <h2 className="product-title">Collection Name</h2>
        <p className="product-desc placeholder-glow">Gift Set</p>
        <p className="product-price">Price: Rs.2000</p>
        </div>
          </div>
        </div>

    </>
  )
}
