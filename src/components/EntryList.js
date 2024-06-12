import { useState } from 'react';
import axios from 'axios'
import styled from 'styled-components';
import { Entry } from './Entry';

export const EntryList = () => {
    const [ entries, setEntries ] = useState([]);

    const fetchEntries = () => {
        axios.get('http://localhost:8080').then(response => {
            if (response.status === 200) {
                const data = response.data;
                setEntries(data.entries);
            }
        })
    }

    return (
        <>
            <FetchButton onClick={fetchEntries}>Get Past Entries</FetchButton>
            <EntryListContainer>
                { entries && entries.map(entry => <Entry entry={entry} />)}
            </EntryListContainer>
        </>
    )
}

const FetchButton = styled.button`
    color: #BF4F74;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 0.125rem solid #BF4F74;
    border-radius: 0.1875rem;
`;

const EntryListContainer = styled.div`
    display: flex;
    gap: 1rem;
    flex-direction: column;
    justify-content: center;
    margin: 1rem 1.5rem;

    @media only screen and (min-width: 960px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem 2.5rem;
    }
`;