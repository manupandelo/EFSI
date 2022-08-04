import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from "react";

function Example() {
    const [cita, setCita] = {
        mascota: "",
        dueño: "",
        fecha: "",
        hora: "",
        sintomas: ""
    };

}

function Forms() {
    return (
        <Form>
            <Form.Label class="label">Nombre Mascota</Form.Label>
            <Form.Control type="text" placeholder="Nombre Mascota" name="mascota"/>

            <Form.Label class="label margen">Nombre Dueño</Form.Label>
            <Form.Control type="text" placeholder="Nombre dueño de la mascota" name="dueño" />

            <Form.Label class="label margen">Fecha</Form.Label>
            <Form.Control type="date" name="fecha" />

            <Form.Label class="label margen">Hora</Form.Label>
            <Form.Control type="time" name="hora" />

            <Form.Label class="label margen">Sintomas</Form.Label>
            <Form.Control type="text" name="sintomas" />

            <div className="d-grid pt-4">
                <Button variant="primary" type="submit" size="lg">
                    AGREGAR CITA
                </Button>
            </div>
        </Form>
    );
}

export default Forms;