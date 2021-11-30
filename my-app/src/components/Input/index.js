function Input(props) {
    const { name, min, max } = props;
    return (
        <>
            <input type="number" id={name} name={name} min={min} max={max}></input>
        </>
    );
}

export default Input;
