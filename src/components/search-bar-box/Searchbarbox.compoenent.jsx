import React from 'react'
import { SearchResultContainer } from './Searchbarbox.style'
export default function Searchbarbox({ name, imageUrl }) {
    return (
        <SearchResultContainer>
            <p>{name}</p>
            <img src={imageUrl} alt={imageUrl} />
        </SearchResultContainer>
    )
}
