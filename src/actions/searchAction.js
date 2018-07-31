import {store} from "../store/store";
import {ACTION_TYPE_SEARCH} from '../constants/actionType';
import {userService} from "../services/userService";


export const search = async(search, page=0) =>{
  try {   
    store.dispatch({
      type: ACTION_TYPE_SEARCH.SEARCH_DOING
     });
    const response = await userService.getAllUser(search, page);
    if (!response.error){
      store.dispatch({
        type: ACTION_TYPE_SEARCH.SEARCH_SUCCESS,
        payload: response.data
      });
    } else {
      store.dispatch({
        type: ACTION_TYPE_SEARCH.SEARCH_FAILED,
        payload: response.message
      });
    }
  } catch(err){
    console.log(err);
    store.dispatch({
      type: ACTION_TYPE_SEARCH.SEARCH_FAILED,
      payload: "fetch_data_failed"
    });
  }
}