import React, { useEffect, useState } from 'react'
import { SearchBarContainer, CustomSelect, SearchContainer, SearchResult } from './SearchBar.style'
import { useSelector, useDispatch } from "react-redux";
import { selectSearchboxItems } from '../../store/searchbar/searchbar.selector';
import { selectCategoriesMap } from '../../store/categories/category.selector'
import { setSearchBoxItem } from '../../store/searchbar/searchbar.action'
import { fetchCategoriesStart } from '../../store/categories/category.action';
import Searchbarbox from '../search-bar-box/Searchbarbox.compoenent';
export default function SearchBar() {
  const dispatch = useDispatch()
  const SearchBoxItem = useSelector(selectSearchboxItems)
  const CategoriesItem = useSelector(selectCategoriesMap)
  const [Soptions, setOptions] = useState('All')
  const [searchInput, setSearchInput] = useState('')
  const hangleOnchageSearch = (e) => {
    setSearchInput(e.target.value)

  }
  useEffect(() => {
    dispatch(setSearchBoxItem(CategoriesItem, searchInput, Soptions))
  }, [searchInput, Soptions])
  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);
  return (
    <SearchContainer>
      <SearchBarContainer>
        <CustomSelect onChange={(e) => setOptions(e.target.value.toString())}>
          <option>All</option>
          <option value='hats'>Hats</option>
          <option value='jackets'>Jackets</option>
          <option value="mens">Mens</option>
          <option value='womens'>Womens</option>
        </CustomSelect>
        <input type='text' placeholder='Search Product' value={searchInput} onChange={hangleOnchageSearch} />
      </SearchBarContainer>
      <SearchResult>
        {SearchBoxItem && SearchBoxItem.map((d) => <Searchbarbox name={d.name} imageUrl={d.imageUrl} id={d.id} />)}
      </SearchResult>
    </SearchContainer>
  )
}
