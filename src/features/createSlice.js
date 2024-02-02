import { createSlice } from "@reduxjs/toolkit";
import data from "../Data.js";

const initialState = {
  data,
};

const userData = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.data.push(action.payload);
    },
    updateUser: (state, action) => {
      const findUser = state.data.find((user) => user.id === action.payload.id);

      if (findUser) {
        findUser.name = action.payload.name;
        findUser.email = action.payload.email;
      }
    },
    removeUser: (state, action) => {
      const deleteUser = state.data.filter(
        (user) => user.id !== action.payload
      );

      state.data = deleteUser;
    },
  },
});

export const { addUser, updateUser, removeUser } = userData.actions;
export default userData.reducer;
