import React from "react";
import Card from "../Card";
import { useEffect } from "react";


const SpecificProduct = (id) => {
    const [product, setProduct] = React.useState([]);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then(res => setProduct(res))
        .catch(err => console.error(err));
    }, []);
    console.log(product)

    return product;
}

export default SpecificProduct;