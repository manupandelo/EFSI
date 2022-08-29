import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

export default function Contacto() {

    return (
        <div>
            <h2>Contactenos</h2>
            <Form >
              <p>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre:</Form.Label>
                    <Form.Control type="text" placeholder="Nombre" name="nombre" required />
                </Form.Group>
                </p>
                <p>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Apellido:</Form.Label>
                    <Form.Control type="text" placeholder="Apellido" name="apellido" required />
                </Form.Group>
                </p>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" placeholder="Email" name="email" class="u-full-width" required />
                </Form.Group>
                <p>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Edad:</Form.Label>
                    <Form.Control type="number" placeholder="Edad" name="edad" class="u-full-width" required />
                </Form.Group>
                </p>
                <Button variant="primary" type="submit" >
                    Agregar cita
                </Button>
            </Form>
        </div>
    );
}