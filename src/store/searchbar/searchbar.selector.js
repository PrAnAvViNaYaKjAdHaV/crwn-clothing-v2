import { createSelector } from 'reselect';

const selectSearchbarReducer = (state) => state.searchbar;

export const selectSearchboxItems= createSelector(
  [selectSearchbarReducer],
  (searchbar) => searchbar.searchbox
);
