import { createSlice } from "@reduxjs/toolkit";
import checkAndUpdateListCart from "./../../utils/checkExisting";
import utils from "../../utils";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.data = checkAndUpdateListCart(action.payload, state.data);
    },
    changeQuanlityCart: (state, action) => {
      console.log("action hall:", action);
      newCartList = utils.increaseQuantityById(
        state.data,
        action.payload.id,
        action.payload.type
      );
      state.data = newCartList;
    },
    deleteCart: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { addToCart, deleteCart, changeQuanlityCart } = cartSlice.actions;
export default cartSlice.reducer;
