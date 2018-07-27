import {combineReducers} from 'redux';
import authenticationReducer from "./authenticationReducer";
import userReducer from "./userReducer";
import allUserReducer from "./allUserReducer";
import chatReducer from "./chatReducer";
import friendReducer from "./friendReducer";

const rootReducers = combineReducers({ 
  authenticationReducer,
  userReducer,
  allUserReducer,
  chatReducer,
  friendReducer
});
export default rootReducers;