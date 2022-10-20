import { useParams } from "react-router-dom"
import SpecificProduct from "../components/Services/SpecificProduct"

const SingleProduct = () => {
    const { id } = useParams()
    console.log(id)
    const Product=SpecificProduct(id)
    return(
        <div>
            <h1>{Product.title}</h1>
            <img src={Product.thumbnail}></img>
            <h1>{Product.description}</h1>
            <h1>Precio: ${Product.price}</h1>

    
        </div>
    )


    
}

export default SingleProduct