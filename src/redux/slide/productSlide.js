import { createSlice } from "@reduxjs/toolkit";
import products from "../../FakeData/products";
// const getProduct = (id) => {
//   const product = products.find((item) => item.id === id);
//   return product;
// };
// function nameFunc(param: any) {
//   return;
// }

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
      let cloneProduct = JSON.parse(JSON.stringify(state.data));
      const id = action.payload.id; // nhận vào ID để tìm product
      const favorite = action.payload.favorite; // payload mới
      const product = cloneProduct.find((item) => item.id === id); // tìm product
      product.favorite = favorite; // set lại Favorite
      state.data = JSON.parse(JSON.stringify(cloneProduct));
      state.productDetail = product;
    },
  },
});

export const { setFavorite, getProduct } = productSlice.actions;
export default productSlice.reducer;
