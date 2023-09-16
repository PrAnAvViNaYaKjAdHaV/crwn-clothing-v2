import React from 'react'
import { SearchResultContainer } from './Searchbarbox.style'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setSearchBoxCleared } from '../../store/searchbar/searchbar.action';
export default function Searchbarbox({ name, imageUrl, id, setSearchInput }) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    return (
        <div>
            <SearchResultContainer onClick={() => {
                navigate(`/${id}`)
                dispatch(setSearchBoxCleared())
                setSearchInput('')
            }} >
                <p>{name}</p>
                <img src={imageUrl} alt={imageUrl} />
            </SearchResultContainer>
        </div>

    )
}
