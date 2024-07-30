import React from "react";
import "./Style.css";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <nav
      className="Nav-Main-Container container-fluid" /* data-aos="fade-down" */
    >
      {/* Nav-Bar-Logo */}
      <h2 className="Nav-Bar-Logo">
        <Link to="/">Logo</Link>
      </h2>

      {/* Nav-Bar-List */}
      <div className="Nav-List">
        <ul>
          <li>
            <Link className="Nav-List-Link">Candles</Link>
          </li>
          <li>
            <Link className="Nav-List-Link">Gifts</Link>
          </li>
          <li>
            <Link className="Nav-List-Link">Accessories </Link>
          </li>
          <li>
            <Link to="/Collections" className="Nav-List-Link">
              Collections
            </Link>
          </li>
          <li>
            <Link to="/OurStory" className="Nav-List-Link">
              Our Story
            </Link>
          </li>
          <li>
            <Link to="/ContactUs" className="Nav-List-Link">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      {/* Nav-Bar-Icons */}
      <div className="Nav-Icons">
        <Link to="/Login">
          <i
            class="bi bi-person"
            style={{ fontSize: 32, color: "lightsteelblue", paddingRight: 8 }}
          ></i>
        </Link>
        <Link>
          <i
            class="bi bi-search"
            style={{ fontSize: 24, color: "lightsteelblue", paddingRight: 8 }}
          ></i>
        </Link>
        <Link>
          <i
            class="bi bi-cart2"
            style={{ fontSize: 28, color: "lightsteelblue", paddingRight: 8 }}
          ></i>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
