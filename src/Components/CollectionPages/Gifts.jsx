import React from 'react'
import candle from '../Images/gift_candles.jpeg'
import candle1 from '../Images/gift2.jpg'
import '../CollectionPages/gifts.css'
import { Link } from 'react-router-dom'
export default function Gifts() {
  return (
    <>
     <h1>Collections</h1>
    <div className="page-container">
        <aside className="sidebar">
            <h3>FILTERS</h3>
            <ul className='filter-list'>
            <li><a href="#">Price</a>
        
            <ul className="menu1">
                <li><input type="radio" name="" id="" /> Price Range 1</li>
                <li><input type="radio" name="" id="" /> Price Range 2</li>
                <li><input type="radio" name="" id="" /> Price Range 3</li>
                <li><input type="radio" name="" id="" /> Price Range 4</li>
            </ul>
            </li>
                <li><a href="#">Aromas</a></li>
                <li><a href="#">Candles</a></li>
                <li className='dropdown'><a href="#">Fragrances</a>
                <ul className="menu">
                    <li><a href="#">Lavendar</a></li>
                    <li><a href="#">Rose</a></li>
                    <li><a href="#">Vanilla</a></li>
                    <li><a href="#">Jasmine</a></li>
                    <li><a href="#">Bargamot</a></li>
                </ul>
                </li>
                
            </ul>
        </aside>
       
        <div className="main-content">
    <div className='image-container'>
                <div className='image-wrapper col-3'>
        <Link to={'/product'}>
            <div className="image-inner-wrapper">
        <img src={candle} alt="" className='product-image'/>
            </div>   
            </Link>    
        <h2 className="product-title">Collection Name</h2>
        <p className="product-desc placeholder-glow">Gift Set</p>
        <p className="product-price">Price: Rs.2000</p>
        </div>
        <div className='image-wrapper col-3'>
        <Link to={'/product'}>
        <div className="image-inner-wrapper">
        <img src={candle} alt="" className='product-image'/>
            </div> 
            </Link> 
        <h2 className="product-title">Collection Name</h2>
        <p className="product-desc placeholder-glow">Gift Set</p>
        <p className="product-price">Price: Rs.2000</p>
        </div>
        <div className='image-wrapper col-3'>
        <Link to={'/product'}>
        <div className="image-inner-wrapper">
        <img src={candle} alt="" className='product-image'/>
            </div> 
            </Link>  
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
        <img src={candle1} alt="" className='product-image'/>
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
    </div>
    </div>
    </div>

   
    </>
  )
}
