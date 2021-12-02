import { StyledTitle } from './index.styled';

function Title(props) {
    const { value } = props;
    return (
        <>
            <StyledTitle>{value}</StyledTitle>
        </>
    );
}

export default Title;
