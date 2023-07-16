import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user/user-slice";

// combine redux reducers
const rootReducer = combineReducers({
	user: userReducer,
});

export default rootReducer;
