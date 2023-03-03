import user from "../../FakeData/user";
import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_ID = 0;
const DEFAULT_NAME = "Vmax Martis";
const DEFAULT_EMAIL = "a@gmail.com";
const DEFAULT_ADDRESS = [
  { name: "Home", add: "12 Divitiny", number: "036451254" },
  { name: "Office", add: "12 Aven", number: "0387397253" },
];
const DEFAULT_PHONE = "01032";
const DEFAULT_AVATAR = require("./../../../assets/vv.png");
const DEFAULT_IS_LOGGED_IN = false;

const userSlice = createSlice({
  name: "user",
  initialState: {
    id: DEFAULT_ID,
    name: DEFAULT_NAME,
    email: DEFAULT_EMAIL,
    password: "a",
    address: DEFAULT_ADDRESS,
    avatar: DEFAULT_AVATAR,
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
