import { userReducer } from "@/modules/auth/store/user";
import { combineReducers } from "@reduxjs/toolkit";

const reducer = combineReducers({
  user: userReducer
});

export default reducer;