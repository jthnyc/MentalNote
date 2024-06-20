import styled from "styled-components";

export const Inputfield = (props) => {
    const { fieldID, labelText, type, required } = props;

    return (
        <Label htmlFor={fieldID}>
            {labelText}
            <Input id={fieldID} type={type} required={required} placeholder={labelText} />
        </Label>
    )
}

const Label = styled.label`
    display: flex;
    flex-direction: column;
    font-size: 0.75rem;
    width: 100%;
`;

const Input = styled.input`
    font-size: 1.25rem;
    width: 100%;
`;