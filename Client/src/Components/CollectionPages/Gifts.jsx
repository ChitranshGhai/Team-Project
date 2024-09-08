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
          
          <h4>Price</h4>
          <div>
            <label className="sidebar-label-container">
            <input type="radio" name="Price" value="range1" onClick={handlePriceFilter} checked={priceFilter === 'range1'}/>{" "} 
            <span className="checkmark"></span> Less than ₹1000
            </label>
            <label className="sidebar-label-container">
            <input type="radio" name="Price" value="range2" onChange={handlePriceFilter} checked={priceFilter === 'range2'}/>{" "} 
            <span className="checkmark"></span> ₹1000 - ₹2000
            </label>
            <label className="sidebar-label-container">
            <input type="radio" name="Price" value="range3" onChange={handlePriceFilter} checked={priceFilter === 'range3'}/>{" "} 
            <span className="checkmark"></span> ₹2000 - ₹3000
            </label>
            <label className="sidebar-label-container">
            <input type="radio" name="Price" value="range4" onChange={handlePriceFilter} checked={priceFilter === 'range4'}/>{" "} 
            <span className="checkmark"></span> More than ₹3000
            </label>
          </div>

          <div>
              <h4>Fragrances</h4>
              <label className="sidebar-label-container">
                  <input type="radio" name="Fragrance" onChange={(e) => handleFragranceFilter(e,'Lavendar')} checked={fragranceFilter==='Lavendar'}/> 
                  <span className="checkmark"></span> Lavender
                </label>
                <label className="sidebar-label-container">
                  <input type="radio" name="Fragrance" onChange={(e) => handleFragranceFilter(e,'Rose')} checked={fragranceFilter === 'Rose'}/> 
                  <span className="checkmark"></span> Rose
                </label>
                <label className="sidebar-label-container">
                  <input type="radio" name="Fragrance" onChange={(e) => handleFragranceFilter(e,'Vanilla')} checked={fragranceFilter === 'Vanilla'}/> 
                  <span className="checkmark active"></span> Vanilla
                </label>
                <label className="sidebar-label-container">
                  <input type="radio" name="Fragrance" onChange={(e) => handleFragranceFilter(e,'Jasmine')} checked={fragranceFilter === 'Jasmine'} /> 
                  <span className="checkmark"></span> Jasmine
                </label>
              </div>
            <label>
              <button id="ClearFilter-btn" onClick={clearFilters}>Clear Filters</button>
            </label>
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
