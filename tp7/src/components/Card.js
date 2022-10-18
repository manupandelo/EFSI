import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './Card.css';

const Cards = (props) => {
    return (
      <Col md={4}>
          <Card className='card borde' style={{ width: '18rem' }}>
            <Card.Img variant="top" className='imagen' src={props.product.thumbnail} />
            <Card.Body>
              <Card.Title>{props.product.title}</Card.Title>
              <Card.Text>
              {props.product.description}
              </Card.Text>
            </Card.Body>
          </Card>
      </Col>
    );
}

export default Cards;
