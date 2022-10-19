import { Container, Row, Col } from 'react-bootstrap';
import logo_byn from '../images/logo_byn.png';
import ubicacion from '../images/ubicacion.png';
import mail from '../images/mail.png';
import tel from '../images/tel.png';
import Image from 'react-bootstrap/Image'
import '../index.css'

const Footer = () => {
    return (
        <footer id="footer" class="navbar bg-dark">
        <div class="container">
                <div >
                  <Image src={logo_byn} class="imgfooter"/>
                </div>
                <div id="centrofooter">
                  <Image src={ubicacion} width="25" class="foot"/>
                        Beiro 3300 - Villa del Parque
                  <br></br>
                    <Image src={mail}  width="25" class="foot"/>
                        contacto@sanitarioscampana.com.ar
                  </div>
                <div class="celular">
                        <Image src={tel} width="30"/>
                       4503-6015
                   
                </div>
            </div>
        
      
    </footer>
    )
}

export default Footer;