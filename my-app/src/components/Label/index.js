function Label(props) {
    const { name, value } = props;
    return (
        <>
            <label for={name}>{value}</label>
        </>
    );
}

export default Label;
