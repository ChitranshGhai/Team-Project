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
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="Slide-Image" src={FLASHSALE} alt="Second Slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="Slide-Image" src={Collectionpage} alt="Third Slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
