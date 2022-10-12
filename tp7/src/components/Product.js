const Product = (props) => {
    return (
        <div>
            id: {props.product.id} - title: {props.product.title} - descripcion: {props.product.description}
        </div>
    );
}

export default Product;