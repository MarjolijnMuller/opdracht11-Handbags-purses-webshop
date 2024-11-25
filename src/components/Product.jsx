function Product(props){
    return (
        <article>
            <span>
                {props.extraInfo}
            </span>
            <img src={props.image}/>
            <p>
                {props.bagName}
            </p>
            <h4>
                {props.price}
            </h4>
        </article>
    )
}

export default Product;