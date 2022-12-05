import { configureStore } from "@reduxjs/toolkit";
//configureStore will set up the Redux Store

import mainReducer from "../reducers/index";

const store = configureStore({
  reducer: mainReducer,
});

export default store;
