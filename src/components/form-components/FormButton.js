import styled from 'styled-components';

export const FormButton = ({ type, label, handler }) => {
    return (
        <Button type={type} onClick={handler}>{label}</Button>
    )
}

const Button = styled.button`
    color: #BF4F74;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 0.125rem solid #BF4F74;
    border-radius: 0.1875rem;
`;