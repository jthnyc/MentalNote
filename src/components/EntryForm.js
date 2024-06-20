import { FormButton, Inputfield, MessageField } from "./form-components";
import styled from "styled-components";

export const EntryForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <Form onSubmit={handleSubmit}>
            <GridRow>
                <Inputfield labelText='Entry Title' />
            </GridRow>
            <GridRow>
                <MessageField rowLength='10' column='33' />
            </GridRow>
            <FormButton type='submit' label='Submit' />
        </Form>
    )
}

const Form = styled.form`
    display: grid;
    gap: 1rem;
    margin: 1rem 0;
    width: 31.25rem;
`;

const GridRow = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin: 0 1em;
`;