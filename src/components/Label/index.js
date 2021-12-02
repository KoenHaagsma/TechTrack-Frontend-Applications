import { StyledLabel } from './index.styled';

function Label(props) {
    const { name, value } = props;
    return (
        <>
            <StyledLabel htmlFor={name}>{value}</StyledLabel>
        </>
    );
}

export default Label;
