import {ACTION_TYPE_CHAT} from "../constants/actionType";

const initialState = {
  roomId: '',
  messageModels: []
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
    case ACTION_TYPE_CHAT.FETCH_MESSAGE_HISTORY:
      return {
        ...state,
        messageModels: action.payload
      }
    default:
      return state;
  }
}

export default chatReducer;