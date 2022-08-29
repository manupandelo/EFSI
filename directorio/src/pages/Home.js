import { useNavigate} from "react-router-dom"
import data from "../data/personas.js"

export default function Home() {
    const navigate = useNavigate()

    return (       
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-y-8">
            {data.map(p => (
                <div key={p.id} onClick={() => navigate(`/persona/${p.id}`)}>
                    <p>{p.nombre}</p>
                </div>
            ))}
        </div>
    )
}