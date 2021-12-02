import { StyledInput } from './index.styled';

function Input(props) {
    const { name, min, max, value } = props;
    return (
        <>
            <StyledInput type="number" id={name} name={name} min={min} max={max} value={value}></StyledInput>
        </>
    );
}

export default Input;
