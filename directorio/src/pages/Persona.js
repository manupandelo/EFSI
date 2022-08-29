import { useParams } from "react-router-dom"
import data from "../data/personas.js"

export default function Persona() {
    const { id } = useParams()
    console.log(id)
    let persona=data.find(p => p.id === id)
    console.log(persona)
    return (
        <>
        <div>
            <p>Nombre: {persona.nombre}</p>
            <p>Apellido: {persona.apellido}</p>
            <p>Email: {persona.email}</p>
            <p>Edad: {persona.edad}</p>
        </div>
        </>
    )
}