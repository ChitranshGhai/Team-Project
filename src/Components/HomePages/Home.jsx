import React from 'react'
import Slider from './Slider';
import Inventory from './Inventory';
import OurStory from './OurStory';
import Contactus from './ContactUs';
import HomeImage from '../Images/BackgroundImage.avif'
import './HomeStyle.css';

function Home() {
  return (
    <div>
      <img className='Home-Page-Image' src={HomeImage} alt="Home Candle Image" />
      <Slider/>
      <Inventory/>
      <OurStory/>
      <Contactus/>
    </div>
  )
}

export default Home
