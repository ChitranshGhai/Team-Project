import React from "react";
import first from "./Images/First.png";
import second from "./Images/Second.png";
import third from "./Images/Third.png";
import "./Style.css";
function ShopByCollection() {
  return (
    <div className="SBC-Main-Container">
      <h1 id="Main-Container-Heading">Shop By Collection</h1>

      {/* First Div */}
      <section className="Info-Section">
        <div className="Left-Side-Sec">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            doloribus nesciunt ut corporis quasi cum quaerat ullam cumque
            dolores. Numquam, delectus esse id aperiam inventore voluptatibus
            neque aliquam a quia? Pariatur, fugit. Illum distinctio assumenda
            reiciendis rerum natus facilis laudantium labore aliquam nulla
            provident possimus accusantium quasi vitae nostrum, quod quo
            exercitationem quaerat, omnis soluta in repudiandae veritatis quas?
            Laudantium?
          </p>
          <button>View</button>
        </div>
        <img src={first} alt="First candle" />
        <h1 id="over-img">Minimalistic</h1>
      </section>

      {/* Second Div */}
      <section className="Info-Section">
        <img src={second} alt="Second candle" />
        <h1 id="over-img2">Minimalistic</h1>
        <div className="Right-Side-Sec">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            doloribus nesciunt ut corporis quasi cum quaerat ullam cumque
            dolores. Numquam, delectus esse id aperiam inventore voluptatibus
            neque aliquam a quia? Pariatur, fugit. Illum distinctio assumenda
            reiciendis rerum natus facilis laudantium labore aliquam nulla
            provident possimus accusantium quasi vitae nostrum, quod quo
            exercitationem quaerat, omnis soluta in repudiandae veritatis quas?
            Laudantium?
          </p>
          <button>View</button>
        </div>
      </section>

      {/* Third Div */}
      <section className="Info-Section">
        <div className="Left-Side-Sec">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            doloribus nesciunt ut corporis quasi cum quaerat ullam cumque
            dolores. Numquam, delectus esse id aperiam inventore voluptatibus
            neque aliquam a quia? Pariatur, fugit. Illum distinctio assumenda
            reiciendis rerum natus facilis laudantium labore aliquam nulla
            provident possimus accusantium quasi vitae nostrum, quod quo
            exercitationem quaerat, omnis soluta in repudiandae veritatis quas?
            Laudantium?
          </p>
          <button>View</button>
        </div>
        <img src={third} alt="First candle" />
        <h1 id="over-img">Minimalistic</h1>
      </section>
    </div>
  );
}

export default ShopByCollection;
