import {ACTION_TYPE_USER} from '../constants/actionType';

const initialState = {
  users: []
}

const allUserReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ACTION_TYPE_USER.GET_ALL_USER_DOING:
      return {
        ...state,
        users: [{
        name: "...",
        about: "...",
        status: "...",
        birthday: "...",
        gender: "...",
        email: "...",
        picture: "http://walyou.com/wp-content/uploads//2010/12/facebook-profile-picture-no-pic-avatar.jpg"
        }]
      }
    case ACTION_TYPE_USER.GET_ALL_USER_SUCCESS:
      return {
        ...state,
        users: action.payload
      }
    case ACTION_TYPE_USER.GET_ALL_USER_FAILED:
      return {
        ...state,
        error: "failed"
      }
    default:
      return state;
  }
}

export default allUserReducer;