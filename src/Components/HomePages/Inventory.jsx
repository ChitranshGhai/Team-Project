import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import SampleCandle from '../Images/sample.jpg'
import './HomeStyle.css'

function RowColLayoutColWidthBreakpointExample() {
  return (
    <>
    <div className='container-fluid d-flex flex-wrap align-items-center justify-content-center border border-2 border-danger mt-3 p-0'>
      <div className='row m-5 d-flex justify-content-center'>
        <div className='col-sm-12 col-md-4 align-self-center'>
        <Card /* style={{ width: '22rem' }} */ className='rounded-0 border-0'>
      <Card.Img variant="top" src={SampleCandle}  className='rounded-0'/* style={{height:'420px', width:'370px'}} */ />
      <Card.Body className='text-center'>
      {/* <Card.Title>Card Title</Card.Title> */}
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
        <div className='col-sm-12 col-md-4 align-self-center'>
        <Card /* style={{ width: '22rem' }} */ className='rounded-0 border-0'>
        <Card.Img variant="top" src={SampleCandle} className='rounded-0'/* style={{height:'420px', width:'370px'}} */ />
      <Card.Body className='text-center'>
      {/* <Card.Title>Card Title</Card.Title> */}
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
        <div className='col-sm-12 col-md-4 align-self-center'>
        <Card /* style={{ width: '22rem'}} */ className='rounded-0 border-0'>
        <Card.Img variant="top" src={SampleCandle} className='rounded-0'/* style={{height:'420px', width:'370px'}} */ />
      <Card.Body className='text-center'>
        {/* <Card.Title>Card Title</Card.Title> */}
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
      </div>
    </div>
    <button id='ViewAll-Button'>
      View All
    </button>
    </>
  );
}

export default RowColLayoutColWidthBreakpointExample;