import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MyNavbar() {
  return (
    <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Directorio</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/estadisticas">Estadisticas</Nav.Link>
                    <Nav.Link href="/contacto">Contacto</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </>
  )
}

export default MyNavbar;