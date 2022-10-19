import React from "react";
import { useEffect } from "react";
import Cards from "../Card";
import { Container, Row, Col } from 'react-bootstrap';
import '../../index.css';
import { useNavigate} from "react-router-dom"

const Inicio = () => {
    const [products, setProducts] = React.useState([]);
    const navigate = useNavigate()
    
    useEffect(() => {
        fetch(`https://dummyjson.com/products?limit=6`)
        .then(res => res.json())
        .then(res => setProducts(res.products))
        .catch(err => console.error(err));
    }, []);

    return (
        <Container>
                <br></br>
                   <h5 className="texto">Productos destacados</h5>
                <Row md={3}>
                    { products.map(product => <Cards key={product.id} product={product} onClick={() => navigate(`/products/${product.id}`)}  />) }
                </Row>
        </Container>
    );
}

export default Inicio; 