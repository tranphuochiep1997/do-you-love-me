import {store} from "../store/store";
import {ACTION_TYPE_USER} from '../constants/actionType';
import {userService} from "../services/userService";

export const getUserProfile = async ()=> {
  store.dispatch({
    type: ACTION_TYPE_USER.GET_USER_PROFILE_DOING
  });
  const {user, token} = JSON.parse((localStorage.getItem('user')));
  try {
    let getResponse = await userService.getUserById(user._id);
    if (!getResponse.error) {
      store.dispatch({
        type: ACTION_TYPE_USER.GET_USER_PROFILE_SUCCESS,
        payload: getResponse.data
      });
    } 
    store.dispatch({
      type: ACTION_TYPE_USER.GET_USER_PROFILE_FAILED,
    });
  } catch(err) {
    console.log(err);
    store.dispatch({
      type: ACTION_TYPE_USER.GET_USER_PROFILE_FAILED
    });
  }
}

export const updateProfile = async(newUser) =>{
  try {
    let data = JSON.parse(localStorage.getItem("credentials"));
    const response = await userService.updateUser({userId: data.user._id, user: newUser, accessToken: data.token});
    if (!response.error){
      data.user = response.data;
      localStorage.setItem("credentials", JSON.stringify(data));
      store.dispatch({
        type: ACTION_TYPE_USER.UPDATE_USER_PROFILE_SUCCESS,
        payload: response.data
      });
    }else if (response.message === "invalid_token"){
        localStorage.setItem("credentials", JSON.stringify(data));
        store.dispatch({
          type: ACTION_TYPE_USER.TOKEN_EXPIRED
        });
      }else {
        store.dispatch({
          type: ACTION_TYPE_USER.UPDATE_USER_PROFILE_FAILED
        });
      }
  } catch(err){
    console.log(err);
    store.dispatch({
      type: ACTION_TYPE_USER.UPDATE_USER_PROFILE_FAILED
    });
  }
}
export const getAllUser = async() =>{
  try {
    store.dispatch({
      type: ACTION_TYPE_USER.GET_ALL_USER_DOING
     });
    const response = await userService.getAllUser();
    if (!response.error){
      store.dispatch({
        type: ACTION_TYPE_USER.GET_ALL_USER_SUCCESS,
        payload: response.data
      });
    }else {
      store.dispatch({
        type: ACTION_TYPE_USER.GET_ALL_USER_FAILED
      });
    }
  } catch(err){
    console.log(err);
    store.dispatch({
      type: ACTION_TYPE_USER.GET_ALL_USER_FAILED
    });
  }
}