import {ACTION_TYPE_CHAT} from "../constants/actionType";

const initialState = {
  roomId: '',
  messageModels: [],
  nextPage: 0,
  loading: false,
  error: ""
}

const chatReducer = (state = initialState, action = {})=>{
  switch(action.type){
    case ACTION_TYPE_CHAT.ADD_MESSAGE_SUCCESS:
      return {
        ...state,
        messageModels: [...state.messageModels, action.payload]
      }
    case ACTION_TYPE_CHAT.ADD_MESSAGE_FAILED:
      return {
        ...state
      }
    case ACTION_TYPE_CHAT.SET_CURRENT_ROOMID:
      return {
        ...state,
        roomId: action.payload
      }
    case ACTION_TYPE_CHAT.FETCH_MESSAGE_HISTORY_SUCCESS:
      return {
        ...state,
        nextPage: action.nextPage,
        loading: false,
        messageModels: action.payload.reverse()
      }
    case ACTION_TYPE_CHAT.FETCH_MESSAGE_HISTORY_DOING:
      return {
        ...state,
        nextPage: 0,
        loading: true,
      }
    case ACTION_TYPE_CHAT.FETCH_MESSAGE_HISTORY_MORE_SUCCESS:
      return {
        ...state,
        nextPage: action.nextPage,
        loading: false,
        messageModels: [...action.payload.reverse(), ...state.messageModels]
      }
    case ACTION_TYPE_CHAT.FETCH_MESSAGE_HISTORY_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    default:
      return state;
  }
}

export default chatReducer;