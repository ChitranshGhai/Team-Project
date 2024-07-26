import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import SampleCandle from '../Images/sample.jpg'
import '../Style.css'

function RowColLayoutColWidthBreakpointExample() {
  return (
    <Container fluid>
      <Row md={3}>
        <Col>
        <Card style={{ width: '18rem', margin:'100px' }}>
      <Card.Img variant="top" src={SampleCandle} style={{height:'420px', width:'370px'}} />
      <Card.Body>
      <Card.Title style={{fontSize:'28px'}}>Card Title</Card.Title>
        <Card.Text style={{fontSize:'22px'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem', margin:'100px' }}>
        <Card.Img variant="top" src={SampleCandle} style={{height:'420px', width:'370px'}} />
      <Card.Body>
      <Card.Title style={{fontSize:'28px'}}>Card Title</Card.Title>
        <Card.Text style={{fontSize:'22px'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem', margin:'100px'}}>
        <Card.Img variant="top" src={SampleCandle} style={{height:'420px', width:'370px'}} />
      <Card.Body>
        <Card.Title style={{fontSize:'28px'}}>Card Title</Card.Title>
        <Card.Text style={{fontSize:'22px'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>
      </Row>
        <button id='ViewAll-Button'>
          View All
        </button>
      
    </Container>
    
  );
}

export default RowColLayoutColWidthBreakpointExample;