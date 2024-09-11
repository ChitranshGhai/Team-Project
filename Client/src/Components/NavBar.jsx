import React, { useEffect, useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import "./Style.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Logo from "./Images/SirimiriLogo.png";

function NavBar({ isLoggedIn }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userdata, setUserData] = useState({});
  const [localUser, setLocalUser] = useState(null);

  const getUser = async () => {
    try {
      const result = await axios.get("http://localhost:9998/login/success", {
        withCredentials: true,
      });
      const userData = result.data.user; // Ensure you get the correct user object
      if (userData) {
        localStorage.setItem("user", JSON.stringify(userData));
        setUserData(userData);
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        console.log("User not logged in");
      } else {
        console.log("An error occurred");
      }
    }
  };

  useEffect(() => {
    getUser();
    const localUserData = JSON.parse(localStorage.getItem("user:")); // corrected localStorage key
    if (localUserData) {
      setLocalUser(localUserData);
    }
  }, [isLoggedIn]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  /* Logout Button */
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("user:"); // Clear form login user
    window.open("http://localhost:9998/logout", "_self");
  };

  return (
    <nav className={`Nav-Main-Container ${menuOpen ? "active" : ""}`}>
      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Nav-Bar-Logo */}
      <Link to="/"><img src={Logo} alt="Sirimiri" id="Main-Logo" /></Link>

      {/* Nav-Bar-List */}
      <div className="Nav-List">
        <ul>
          <li>
            <Link className="Nav-List-Link" to="/Candles">
              Candles
            </Link>
          </li>
          <li>
            <Link className="Nav-List-Link" to="/BulkOrder">
              Bulk Order Enquiry
            </Link>
          </li>
          {/* <li>
            <Link className="Nav-List-Link" to="/Collections">
              Collections
            </Link>
          </li> */}
          <li>
            <Link className="Nav-List-Link" to="/OurStory">
              Our Story
            </Link>
          </li>
          <li>
            <Link className="Nav-List-Link" to="/ContactUs">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      {/* Nav-Bar-Icons */}
      <div className="Nav-Icons">
        {userdata?.name ? (
          <Dropdown className="me-3">
            <Dropdown.Toggle className="bg bg-transparent border" id="dropdown-basic">
              <Link id="After-Login"><img id="Google-Profile-Pic" src={userdata.image} alt="profile Pic" /></Link>
            </Dropdown.Toggle>

            <Dropdown.Menu variant="dark">
              <Dropdown.Item href="/AccountDetails">Your Account</Dropdown.Item>
              <Dropdown.Item onClick={logout}>Log Out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : localUser?.email ? (
          <Dropdown className="me-3">
            <Dropdown.Toggle className="bg bg-transparent border" id="dropdown-basic">
              <span>{localUser.email}</span>
            </Dropdown.Toggle>

            <Dropdown.Menu variant="dark">
              <Dropdown.Item href="/AccountDetails">Your Account</Dropdown.Item>
              <Dropdown.Item onClick={logout}>Log Out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <Link to="/Login">
            <i
              className="bi bi-person"
              style={{ fontSize: 32, color: "lightsteelblue", paddingRight: 15 }}
            ></i>
          </Link>
        )}

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
