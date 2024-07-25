import React from 'react'
import Slider from './Slider';
import Inventory from './Inventory';
import OurStory from './OurStory';
import Contactus from './ContactUs';

function Home() {
  return (
    <div>
      <h1>This is Home Page</h1>
      <Slider/>
      <Inventory/>
      <OurStory/>
      <Contactus/>
    </div>
  )
}

export default Home
