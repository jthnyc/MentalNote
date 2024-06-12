import { useState } from 'react';
import styled from 'styled-components';

export const Entry = ({ entry }) => {
    const chDisplayLimit = 200,
        chCountExceedsLimit = entry.content.length > chDisplayLimit,
        [ isTruncated, setIsTruncated ] = useState(chCountExceedsLimit),
        textToDisplay = isTruncated ? entry.content.substring(0, chDisplayLimit + 1) + '...' : entry.content,
        textHandler = () => {
            setIsTruncated(!isTruncated);
        };

    return (
        <EntryContainer>
            <h4>{entry.title}</h4>
            <span>{entry.date}</span>
            <EntryContent>
                {textToDisplay}
                {chCountExceedsLimit && <TextLengthButton onClick={textHandler}>{ isTruncated ? 'More' : 'Less' }</TextLengthButton>}    
            </EntryContent>
        </EntryContainer>
    )
}

const EntryContainer = styled.div`
    border: 0.0625rem solid #BF4F74;
    display: flex;
    flex-direction: column;
    padding: 1.5rem 1.5rem;
`;

const EntryContent = styled.p`
    letter-spacing: .0125rem;
    line-height: 1.25rem;
    text-align: start;
    text-indent: 1.5rem;
    text-overflow: ellipsis;
    word-wrap: break-word;
    &:first-letter {
        font-size: 1.25em;
        font-weight: 500;
        text-transform: capitalize;
    }
`;

const TextLengthButton = styled.button`
    background: transparent;
    border: 1px solid transparent;    
    cursor: pointer;
    outline: none;
    text-decoration: underline;
    text-underline-offset: 0.25rem;
`;