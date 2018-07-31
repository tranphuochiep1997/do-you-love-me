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
          picture: "https://scontent.fdad2-1.fna.fbcdn.net/v/t1.0-1/c47.0.160.160/p160x160/10354686_10150004552801856_220367501106153455_n.jpg?_nc_cat=0&oh=64e8f9fb1b3f0e70939b56f91adca78d&oe=5C0C2B49"
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