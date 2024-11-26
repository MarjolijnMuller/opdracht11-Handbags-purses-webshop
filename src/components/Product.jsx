function renderBestSeller(isBestSeller) {
    if (isBestSeller) {
        return <p>Best seller</p>;
    }
    return null
}

function renderNewCollection(isNewCollection) {
    if (isNewCollection) {
        return <p>New collection</p>;
    }
    return null
}

function Product(props){
    return (
        <article>
            <span>
                {renderBestSeller(props.isBestSeller)}
                {renderNewCollection(props.isNewCollection)}
            </span>
            <img src={props.image} alt={props.imageAltText}/>
            <p>
                {props.bagName}
            </p>
            <h4>
                €{props.price},-
            </h4>
        </article>
    )
}

export default Product;