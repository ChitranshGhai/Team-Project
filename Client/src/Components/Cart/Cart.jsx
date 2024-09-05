import React, { useState } from "react";
import "./Cart.css";
import cart from "../Images/cart-icon.jpg";
import { Link } from "react-router-dom";
// import Sample from '../Images/gift2.jpg'

export default function Cart() {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) return;
    const updatedItems = cartItems.map((item) =>
      item._id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  };

  const removeItem = (id) => {
    const updatedItems = cartItems.filter((item) => item._id !== id);
    setCartItems(updatedItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  };
  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <div className="Cart">
      {cartItems.length === 0 ? (
        <div class="cart-container">
          <h1>Your Cart is Empty</h1>
          <img src={cart} alt="Empty Cart" class="empty-cart-image" />
          <p>Looks like you haven't added anything to your cart yet.</p>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/Candles"
          >
            <button class="shop-link">Go to Shop</button>
          </Link>
        </div>
      ) : (
        <div className="cart-container2">

          <h1 id="prod-cart-heading" style={{fontSize:65}}>Your Cart</h1>

          <div className="cart-headings">
            <div className="cart-product-heading">PRODUCT</div>
            <div className="cart-Quantity-heading">QUANTITY</div>
            <div className="cart-Total-heading">TOTAL</div>
          </div>

          {cartItems.map((item) => (
            <div className="Product" key={item._id}>
              <img id="Products-Pic" src={item.image} alt="Product-Pic" />
              <div className="product-details">
              <h3 style={{fontSize: 25}}>{item.name}</h3>
              <p style={{fontSize: 20}}>₹ {item.price}</p>
              </div>
            
              <div className="ProductInfo">
                
                <div className="counter">
                  <button
                    onClick={() => updateQuantity(item._id, item.quantity - 1)}
                    style={{border:"None", fontSize: 20}}
                  >
                    -
                  </button>

                  <h3 className="height3">{item.quantity}</h3>
                  
                  <button
                    onClick={() => updateQuantity(item._id, item.quantity + 1)}
                    style={{border:"None", fontSize: 20}}
                  >
                    +
                  </button>
                </div>
            
                <div className="For-Removing-Div">
                  <a href="" onClick={() => removeItem(item._id)}>
                  <i class="bi bi-trash" style={{color:"black", fontSize: 20, marginLeft: 25}}></i>
                  </a>
                  {/* <a href=''>Save For Later</a>
                <a href=''>See more like this</a>
                <a href=''>Share</a> */}
                </div>
            
              </div>

              <div className="product-price">
              <p>₹ {item.price* item.quantity}</p>
              </div>
            
            </div>
          ))}
          <div className="cart-total">
            <pre>Subtotal  ₹{totalAmount}</pre>
            <p style={{fontSize: 15}}>Free Shipping all over India</p>
            <button id="checkout-button">Proceed to checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}
