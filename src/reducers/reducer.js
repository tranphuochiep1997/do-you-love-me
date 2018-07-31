import {combineReducers} from 'redux';
import userReducer from "./userReducer";
import allUserReducer from "./allUserReducer";
import chatReducer from "./chatReducer";
import friendReducer from "./friendReducer";
import searchReducer from "./searchReducer";

const rootReducers = combineReducers({ 
  userReducer,
  allUserReducer,
  chatReducer,
  friendReducer,
  searchReducer
});
export default rootReducers;