import React from "react";
import Card from "../Card";
import { useEffect } from "react";


const Product = (param) => {
    const [products, setProducts] = React.useState([]);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${param.id}`)
        .then(res => res.json())
        .then(res => setProducts(res.products))
        .catch(err => console.error(err));
    }, []);

    return (
        <div className="content-body">
            { products.map(product => <Card key={product.id} product={product} />) }
        </div>
    );
}

export default Product;