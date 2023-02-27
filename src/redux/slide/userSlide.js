import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    id: 1,
    name: "Nguyen Van v",
    email: "a@gmail.com",
    password: "a",
    avatar: require("./../../../assets/vv.png"),
    background: require("./../../../assets/background.png"),
  },
  reducers: {
    login: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.isLoggedIn = true;
    },
  },
});

export const login = userSlice.actions;
export default userSlice;
