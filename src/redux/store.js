import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./slide/userSlide";
import productSlice from "./slide/productSlide";
import cartSlice from "./slide/cartSlide";
import recentSlice from "./slide/recentSlide";
import siginUpSlice from "./slide/siginUpSlice";

const reducer = combineReducers({
  product: productSlice,
  cart: cartSlice,
  recents: recentSlice,
  signup: siginUpSlice,
  user: userSlice,
});

const store = configureStore({
  reducer,
});

export default store;
