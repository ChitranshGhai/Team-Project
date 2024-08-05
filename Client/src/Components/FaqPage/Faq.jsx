import Accordion from 'react-bootstrap/Accordion';
import './Faq.css'

function Faq() {
    return (
    <div className='Mainfr mb-5'>
      <h3>FAQs</h3>
      <Accordion  className='container m-auto mt-5' >
        <Accordion.Item eventKey="0">
          <Accordion.Header>What types of candles do you offer?</Accordion.Header>
          <Accordion.Body>
          We offer a wide variety of candles, including soy, beeswax, paraffin, and blended wax candles.
          Our collection features scented, unscented, jar, pillar, votive, and tea light candles.
          </Accordion.Body>
        </Accordion.Item>
  
  
        <Accordion.Item eventKey="1">
          <Accordion.Header>Are your candles handmade?</Accordion.Header>
          <Accordion.Body> Yes, all our candles are handmade with care to ensure the highest quality.
          </Accordion.Body>
        </Accordion.Item>
  
  
        <Accordion.Item eventKey="2">
          <Accordion.Header>Where are your candles made?</Accordion.Header>
          <Accordion.Body>
          Our candles are crafted in our workshop located in [Your City, Your State].
          </Accordion.Body>
        </Accordion.Item>
  
  
        <Accordion.Item eventKey="3">
          <Accordion.Header>Do you use natural ingredients?</Accordion.Header>
          <Accordion.Body>
          Yes, we use natural waxes, high-quality fragrance oils, and lead-free wicks in our candles.
          </Accordion.Body>
        </Accordion.Item>
  
  
        <Accordion.Item eventKey="4">
          <Accordion.Header>How can I place an order?</Accordion.Header>
          <Accordion.Body>
          You can place an order directly through our website by adding items to your cart and proceeding to checkout.
          </Accordion.Body>
        </Accordion.Item>
  
  
        <Accordion.Item eventKey="5">
          <Accordion.Header>How long will it take to receive my order?</Accordion.Header>
          <Accordion.Body>
          Orders are typically processed within 2-3 business days. Shipping times vary depending on your location,
           but most orders arrive within 5-7 business days.
          </Accordion.Body>
        </Accordion.Item>
  
        <Accordion.Item eventKey="6">
          <Accordion.Header>What is your return policy?</Accordion.Header>
          <Accordion.Body>
          We accept returns within 30 days of purchase. Items must be unused and in their original packaging.
           Please contact our customer service team to initiate a return.
          </Accordion.Body>
        </Accordion.Item>
  
        <Accordion.Item eventKey="7">
          <Accordion.Header>Can I exchange the candle if i dont like the scent?</Accordion.Header>
          <Accordion.Body>
          Yes, you can exchange a candle within 30 days of purchase. The item must be unused and in its original packaging.
           Please contact customer service to arrange an exchange.
          </Accordion.Body>
        </Accordion.Item>
  
        <Accordion.Item eventKey="8">
          <Accordion.Header>How long do your candles burn?</Accordion.Header>
          <Accordion.Body>
          Burn times vary by candle type and size. Our product descriptions include estimated burn times for each candle
          </Accordion.Body>
        </Accordion.Item>



        <Accordion.Item eventKey="9">
          <Accordion.Header>Do you provide custom order/bulk orders?</Accordion.Header>
          <Accordion.Body>
          Yes, we offer custom candles for special occasions, corporate events, and more. Please contact us to discuss your requirements.
          </Accordion.Body>
        </Accordion.Item>


        <Accordion.Item eventKey="10">
          <Accordion.Header>Are your candles eco-friendly?</Accordion.Header>
          <Accordion.Body>
          Yes, we prioritize sustainability by using natural waxes, eco-friendly packaging, and minimizing waste in our production process.
          </Accordion.Body>
        </Accordion.Item>


      </Accordion>
    </div>
    );
  }
  
  export default Faq;