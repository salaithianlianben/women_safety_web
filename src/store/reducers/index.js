import { combineReducers } from "redux";
import { POST_LOGOUT } from "../actions/action-types";
import authState from "./auth";

const appReducer = combineReducers({
  authState,
})

const rootReducer = (state, action) => {
if (action.type === POST_LOGOUT) {
    console.log('LOGOUTTTTTTT ....... ');
  return appReducer(undefined, action);
}
return appReducer(state, action);
}

export default rootReducer;