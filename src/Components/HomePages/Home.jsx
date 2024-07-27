import React from "react";
import Slider from "./Slider";
import Inventory from "./Inventory";
import OurStory from "./OurStory";
import Social from "./Socials";
import "./HomeStyle.css";

function Home() {
  return (
    <div>
      <Slider />
      <Inventory />
      <OurStory />
      <Social />
    </div>
  );
}

export default Home;
