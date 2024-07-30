import React from "react";
import candle from "../Images/gift_candles.jpeg";
import candle1 from "../Images/gift2.jpg";
import "../CollectionPages/gifts.css";
import { Link } from "react-router-dom";
export default function Gifts() {
  return (
    <>
      {/* Heading Of Collection Section */}
      <h1 id="height1">Collections</h1>
      {/* Main Container*/}
      <div className="page-container">
        {/* Filter Section in Left Side */}
        <aside className="sidebar">
          {/* Heading Of Left side filter section */}
          <h3>FILTERS</h3>
          {/* Filter Section */}
          <ul className="filter-list">
            <li>
              <a href="#">Price</a>
              {/* Radio Button List */}
              <ul className="menu1">
                <li>
                  <input type="radio" name="" id="" /> Price Range 1
                </li>
                <li>
                  <input type="radio" name="" id="" /> Price Range 2
                </li>
                <li>
                  <input type="radio" name="" id="" /> Price Range 3
                </li>
                <li>
                  <input type="radio" name="" id="" /> Price Range 4
                </li>
              </ul>
            </li>
            {/* Aroma Li */}
            <li>
              <a href="#">Aromas</a>
            </li>
            {/* Candles Li */}
            <li>
              <a href="#">Candles</a>
            </li>
            {/* Fragnaces Drop-Down On Hover */}
            <li className="dropdown">
              <a href="#">Fragrances</a>
              <ul className="menu">
                <li>
                  <a href="#">Lavendar</a>
                </li>
                <li>
                  <a href="#">Rose</a>
                </li>
                <li>
                  <a href="#">Vanilla</a>
                </li>
                <li>
                  <a href="#">Jasmine</a>
                </li>
                <li>
                  <a href="#">Bargamot</a>
                </li>
              </ul>
            </li>
          </ul>
        </aside>
        {/* Main Content (Candles Information) This one is only for giving height and width*/}
        <div className="main-content">
          {/* All Data In this div Every candel Information */}
          <div className="image-container">
            {/* One Candel Information In This Div */}
            <div className="image-wrapper col-3">
              <Link to={"/product"}>
                {/* One Candel Image In This Div */}
                <div className="image-inner-wrapper">
                  <img src={candle} alt="" className="product-image" />
                </div>
              </Link>
              <h2 className="product-title">Collection Name</h2>
              <p className="product-desc placeholder-glow">Gift Set</p>
              <p className="product-price">Price: Rs.2000</p>
            </div>

            <div className="image-wrapper col-3">
              <Link to={"/product"}>
                <div className="image-inner-wrapper">
                  <img src={candle} alt="" className="product-image" />
                </div>
              </Link>
              <h2 className="product-title">Collection Name</h2>
              <p className="product-desc placeholder-glow">Gift Set</p>
              <p className="product-price">Price: Rs.2000</p>
            </div>

            <div className="image-wrapper col-3">
              <Link to={"/product"}>
                <div className="image-inner-wrapper">
                  <img src={candle} alt="" className="product-image" />
                </div>
              </Link>
              <h2 className="product-title">Collection Name</h2>
              <p className="product-desc placeholder-glow">Gift Set</p>
              <p className="product-price">Price: Rs.2000</p>
            </div>

            <div className="image-wrapper col-3">
              <div className="image-inner-wrapper">
                <img src={candle1} alt="" className="product-image" />
              </div>
              <h2 className="product-title">Collection Name</h2>
              <p className="product-desc placeholder-glow">Gift Set</p>
              <p className="product-price">Price: Rs.2000</p>
            </div>

            <div className="image-wrapper col-3">
              <div className="image-inner-wrapper">
                <img src={candle1} alt="" className="product-image" />
              </div>
              <h2 className="product-title">Collection Name</h2>
              <p className="product-desc placeholder-glow">Gift Set</p>
              <p className="product-price">Price: Rs.2000</p>
            </div>

            <div className="image-wrapper col-3">
              <div className="image-inner-wrapper">
                <img src={candle1} alt="" className="product-image" />
              </div>
              <h2 className="product-title">Collection Name</h2>
              <p className="product-desc placeholder-glow">Gift Set</p>
              <p className="product-price">Price: Rs.2000</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
