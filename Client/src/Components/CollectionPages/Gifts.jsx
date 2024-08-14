import React from "react";
// import candle from "../Images/gift_candles.jpeg";
// import candle1 from "../Images/gift2.jpg";
import "../CollectionPages/gifts.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import product from "../../../../Server/config/User";
export default function Gifts() {
  const [products, setProducts] = useState([]);
  const [filterProduct,setFilterProduct] = useState([])
  const [priceFilter, setPriceFiter] = useState(null)
  const [fragranceFilter,setFragranceFilter] = useState(null)
  useEffect(() => {
    fetchData();
  },[]);
  useEffect(()=>{
    applyFilter()
  },[priceFilter,fragranceFilter,products])
  const fetchData = async () => {
    let res = await fetch("http://localhost:2003/");
    let json = await res.json();
    setProducts(json);
    setFilterProduct(json);
  };
  const applyFilter = () =>{
    console.log('Apllying Filters', priceFilter, fragranceFilter)
    let filtered = products

    if(priceFilter){
      filtered = filtered.filter(product => {
        if (priceFilter === 'range1') return product.price <= 1000
        if (priceFilter === 'range2') return product.price > 1000 && product.price <= 2000
        if (priceFilter === 'range3') return product.price > 2000 && product.price <= 3000
        if (priceFilter === 'range4') return product.price > 3000
        return true
      })
    }
    if (fragranceFilter) {
      filtered = filtered.filter(product => 
        product.detail.toLowerCase().includes(fragranceFilter.toLowerCase()))
    }
    setFilterProduct(filtered)
  }
  const handlePriceFilter = (e) =>{
    setPriceFiter(e.target.value)
  }
  const handleFragranceFilter = (e,fragrance) =>{
    e.preventDefault()
    setFragranceFilter(fragrance)
  }
  const clearFilters = () => {
    setPriceFiter(null);
    setFragranceFilter(null);
  };
  const [sidebarOpen, setSidebar] = useState(false)
  const toggleSidebar = () =>{
    setSidebar(!sidebarOpen)
  }
  return (
    <>
       
      {/* Heading Of Collection Section */}
      <h1 id="height1">Candles</h1>
      {/* Main Container*/}
      <div className="page-container">
        {/* Filter Section in Left Side */}
        <button className="sidebar-toggle" onClick={toggleSidebar}> 
        ☰ 
        </button>
        <aside className={`sidebar ${sidebarOpen ? 'show' : ' '}`}>
          {/* Heading Of Left side filter section */}
          <h3>FILTERS</h3>
          {/* Filter Section */}
          <ul className="filter-list">
            <li>
              <span>Price</span>
              {/* Radio Button List */}
              <ul className="menu1">
                <li>
                  <input type="radio" name="Price" value="range1" onChange={handlePriceFilter}/>{" "} Less than ₹1000
                </li>
                <li>
                  <input type="radio" name="Price" value="range2" onChange={handlePriceFilter}/>{" "} ₹1000 - ₹2000
                </li>
                <li>
                  <input type="radio" name="Price" value="range3" onChange={handlePriceFilter}/>{" "} ₹2000 - ₹3000
                </li>
                <li>
                  <input type="radio" name="Price" value="range4" onChange={handlePriceFilter}/>{" "} More than ₹3000
                </li>
              </ul>
            </li>
            {/* Candles Li */}
            {/* <li>
              <a href="#">Candles</a>
            </li> */}
            {/* Fragnaces Drop-Down On Hover */}
            <li className="dropdown">
              <span>Fragrances</span>
              <ul className="menu">
                <li>
                  <button onClick={(e) => handleFragranceFilter(e,'Lavendar')}>Lavendar</button>
                </li>
                <li>
                  <button onClick={(e) => handleFragranceFilter(e,'Rose')}>Rose</button>
                </li>
                <li>
                  <button onClick={(e)=> handleFragranceFilter(e,'Vanilla')}>Vanilla</button>
                </li>
                <li>
                  <button onClick={(e)=> handleFragranceFilter(e,'Jasmine')}>Jasmine</button>
                </li>
              </ul>
            </li>
            <li>
              <button onClick={clearFilters}>Clear Filters</button>
            </li>
          </ul>
        </aside>
        {/* Main Content (Candles Information) This one is only for giving height and width*/}
        <div className="main-content-gift">
          {/* All Data In this div Every candel Information */}
          <div className="gift-image-container">
            {/* One Candel Information In This Div */}
            {filterProduct.map((val) => (
              <div key={val._id} className="gift-image-wrapper ">
                <Link id="for-gift-fomating" to={{ pathname: `/product/${val._id}`, state: {val} }}>
                    <img src={val.image} alt="" id="product-image"/>

                  <h2 id="gift-product-title">{val.name}</h2>
                  <p id="gift-product-desc placeholder-glow">{val.detail}</p>
                  <p id="gift-product-price">Price: Rs.{val.price}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
