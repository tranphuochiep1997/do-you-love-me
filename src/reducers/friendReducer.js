import {ACTION_TYPE_FRIEND} from '../constants/actionType';

const initialState = {
  friendProfile: {}
}
const friendReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ACTION_TYPE_FRIEND.GET_FRIEND_PROFILE_DOING:
      return {
        ...state,
        friendProfile: {
          name: "...",
          about: "...",
          status: "...",
          birthday: "...",
          gender: "...",
          email: "...",
          picture: "http://walyou.com/wp-content/uploads//2010/12/facebook-profile-picture-no-pic-avatar.jpg"
        }
      }
    case ACTION_TYPE_FRIEND.GET_FRIEND_PROFILE_SUCCESS:
      return {
        ...state,
        friendProfile: action.payload
      }
    default:
      return state;
  }
}

export default friendReducer;