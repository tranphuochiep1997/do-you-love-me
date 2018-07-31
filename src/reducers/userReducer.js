import {ACTION_TYPE_AUTH, ACTION_TYPE_USER} from '../constants/actionType';

const credentials = JSON.parse(localStorage.getItem("credentials"));
const initialState = credentials ? {loggedIn: true, user: credentials.user} : {loggedIn: false}


const userReducer = (state = initialState, action = {}) => {
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
    case ACTION_TYPE_USER.UPDATE_USER_PROFILE_SUCCESS:
      return {
        ...state,
        user: action.payload
      }
    case ACTION_TYPE_USER.TOKEN_EXPIRED:
      return {
        ...state,
        user: {},
        loggedIn: false
      }
    default:
      return state;
  }
}

export default userReducer;