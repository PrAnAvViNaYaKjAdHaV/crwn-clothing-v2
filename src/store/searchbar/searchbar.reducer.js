import { SEARCHBOX_ACTION_TYPE } from './searchbar.types'

export const SEARCHBOX_INITIAL_STATE = {
  search: '',
  searchbox: [],
};

export const searchbarReducer = (state = SEARCHBOX_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case SEARCHBOX_ACTION_TYPE.SEARCH_INPUT_CHANGED:
      return {
        ...state,
        search: payload,
      };
    case SEARCHBOX_ACTION_TYPE.SEARCH_RESULTS_RECEIVED:
      return {
        ...state,
        searchbox: payload,
      };
    case SEARCHBOX_ACTION_TYPE.SEARCH_RESULTS_CLEARED:
      return {
        ...state, searchbox: []
      }
    default:
      return state;
  }
};
