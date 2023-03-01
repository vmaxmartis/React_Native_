import { createSlice } from "@reduxjs/toolkit";
import checkAndUpdateListCart from "./../../utils/checkExisting";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.data = checkAndUpdateListCart(action.payload, state.data);
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
