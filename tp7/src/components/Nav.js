import logo from '../images/Logo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/"><img src={logo} alt="logo"  style={{width:"60px", height:"70px"}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="/">INICIO</Nav.Link>
            <Nav.Link href="/nosotros">QUIENES SOMOS</Nav.Link>
            <Nav.Link href="/products">PRODUCTOS</Nav.Link>
            <Nav.Link href="/contact">CONTACTO</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Header;
