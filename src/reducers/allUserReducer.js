import {ACTION_TYPE_USER} from '../constants/actionType';


const initialState = {
  users: [],
  loading: false,
  nextPage: 0
}

const allUserReducer =  (state = initialState, action = {}) => {
  switch (action.type) {
    case ACTION_TYPE_USER.GET_ALL_USER_DOING:
      return {
        ...state,
        loading: true,
        nextPage: 0
      }
    case ACTION_TYPE_USER.GET_ALL_USER_SUCCESS:
      // const userWithoutCurrentUser = action.payload.filter(user =>{
      //   return user._id !== credentials.user._id;
      // });
      return {
        ...state,
        users: action.payload,
        nextPage: action.nextPage,
        loading: false
      }
    case ACTION_TYPE_USER.LOAD_MORE_USER_SUCCESS:
      // let currentUserId = JSON.parse(localStorage.getItem("credentials")).user._id;
      // const userWithoutCurrentUserLoadMore = action.payload.filter(user =>{
      //   return user._id !== currentUserId;
      // });
      return {
        ...state,
        users: [...state.users, ...action.payload],
        nextPage: action.nextPage,
        loading: false
      }
    case ACTION_TYPE_USER.GET_ALL_USER_FAILED:
      return {
        ...state,
        loading: false
      }
    default:
      return state;
  }
}

export default allUserReducer;