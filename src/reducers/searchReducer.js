import {ACTION_TYPE_SEARCH} from '../constants/actionType';

const initialState = {
  searching: false,
  users: []
}
const searchReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ACTION_TYPE_SEARCH.SEARCH_DOING:
      return {
        ...state,
        searching: true
      }
    case ACTION_TYPE_SEARCH.SEARCH_SUCCESS:
      return {
        ...state,
        searching: false,
        users: action.payload
      }
    case ACTION_TYPE_SEARCH.SEARCH_FAILED:
      return {
        ...state,
        searching: false,
      }
    default:
      return state;
  }
}

export default searchReducer;