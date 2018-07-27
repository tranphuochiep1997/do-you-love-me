import {store} from "../store/store";
import {ACTION_TYPE_USER} from '../constants/actionType';
import {userService} from "../services/userService";
import {FacebookApi} from "../helpers/FacebookApi";

export const getUserProfile = async ()=> {
  store.dispatch({
    type: ACTION_TYPE_USER.GET_USER_PROFILE_DOING
  });
  const {userID, accessToken} = JSON.parse((localStorage.getItem('user')));
  try {
    let getResponse = await userService.getUserByFacebookId(userID);
    if (!getResponse.error) {
      store.dispatch({
        type: ACTION_TYPE_USER.GET_USER_PROFILE_SUCCESS,
        payload: getResponse.data
      });
    } else if (getResponse.message === "user_not_exist"){
      const user = await FacebookApi.getUser({userID, accessToken});
      if (!user.error){
        user.facebookId = user.id;
        delete user.id;
        const createdUser = await userService.createNewUser(user);
        if (!createdUser.error){
          store.dispatch({
            type: ACTION_TYPE_USER.GET_USER_PROFILE_SUCCESS,
            payload: createdUser.data
          });
        } else {
          store.dispatch({
            type: ACTION_TYPE_USER.GET_USER_PROFILE_FAILED,
          });
        }
        
      } else{
        store.dispatch({
          type: ACTION_TYPE_USER.GET_USER_PROFILE_FAILED
        });
      }
      
    }
  } catch(err) {
    console.log(err);
    store.dispatch({
      type: ACTION_TYPE_USER.GET_USER_PROFILE_FAILED
    });
  }
}

export const updateProfile = async(user) =>{
  try {
    const userID = JSON.parse(localStorage.getItem("user")).userID;
    const response = await userService.updateUser(userID, user);
    if (!response.error){
      store.dispatch({
        type: ACTION_TYPE_USER.UPDATE_USER_PROFILE_SUCCESS,
        payload: response.data
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