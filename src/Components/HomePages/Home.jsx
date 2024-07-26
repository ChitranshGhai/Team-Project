import React from "react";
import Slider from "./Slider";
import Inventory from "./Inventory";
import OurStory from "./OurStory";
import Contactus from "./ContactUs";
import "./HomeStyle.css";

function Home() {
  return (
    <div>
      <Slider />
      <Inventory />
      <OurStory />
      <Contactus />
    </div>
  );
}

export default Home;
