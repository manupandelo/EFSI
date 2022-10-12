import React from "react";
import Product from "../Product";
import { useEffect } from "react";
import './Products.css'

const Products = () => {
    const [products, setProducts] = React.useState([]);

    useEffect(() => {
        fetch(`https://dummyjson.com/products`)
        .then(res => res.json())
        .then(res => setProducts(res.products))
        .catch(err => console.error(err));
    }, []);

    return (
        <div className="content-body">
            { products.map(product => <Product key={product.id} product={product} />) }
            { products.map(product => <Product key={product.id} product={product} />) }
        </div>
    );
}

export default Products;