import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Cita({citas, setCitas}) {
  const borrarCita = (i) => {
    console.log("Cita borrada");
    const newCitas = [...citas];
    newCitas.splice(i, 1);
    setCitas(newCitas);
  }

  return (
    <div className='scroll'> {citas.map((cita, i) =>
      <Card className='mb-3 me-3' style={{ width: '32.5rem' }} key={i}>
        <Card.Body>
          <p><strong>Mascota: </strong><span>{cita.mascota}</span></p>
          <p><strong>Dueño: </strong><span>{cita.owner}</span></p>
          <p><strong>Fecha: </strong><span>{cita.fecha}</span></p>
          <p><strong>Hora: </strong><span>{cita.hora}</span></p>
          <p><strong>Sintomas: </strong><span>{cita.sintomas}</span></p>
          <Button variant="primary" type="submit" className="w-100 boton2" onClick={() => {borrarCita(i)}}>
            ELIMINAR x
          </Button>
        </Card.Body>
      </Card>
    )}</div>
  );
}

/*<div style={{marginTop: '40px' }}>
    {citas.map((cita, i) => 
      <Card style={{ width: '18rem', backgroundColor: "#fff", paddingTop: '40px' }}>
        <ListGroup variant="flush">
          <ListGroup.Item>{cita.mascota}</ListGroup.Item>
          <ListGroup.Item>{cita.dueño}</ListGroup.Item>
          <ListGroup.Item>{cita.fecha}</ListGroup.Item>
          <ListGroup.Item>{cita.hora}</ListGroup.Item>
          <ListGroup.Item>{cita.sintomas}</ListGroup.Item>
        </ListGroup>
        <Button variant="primary" type="submit" className="w-100 boton2" onClick={() => {borrarCita(i)}}>
            ELIMINAR x
          </Button>
      </Card>
      )}
    </div>
*/