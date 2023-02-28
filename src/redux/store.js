import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./slide/userSlide";
import productSlice from "./slide/productSlide";

const reducer = combineReducers({
  user: userSlice.reducer,
  product: productSlice,
});

const store = configureStore({
  reducer,
});

export default store;
