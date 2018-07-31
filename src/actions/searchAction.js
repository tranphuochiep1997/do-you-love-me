import {store} from "../store/store";
import {ACTION_TYPE_SEARCH} from '../constants/actionType';
import {userService} from "../services/userService";
import {config} from "../constants/config";

export const search = async(search, page=0) =>{
  try {   
    store.dispatch({
      type: ACTION_TYPE_SEARCH.SEARCH_DOING
     });
    const response = await userService.getAllUser({search, page});
    if (!response.error){
      store.dispatch({
        type: ACTION_TYPE_SEARCH.SEARCH_SUCCESS,
        nextPage: response.data.length >= config.LIMIT_REQUEST_USER ? ++page : 0,
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
export const loadMore = async(search, page=0) =>{
  try {   
    store.dispatch({
      type: ACTION_TYPE_SEARCH.SEARCH_DOING
     });
    const response = await userService.getAllUser({search, page});
    if (!response.error){
      store.dispatch({
        type: ACTION_TYPE_SEARCH.LOAD_MORE_SUCCESS,
        nextPage: response.data.length >= config.LIMIT_REQUEST_USER ? ++page : 0,
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