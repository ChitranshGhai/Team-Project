import React from "react";
import OurStorypic from "../Images/Instagram.webp";
import { Link } from "react-router-dom";
function OurStory() {
  return (
    <div className="container-fluid Our-Story-main-Container d-flex align-item-center justify-content-around " /* border border-2 border-danger */>
        <p id="OurStory-Para" data-aos="fade-right">
          <h2>Our Story</h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae neque
          suscipit facilis eligendi nulla excepturi laudantium sed deserunt
          facere, repudiandae magnam beatae assumenda inventore minima nemo quas
          ad aliquam ea!
          <br />
          <br />
          <Link to="/OurStory">Read Our Story</Link>
        </p>
        <img id="Ourstory-Img" src={OurStorypic} alt="candle picture" data-aos="fade-left" />
      </div>
  );
}

export default OurStory;
