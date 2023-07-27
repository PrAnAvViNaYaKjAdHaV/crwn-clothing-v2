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
  const [searchInput, setSearchInput] = useState('')
  const hangleOnchageSearch = (e) => {
    setSearchInput(e.target.value)

  }
  useEffect(() => {
    dispatch(setSearchBoxItem(CategoriesItem, searchInput))
  }, [searchInput])
  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);
  return (
    <SearchContainer>
      <SearchBarContainer>
        <CustomSelect>
          <option value="">All</option>
          <option value="">Cap</option>
          <option value="">Cap</option>
          <option value="">Cap</option>
          <option value="">Cap</option>
        </CustomSelect>
        <input type='text' placeholder='Search Product' value={searchInput} onChange={hangleOnchageSearch} />
      </SearchBarContainer>
      <SearchResult>
        {SearchBoxItem && SearchBoxItem.map((d) => <Searchbarbox name={d.name} imageUrl={d.imageUrl} />)}
      </SearchResult>
    </SearchContainer>
  )
}
