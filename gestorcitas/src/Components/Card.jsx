import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


const Cards = ( props ) => (

        <div class="card">
            <p>Mascota:{props.mascota}</p>
            <p>Dueno: {props.dueño}</p>
            <p>Fecha: {props.fecha}</p>
            <p>Hora: {props.hora}</p>
            <p>Sintomas:{props.sintomas}</p>
            <Button>Eliminar ×</Button>
        </div>
)

export default Cards;