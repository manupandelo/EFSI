import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Layout from "./Layout"
import Estadisticas from "./Screens/Estadisticas";
import Home from "./Screens/Home"
import Persona from "./Screens/Persona";
import Contacto from "./Screens/Contacto";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="persona/:id" element={<Persona />} />
        <Route path="estadisticas" element={<Estadisticas />} />
        <Route path="contacto" element={<Contacto />} />
      </Route>
    </Routes>
  </BrowserRouter>
);