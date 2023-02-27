import { createSlice } from "@reduxjs/toolkit";
import products from "../../FakeData/products";

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: products,
    productDetail: null,
  },
  reducers: {
    getProduct: (state, action) => {
      state.productDetail = state.data.find(
        (item) => item.id === action.payload
      );
    },
    setFavorite: (state, action) => {
      const id = action.payload.id; // nhận vào ID để tìm product
      const favorite = action.payload.favorite; // payload mới
      const product = state.data.find((item) => item.id === id); // tìm product
      product.favorite = favorite;
      state.productDetail = product;
    },
  },
});

export const { setFavorite, getProduct } = productSlice.actions;
export default productSlice.reducer;
