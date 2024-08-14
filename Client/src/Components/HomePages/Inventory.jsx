/* import Container from "react-bootstrap/Container";
 */import { Link } from "react-router-dom";
/* import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"; */
import Card from "react-bootstrap/Card";
import SampleCandle from "../Images/sample.jpg";
import "./HomeStyle.css";


function RowColLayoutColWidthBreakpointExample() {  
  return (
    <>
      <div className="Inventory-Heading">
        <Link className="Inve-Heading-Link">
          <h1>Best Sellers</h1>
        </Link>
      </div>
      <div className="container-fluid d-flex flex-wrap align-items-center justify-content-center mt-3 p-0" /* border border-2 border-danger */>
        <div className="row m-5 d-flex justify-content-center">
          <div className="col-sm-12 col-md-4 align-self-center">
            <Card
              /* style={{ width: '22rem' }} */ className="rounded-0 border-0 CardBoxShadow"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1000"
            >
              <Card.Img
                variant="top"
                src={SampleCandle}
                className="rounded-0 CardImg" /* style={{height:'420px', width:'370px'}} */
              />
              <Card.Body className="text-center textbackg">
                {/* <Card.Title>Card Title</Card.Title> */}
                <Card.Text style={{ fontSize: "25px"}}>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-12 col-md-4 align-self-center">
            <Card
              /* style={{ width: '22rem' }} */ className="rounded-0 border-0 CardBoxShadow"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1200"
            >
              <Card.Img
                variant="top"
                src={SampleCandle}
                className="rounded-0 CardImg" /* style={{height:'420px', width:'370px'}} */

              />
              <Card.Body className="text-center textbackg">
                {/* <Card.Title>Card Title</Card.Title> */}
                <Card.Text style={{ fontSize: "25px" }}>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-12 col-md-4 align-self-center">
            <Card
              /* style={{ width: '22rem'}} */ className="rounded-0 border-0 CardBoxShadow "
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1400"
            >
              <Card.Img
                variant="top"
                src={SampleCandle}
                className="rounded-0 CardImg" /* style={{height:'420px', width:'370px'}} */
              />
              <Card.Body className="text-center textbackg">
                {/* <Card.Title>Card Title</Card.Title> */}
                <Card.Text style={{ fontSize: "25px" }}>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <Link to="/Candles" id="ViewAllBtnLink"><button id="ViewAll-Button">View All</button></Link>
    </>
  );
}

export default RowColLayoutColWidthBreakpointExample;
