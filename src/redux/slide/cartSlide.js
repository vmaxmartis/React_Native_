import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const quantity = action.payload.quantity;
      const color = action.payload.color;
      const cartProduct = state.data.find((item) => item.colorId === color.id);
      // Nếu mặt hàng có màu tồn tại trong giỏ hàng thì thêm số lượng
      if (cartProduct) {
        cartProduct.quantity = Math.min(
          cartProduct.quantity + quantity,
          color.quantity
        );
      } else {
        let id = 0;
        if (state.data.length === 0) id = 1;
        else id = Math.max(...state.data.map((item) => item.id)) + 1;
        state.data.push({
          id,
          quantity,
          colorId: color.id,
        });
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
