import { useState } from 'react';
import axios from 'axios'
import styled from 'styled-components';

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
            <button onClick={fetchEntries}>Get Past Entries</button>
            <EntryListContainer>
                { entries && entries.map(entry => <div key={entry.id}>{entry.title}</div>)}
            </EntryListContainer>
        </>
    )
}

const EntryListContainer = styled.div`
    display: flex;
`;