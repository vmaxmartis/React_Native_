import { createSlice } from "@reduxjs/toolkit";

export const siginUpSlice = createSlice({
  name: "register",
  initialState: {
    data: {},
  },
  reducers: {
    signUp: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { signUp } = siginUpSlice.actions;
export default siginUpSlice.reducer;
