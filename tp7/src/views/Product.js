import { useParams } from "react-router-dom"
import SpecificProduct from "../components/Services/SpecificProduct"
import delta from '../images/delta.png';
import ferrum from '../images/ferrum.png';
import logoips from '../images/logo_ips.png';
import logonegativo from '../images/Logo-Negativo.png';
import { Container, Row, Col } from 'react-bootstrap';
import '../index.css';

const SingleProduct = () => {
    const { id } = useParams()
    console.log(id)
    const Product=SpecificProduct(id)
    return(
        <div>
            <h1>{Product.title}</h1>
            <img src={Product.thumbnail}></img>
            <h1>{Product.description}</h1>
            <h1>Precio: ${Product.price}</h1>
            <hr className="espacio" />
            <Container>
                <h4 className="texto"><b>Marcas con las que trabajamos</b></h4>
                <Row>
                    <Col md={4}> <img src={ferrum} alt="Ikea" className="ads" /> </Col>
                    <Col md={4}> <img src={delta} alt="Ikea" className="ads" /> </Col>
                    <Col md={3}> <img src={logonegativo} alt="Ikea" className="ads" /> </Col>
                    <Col md={1}> <img src={logoips} alt="Ikea" className="ads" /> </Col>
                </Row>
            </Container>
        </div>
    )


    
}

export default SingleProduct