import { store } from "../store/store";
import { ACTION_TYPE_FRIEND } from '../constants/actionType';
import { userService } from "../services/userService";

export const getFriendProfile = async (userId) => {
  store.dispatch({
    type: ACTION_TYPE_FRIEND.GET_FRIEND_PROFILE_DOING
  });
  const response = await userService.getUserByFacebookId(userId);
  store.dispatch({
    type: ACTION_TYPE_FRIEND.GET_FRIEND_PROFILE_SUCCESS,
    payload: response.data
  });
}


