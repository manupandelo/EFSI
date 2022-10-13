import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ComponentProduct = (props) => {
    return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.product.thumbnail} />
      <Card.Body>
        <Card.Title>{props.product.title}</Card.Title>
        <Card.Text>
        id: {props.product.id} - descripcion: {props.product.description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    );
}

export default ComponentProduct;
