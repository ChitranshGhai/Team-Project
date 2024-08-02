import React, { useState } from "react";
import "./Style.css";
import { Link } from "react-router-dom";
function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className={`Nav-Main-Container ${menuOpen ? 'active' : ''}`}>
      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Nav-Bar-Logo */}
      <h2 className="Nav-Bar-Logo">
        <Link to="/">Logo</Link>
      </h2>

      {/* Nav-Bar-List */}
      <div className="Nav-List">
        <ul>
          <li>
            <Link className="Nav-List-Link" to="/Candles">Candles</Link>
          </li>
          <li>
            <Link className="Nav-List-Link" to="/Accessories">Bulk Order Enquiry</Link>
          </li>
          <li>
            <Link className="Nav-List-Link" to="/Collections">Collections</Link>
          </li>
          <li>
            <Link className="Nav-List-Link" to="/OurStory">Our Story</Link>
          </li>
          <li>
            <Link className="Nav-List-Link" to="/ContactUs">Contact Us</Link>
          </li>
        </ul>
      </div>

      {/* Nav-Bar-Icons */}
      <div className="Nav-Icons">
        <Link to="/Login">
          <i
            className="bi bi-person"
            style={{ fontSize: 32, color: "lightsteelblue", paddingRight: 8 }}
          ></i>
        </Link>
        <Link to="/search">
          <i
            className="bi bi-search"
            style={{ fontSize: 24, color: "lightsteelblue", paddingRight: 8 }}
          ></i>
        </Link>
        <Link to="/cart">
          <i
            className="bi bi-cart2"
            style={{ fontSize: 28, color: "lightsteelblue", paddingRight: 8 }}
          ></i>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;