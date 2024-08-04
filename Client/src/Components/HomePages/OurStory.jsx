import React from "react";
import OurStorypic from "../Images/Instagram.webp";
import { useNavigate } from 'react-router-dom';

function OurStory() {
  const navigate = useNavigate();
  const toOurStory = () => {
    navigate('/OurStory');
  };

  return (
    <div className="container-fluid Our-Story-main-Container d-flex align-item-center justify-content-around " /* border border-2 border-danger */>
        <p id="OurStory-Para" data-aos="fade-right">
          <h2>Our Story</h2>
          Sirimiri Candles, founded by Geetansha Ghai, is a vibrant startup dedicated to creating natural scented candles. Inspired by a passion for aromatherapy and a desire to promote wellness. Geetansha embarked on this entrepreneurial journey to craft candles that are not only aromatic but also beneficial for mental and physical health...
          <br />
          <br />
          <button onClick={toOurStory} id="OurStory-Button">Read Our Story</button>
        </p>
        <img className="CardBoxShadow" id="Ourstory-Img" src={OurStorypic} alt="candle picture" data-aos="fade-left" />
      </div>
  );
}

export default OurStory;
