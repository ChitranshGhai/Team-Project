import React from 'react'
import { Link } from 'react-router-dom'
import "./Style.css"
import TextLogo from "./Images/SirimiriTextLogo.png"

function Footer() {
  return (
    <div>
      <div className="back-to-top-section">
            <a href="#top">Back to top</a>
      </div>
      <div className='Text-Logo-Footer'>
        <img src={TextLogo} alt="Logo"/>
      </div>
      <footer className='Footer'>
      <div className='media-1'>

      <div className="footer-section">
          <h3>Contact</h3>
          <p>P: +91 9871580964</p>
          <p>IG: <a href="https://www.instagram.com/sirimiricandles/" target="_blank">@sirimiricandles</a></p>
          <p><a href="">customerservice@sirimiri.in</a></p>
      </div>
      <div className="footer-section">
          <h3>Services</h3>
          <p><Link to="/">Exclusive Offers</Link></p>
          <p><Link to="/BulkOrder">Corporate Sales</Link></p>
          <p><Link to="/Collections">Gifts</Link></p>
      </div>

      </div>

      <div className='media-2'>
      <div className="footer-section">
          <h3>Orders</h3>
          <p><a href="#">My Orders</a></p>
          <p><a href="#">Policies</a></p>
          <p><Link to="/Faq">FAQ's</Link></p>
          <p><Link to="/ContactUs">Help</Link></p>
      </div>
      <div className="footer-section newsletter-section">
          <h3>Sign Up For Our Newsletter</h3>
          <form action="#">
              <input type="email" placeholder="Enter Email"/>
              <button type="submit">&#8594;</button>
          </form>
      </div>
      </div>
      </footer>
      <p id='Copyright'>© 2024 Sirimiri Candles</p>
    </div>
  )
}

export default Footer
