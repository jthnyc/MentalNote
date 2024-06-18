import { FormButton, Inputfield, MessageField } from "./form-components";
import styled from "styled-components";

export const EntryForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <Form onSubmit={handleSubmit}>
            <GridRow>
                <Inputfield />
                <Inputfield />
            </GridRow>
            <MessageField />
            <FormButton type='submit' label='Submit' />
        </Form>
    )
}

const Form = styled.form`
    display: grid;
    gap: 1rem;
    margin: 1rem 0;
    width: 500px;
`;

const GridRow = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
`;