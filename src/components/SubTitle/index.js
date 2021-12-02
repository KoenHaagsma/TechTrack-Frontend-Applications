import { StyledSubTitle } from './index.styled';

function SubTitle(props) {
    const { value } = props;
    return (
        <>
            <StyledSubTitle>{value}</StyledSubTitle>
        </>
    );
}

export default SubTitle;
