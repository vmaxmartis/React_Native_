import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./slide/userSlide";
import productSlice from "./slide/productSlide";
import cartSlice from "./slide/cartSlide";

const reducer = combineReducers({
  user: userSlice.reducer,
  product: productSlice,
  cart: cartSlice,
});

const store = configureStore({
  reducer,
});

export default store;
