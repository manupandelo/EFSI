import { Link } from 'react-router-dom';
import './Nav.css';
import Logo from '../../images/Logo.png'
const Nav = () => {
  return (
    <div style={{position: "fixed", width: "100%"}}>
      <ul>
        <li><Link to='/'>INICIO</Link></li>
        <li><Link to='/'>QUIENES SOMOS</Link></li>
        <li><Link to='/products'>PRODUCTOS</Link></li>
        <li><Link to='/'>CONTACTO</Link></li>
      </ul>
    </div>
  );
}

export default Nav;