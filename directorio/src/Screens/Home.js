import { useNavigate} from "react-router-dom"
import data from "../personas.js"
import { Link } from "react-router-dom"

export default function Home() {
    const navigate = useNavigate()

    return (       
        <div>
            <Link to='/'>Home</Link>
            <Link to='/estadisticas'>Estadisticas</Link>
            <Link to='/contacto'> Contacto</Link>
            {data.map(p => (
                <div key={p.id} onClick={() => navigate(`/persona/${p.id}`)}>
                    <p>{p.nombre}</p>
                </div>
            ))}
        </div>
    )
}