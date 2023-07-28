import React from 'react'
import { SearchResultContainer } from './Searchbarbox.style'
import { NavLink } from 'react-router-dom'
export default function Searchbarbox({ name, imageUrl, id }) {
    return (
        <NavLink to={`${id}`}>
            <SearchResultContainer>
                <p>{name}</p>
                <img src={imageUrl} alt={imageUrl} />
            </SearchResultContainer>
        </NavLink>

    )
}
