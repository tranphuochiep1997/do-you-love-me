import {store} from "../store/store";
import {ACTION_TYPE_USER} from '../constants/actionType';
import {userService} from "../services/userService";

export const getAllUser = async() =>{
  try {
    const response = await userService.getAllUser(userID, user);
    if (!response.error){
      store.dispatch({
        type: ACTION_TYPE_USER.UPDATE_PROFILE_SUCCESS,
        payload: response.data
      });
    }else {
      store.dispatch({
        type: ACTION_TYPE_USER.UPDATE_PROFILE_FAILED
      });
    }
  } catch(err){
    console.log(err);
    store.dispatch({
      type: ACTION_TYPE_USER.UPDATE_PROFILE_FAILED
    });
  }
}