import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './components/navbar';
import Cards from './components/cards';
import Footer from './components/footer';
import inscripcion from './/images/inscipcion.jpeg';
import Banner from './components/banner';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <Banner />
    <Cards 
          titulo="Inscripción ciclo lectivo 2021 - Nivel Secundario"
          texto="Por la gran cantidad de solicitudes, debimos cerrar la inscripción al curso de ingreso 2020, para iniciar en el ciclo
          2021 del nivel secundario de nuestra Escuela. ¡Muchas gracias a todos por confiar en nuestro proyecto educativo!"
          img={inscripcion}
    />
    <Footer />
  </React.StrictMode>
);
