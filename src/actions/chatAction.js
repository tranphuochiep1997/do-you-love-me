import { store } from "../store/store";
import { ACTION_TYPE_CHAT } from '../constants/actionType';
import { messageService } from "../services/messageService";
import {config} from "../constants/config";

// messageModel = {
//   body: "message",
//   sender: userId,
//   roomId: roomId
// }

export const addMessage = async (messageModel) => {
  try {
    store.dispatch({
      type: ACTION_TYPE_CHAT.ADD_MESSAGE_SUCCESS,
      payload: messageModel
    });
  } catch(err){
    console.log(err);
    store.dispatch({
      type: ACTION_TYPE_CHAT.ADD_MESSAGE_FAILED,
    });
  }
}
export const setRoomId = async (roomId) => {
  try {
    store.dispatch({
      type: ACTION_TYPE_CHAT.SET_CURRENT_ROOMID,
      payload: roomId
    });
  } catch(err){
    console.log(err);
  }
  
}
export const fetchMessageHistory = async (roomId) => {
  try {
    store.dispatch({
      type: ACTION_TYPE_CHAT.FETCH_MESSAGE_HISTORY_DOING
    }); 
    let {token} = JSON.parse(localStorage.getItem("credentials"));
    const response = await messageService.getMessagesByRoomId({roomId, accessToken: token});
    if (!response.error){
      store.dispatch({
        type: ACTION_TYPE_CHAT.FETCH_MESSAGE_HISTORY_SUCCESS,
        nextPage: response.data.length >= config.LIMIT_REQUEST_MESSAGE ? 1 : 0,
        payload: response.data
      }); 
    } else {
      store.dispatch({
        type: ACTION_TYPE_CHAT.FETCH_MESSAGE_HISTORY_FAILED,
        error: response.message
      }); 
    }
  }catch(err){
    console.log(err);
    store.dispatch({
      type: ACTION_TYPE_CHAT.FETCH_MESSAGE_HISTORY_FAILED
    }); 
  }
}
export const fetchMessageHistoryMore = async (roomId, page=0) => {
  try {
    store.dispatch({
      type: ACTION_TYPE_CHAT.FETCH_MESSAGE_HISTORY_DOING
    }); 
    let {token} = JSON.parse(localStorage.getItem("credentials"));
    const response = await messageService.getMessagesByRoomId({roomId, page, accessToken: token});
    if (!response.error){
      console.log("Fetch more success");
      console.log("nextPage: " + response.data.length >= config.LIMIT_REQUEST_MESSAGE ? ++page : 0);
      store.dispatch({
        type: ACTION_TYPE_CHAT.FETCH_MESSAGE_HISTORY_MORE_SUCCESS,
        nextPage: response.data.length >= config.LIMIT_REQUEST_MESSAGE ? ++page : 0,
        payload: response.data
      }); 
    } else {
      console.log("Fetch more failed");
      store.dispatch({
        type: ACTION_TYPE_CHAT.FETCH_MESSAGE_HISTORY_FAILED,
        error: response.message
      }); 
    }
  }catch(err){
    console.log(err);
    store.dispatch({
      type: ACTION_TYPE_CHAT.FETCH_MESSAGE_HISTORY_FAILED
    }); 
  }
}

