import {ACTION_TYPE_SEARCH} from '../constants/actionType';

const initialState = {
  searching: false,
  users: [],
  nextPage: 0
}
const searchReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ACTION_TYPE_SEARCH.SEARCH_DOING:
      return {
        ...state,
        searching: true,
        nextPage: 0
      }
    case ACTION_TYPE_SEARCH.SEARCH_SUCCESS:
      return {
        ...state,
        searching: false,
        nextPage: action.nextPage,
        users: action.payload
      }
    case ACTION_TYPE_SEARCH.LOAD_MORE_SUCCESS:
      return {
        ...state,
        searching: false,
        nextPage: action.nextPage,
        users: [...state.users, ...action.payload]
      }
    case ACTION_TYPE_SEARCH.SEARCH_FAILED:
      return {
        ...state,
        searching: false
      }
    default:
      return state;
  }
}

export default searchReducer;