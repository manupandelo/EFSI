import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './Card.css';
import { useNavigate } from "react-router-dom"
import { arrayOf } from 'prop-types';
import { ProductShape } from "../Shapes/ProductShape";

const Cards = ({props}) => {
  const navigate = useNavigate()
    return (
      <Col md={4}>
        <div onClick={() => navigate(`/products/${props.id}`)}>
          <Card className='card borde' style={{ width: '18rem' }}>
            <Card.Img variant="top" className='imagen' src={props.thumbnail} />
            <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              <Card.Text>
              {props.description}
              </Card.Text>
            </Card.Body>
          </Card>
          </div>
      </Col>
    );
}

Cards.propTypes = {
  props: ProductShape.isRequired
}

export default Cards;
