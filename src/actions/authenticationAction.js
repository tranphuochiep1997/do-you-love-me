import {store} from "../store/store";
import {ACTION_TYPE_AUTH} from '../constants/actionType';

export const logout = ()=> {
  localStorage.removeItem("credentials");
  store.dispatch({
    type: ACTION_TYPE_AUTH.LOGOUT_SUCCESS
  });
}
export const loginSuccess = async (data)=> {
    localStorage.setItem("credentials", JSON.stringify(data));
    store.dispatch({
      type: ACTION_TYPE_AUTH.LOGIN_SUCCESS,
      payload: data.user
    });
}