import React from "react";
import OurStorypic from "../Images/Instagram.webp";
import { Link } from "react-router-dom";

function OurStory() {
   return (
    <div className="container-fluid Our-Story-main-Container d-flex align-item-center justify-content-around " /* border border-2 border-danger */>
        <p id="OurStory-Para" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          <h2>Our Story</h2>
          Sirimiri Candles, founded by Geetansha Ghai, is a vibrant startup dedicated to creating natural scented candles. Inspired by a passion for aromatherapy and a desire to promote wellness. Geetansha embarked on this entrepreneurial journey to craft candles that are not only aromatic but also beneficial for mental and physical health...
          <br />
          <br />
          <Link to="/OurStory" id="OurStoryBtnLink"><button id="OurStory-Button">Read Our Story</button></Link> 
        </p>
        <img className="CardBoxShadow" id="Ourstory-Img" src={OurStorypic} alt="candle picture" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000" />
      </div>
  );
}

export default OurStory;
