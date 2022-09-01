import { useParams } from "react-router-dom"
import data from "../personas.js"
import { Link } from "react-router-dom"

export default function Persona() {
    const { id } = useParams()
    console.log(id)
    let persona=data.find(p => p.id === id)
    console.log(persona)
    return (
        <>
        <div>
            <Link to='/'>Home</Link>
            <Link to='/estadisticas'>Estadisticas</Link>
            <Link to='/contacto'> Contacto</Link>
            <p>Nombre: {persona.nombre}</p>
            <p>Apellido: {persona.apellido}</p>
            <p>Email: {persona.email}</p>
            <p>Edad: {persona.edad}</p>
        </div>
        </>
    )
}