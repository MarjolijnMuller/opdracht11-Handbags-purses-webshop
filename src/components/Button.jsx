function Button(props) {
    return (
        <button type='button' disabled={props.disabled}>
            {props.buttonName}
        </button>
    )
}

export default Button;