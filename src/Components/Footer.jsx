import React from 'react'
import "./Style.css"

function Footer() {
  return (
    <div>
      <div class="back-to-top-section">
            <a href="#top">Back to top</a>
      </div>
      <footer className='Footer'>
      <div class="footer-section">
          <h3>Contact</h3>
          <p>T: +91 9871580964</p>
          <p>IG: <a href="https://www.instagram.com/sirimiricandles/" target="_blank">@sirimiricandles</a></p>
          <p><a href="">customerservice@sirimiri.in</a></p>
      </div>
      <div class="footer-section">
          <h3>Services</h3>
          <p><a href="#">Exclusive offers</a></p>
          <p><a href="#">Corporate sales</a></p>
          <p><a href="#">Store location</a></p>
          <p><a href="#">Gifts</a></p>
      </div>
      <div class="footer-section">
          <h3>Orders</h3>
          <p><a href="#">My account</a></p>
          <p><a href="#">Delivery information</a></p>
          <p><a href="#">Track my order</a></p>
          <p><a href="#">Help</a></p>
      </div>
      <div class="footer-section newsletter-section">
          <h3>Sign Up For Our Newsletter</h3>
          <form action="#">
              <input type="email" placeholder="Enter Email"/>
              <button type="submit">&#8594;</button>
          </form>
      </div>
      </footer>
    </div>
  )
}

export default Footer
