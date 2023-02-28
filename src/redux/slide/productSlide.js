import { createSlice } from "@reduxjs/toolkit";
import products from "../../FakeData/products";
import filterProducts from "../../utils/filterProduct";

const productSlice = createSlice({
   name: "product",
   initialState: {
      data: products,
      productDetail: null,
      dataFilter: {},
      ressultFilter: []
   },
   reducers: {
      getProduct: (state, action) => {
         state.productDetail = state.data.find(
            (item) => item.id === action.payload
         ); // tìm product có ID = 1  a:{id: 1, favorite: false}
      },
      setFavorite: (state, action) => {
         const product = state.data.find((item) => item.id === action.payload.id); // tìm product
         product.favorite = action.payload.favorite; // set giá trị  (favorite = true) cho product ID1
         state.productDetail = product; // đem cái product vừa xử lý set !favorite nạp lại productDetail để cập nhật
      },
      filterAction: (state, action) => {
         state.dataFilter = Object.assign(state.dataFilter, action.payload);
      },
      filterResult: (state, action) => {
         state.ressultFilter = filterProducts(state.data, action.payload)
      }
   },
});

export const { setFavorite, getProduct, filterAction, filterResult } = productSlice.actions;
export default productSlice.reducer;
