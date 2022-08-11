import React, { useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './Components/Form.js';
import Card from './Components/Card.js';

function App() {
  const [citas, setCitas] = useState([])

  return (
    <div className="App">
      <header className="App-header">
        <h1>ADMINISTRADOR DE PACIENTES</h1>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <h2>CREAR MI CITA</h2>
             <Form setCitas={setCitas}></Form>
            </div>
            <div className='col-md-6'>
              <h2>ADMINISTRA TUS CITAS</h2>
              <div className='justify-content-center d-flex'>
              <Card citas={citas} setCitas={setCitas}></Card>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
