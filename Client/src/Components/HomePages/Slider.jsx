import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Collectionpage from "../Images/Collectionpage.png"
import Welcomepage from "../Images/Welcomepage.png"
import FLASHSALE from "../Images/FLASHSALE.png"

function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      /* className="border border-2 border-danger mt-3" */
    >
      <Carousel.Item>
        <img className="Slide-Image" src={Welcomepage} alt="First Slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="Slide-Image" src={FLASHSALE} alt="Second Slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="Slide-Image" src={Collectionpage} alt="Third Slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
