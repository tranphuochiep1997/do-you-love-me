import {ACTION_TYPE_AUTH} from '../constants/actionType';

const user = JSON.parse(localStorage.getItem("user"));
const initialState = user ? {loggedIn: true, user} : {}

const authenticationReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ACTION_TYPE_AUTH.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loggedIn: true
      }
    case ACTION_TYPE_AUTH.LOGOUT_SUCCESS:
      return {
        ...state,
        user: {},
        loggedIn: false
      }
    default:
      return state;
  }
}

export default authenticationReducer;