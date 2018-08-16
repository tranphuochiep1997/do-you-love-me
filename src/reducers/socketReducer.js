import {ACTION_TYPE_SOCKET} from '../constants/actionType';

const initialState = {
  socket: function(){}
}
const socketReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ACTION_TYPE_SOCKET.MAP_SUCCESS:
      return {
        ...state,
        socket: action.payload
      }
    default:
      return state;
  }
}

export default socketReducer;