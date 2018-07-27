import {ACTION_TYPE_USER} from '../constants/actionType';

const initialState = {
  user: {}
}

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ACTION_TYPE_USER.GET_USER_PROFILE_DOING:
      return {
        ...state,
        user: {
          name: "...",
          about: "...",
          status: "...",
          birthday: "...",
          gender: "...",
          email: "...",
          picture: "http://walyou.com/wp-content/uploads//2010/12/facebook-profile-picture-no-pic-avatar.jpg"
        }
      }
    case ACTION_TYPE_USER.GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        user: action.payload
      }
    case ACTION_TYPE_USER.GET_USER_PROFILE_FAILED:
      return {
        ...state,
        error: "failed"
      }
    case ACTION_TYPE_USER.UPDATE_USER_PROFILE_SUCCESS:
      return {
        ...state,
        user: action.payload
      }
    case ACTION_TYPE_USER.UPDATE_USER_PROFILE_FAILED:
      return {
        ...state, 
        error: "failed"
      }
    default:
      return state;
  }
}

export default userReducer;