import { SEARCHBOX_ACTION_TYPE } from './searchbar.types'
import { createAction } from "../../utils/reducer/reducer.utils";
// console.log(d['name'].replace(/\s+/g, '').toLowerCase())
const SearchResult = (searchboxItem, newItem, Soptions) => {
       let ans = []
       if (newItem.length !== 0) {
              if (Soptions === 'All') {
                     const Ans = Object.values(searchboxItem).map((data) => data.filter(d => {
                            const name = d['name'].replace(/\s+/g, '').toLowerCase()
                            const search = newItem.replace(/\s+/g, '').toLowerCase()
                            return name.startsWith(search)
                     }))
                     ans = [].concat(...Ans)
              } else {

                     ans = searchboxItem[Soptions].filter(d => {
                            const name = d['name'].replace(/\s+/g, '').toLowerCase()
                            const search = newItem.replace(/\s+/g, '').toLowerCase()
                            return name.startsWith(search)
                     })
                     console.log(ans)
              }

       }
       return ans
}

export const setSearchBoxItem = (searchBoxItem, newItem, Soptions) => {
       const newSearchBoxItem = SearchResult(searchBoxItem, newItem, Soptions)
       return createAction(SEARCHBOX_ACTION_TYPE.SEARCH_RESULTS_RECEIVED, newSearchBoxItem)
}