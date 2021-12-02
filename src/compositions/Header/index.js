import Title from '../../components/Title/index';
import SubTitle from '../../components/SubTitle/index';
import { StyledHeader } from './index.styled';

function Header(props) {
    return (
        <>
            <StyledHeader>
                <Title value="Pokemon comparison"></Title>
                <SubTitle value="Pokemon height (meters) comparison chart"></SubTitle>
            </StyledHeader>
        </>
    );
}

export default Header;
