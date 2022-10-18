import React from "react";
import { useEffect } from "react";
import Cards from "../Card";


const Inicio = () => {
    const [products, setProducts] = React.useState([]);

    useEffect(() => {
        fetch(`https://dummyjson.com/products?limit=6`)
        .then(res => res.json())
        .then(res => setProducts(res.products))
        .catch(err => console.error(err));
    }, []);

    return (
        <div className="content-body">
            { products.map(product => <Cards key={product.id} product={product} />) }
        </div>
    );
}

export default Inicio; 