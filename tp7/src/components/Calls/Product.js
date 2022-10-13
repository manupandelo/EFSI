import React from "react";
import ComponentProduct from "../../views/Products";
import { useEffect } from "react";


const Product = (param) => {
    const [products, setProducts] = React.useState([]);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${param}`)
        .then(res => res.json())
        .then(res => setProducts(res.products))
        .catch(err => console.error(err));
    }, []);

    return (
        <div className="content-body">
            { products.map(product => <ComponentProduct key={product.id} product={product} />) }
            { products.map(product => <ComponentProduct key={product.id} product={product} />) }
        </div>
    );
}

export default Product;