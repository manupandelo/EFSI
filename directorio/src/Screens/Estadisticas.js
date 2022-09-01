import data from "../personas.js"
import { Link } from "react-router-dom";
export default function Estadisticas() {
    let edadMayor = 0;
    let edadMenor = 100
    let personaMayor;
    let personaMenor;
    let contador = 0;
    data.forEach(p => {
        if (parseInt(p?.edad) > 35) {
        contador = contador + 1
        }
    
        if (parseInt(p?.edad) > edadMayor) {
        personaMayor = p.nombre
        edadMayor = p.edad
        }
    
        else if(parseInt(p?.edad) == edadMayor) {
        personaMayor = personaMayor + ' y ' + p.nombre
        }
        
        else if (parseInt(p?.edad) < edadMenor) {
        personaMenor = p.nombre
        edadMenor = p.edad
        }
        else if(parseInt(p?.edad) == edadMenor) {
        personaMenor = personaMenor + ' y ' + p.nombre
        }
    
    });
    return (
        <>
        <div>
            <Link to='/'>Home</Link>
            <Link to='/estadisticas'>Estadisticas</Link>
            <Link to='/contacto'> Contacto</Link>
            <p>La cantidad de personas mayores a 35 años son {contador}</p>
            <p>La persona mayor es {personaMayor}, con {edadMayor} años</p>
            <p>La persona menor es {personaMenor}, con {edadMenor} años</p>
        </div>
        </>
    )
}