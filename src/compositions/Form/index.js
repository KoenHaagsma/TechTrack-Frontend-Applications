import Input from '../../components/Input/index.js';
import Label from '../../components/Label/index.js';

function Form(props) {
    return (
        <>
            <Label name="Value" value={`Max value`}></Label>
            <Input name="first-value" min="1" max="20"></Input>
            <button type="submit">Submit</button>
        </>
    );
}

export default Form;
