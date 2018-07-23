import {store} from "../store/store";
import {ACTION_TYPE_AUTH} from '../constants/actionType';

export const loginSuccess = ({userID, accessToken})=> {
  localStorage.setItem("user", JSON.stringify({userID, accessToken}));
  store.dispatch({
    type: ACTION_TYPE_AUTH.LOGIN_SUCCESS,
    payload: {
      userID,
      accessToken
    }
  });
}
export const logoutSuccess = ()=> {
  localStorage.removeItem("user");
  store.dispatch({
    type: ACTION_TYPE_AUTH.LOGOUT_SUCCESS
  });
}
export const logout = ()=> {
  localStorage.removeItem("user");
  store.dispatch({
    type: ACTION_TYPE_AUTH.LOGOUT_SUCCESS
  });
}