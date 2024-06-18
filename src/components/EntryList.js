import { useState } from 'react';
import axios from 'axios'
import styled from 'styled-components';
import { Entry } from './Entry';
import { FormButton } from './form-components';

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
            <FormButton handler={fetchEntries} label='Get Past Entries' />
            <EntryListContainer>
                { entries && entries.map(entry => <Entry key={entry.id} entry={entry} />)}
            </EntryListContainer>
        </>
    )
}

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