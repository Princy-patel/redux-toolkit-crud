import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/createSlice";

export const store = configureStore({
  reducer: {
    createUser: userReducer,
  },
});
