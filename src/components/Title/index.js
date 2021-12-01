import { StyleTitle } from './index.styled';

function Label(props) {
    const { value } = props;
    return (
        <>
            <StyleTitle>{value}</StyleTitle>
        </>
    );
}

export default Label;
