function Input(props) {
    const { name, min, max, value } = props;
    return (
        <>
            <input type="number" id={name} name={name} min={min} max={max} value={value}></input>
        </>
    );
}

export default Input;
