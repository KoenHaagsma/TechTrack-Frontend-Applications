function Label(props) {
    const { name, value } = props;
    return (
        <>
            <label htmlFor={name}>{value}</label>
        </>
    );
}

export default Label;
