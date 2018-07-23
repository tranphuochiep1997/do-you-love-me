import {combineReducers} from 'C:/Users/tranp/AppData/Local/Microsoft/TypeScript/2.9/node_modules/redux';
import authenticationReducer from "./authenticationReducer";
import userReducer from "./userReducer";
import allUserReducer from "./allUserReducer";

const rootReducers = combineReducers({ 
  authenticationReducer,
  userReducer,
  allUserReducer
});
export default rootReducers;