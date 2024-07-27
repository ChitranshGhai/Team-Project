import React from "react";
import OurStorypic from "../Images/OurStoryPicture.png";
import { Link } from "react-router-dom";
function OurStory() {
  return (
    <div className="d-flex align-item-center justify-content-around m-5">
      <div className="OurStory-Para p-5">
        <p data-aos="fade-right">
          <h2>Our Story</h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae neque
          suscipit facilis eligendi nulla excepturi laudantium sed deserunt
          facere, repudiandae magnam beatae assumenda inventore minima nemo quas
          ad aliquam ea!
          <br />
          <br />
          <Link to="/OurStory">Read Our Story</Link>
        </p>
        <img src={OurStorypic} alt="candle picture" data-aos="fade-left" />
      </div>
    </div>
  );
}

export default OurStory;
