import styled from "styled-components";

export const MessageField = (props) => {
    const { fieldID, labelText, type, required, rowLength, columnLength } = props;

    return (
        <Label htmlFor={fieldID}>
            {labelText}
            <Text id={fieldID} type={type} required={required} rows={rowLength} cols={columnLength}></Text>
        </Label>
    )
}

const Label = styled.label`
    width: 100%;
`;

const Text = styled.textarea`
    font-size: 1rem;
    width: 100%;
    resize: none;
    scrollbar-width: none;
`;