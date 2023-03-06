import { createSlice } from "@reduxjs/toolkit";

export const recentSlice = createSlice({
  name: "recent",
  initialState: {
    data: [{ recent: "Áo" }, { recent: "Quần" }],
  },
  reducers: {
    addRecents: (state, action) => {
      state.data.unshift({ recent: action.payload });
    },
  },
});

export const { addRecents } = recentSlice.actions;
export default recentSlice.reducer;
