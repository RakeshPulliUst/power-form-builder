import { createSlice } from "@reduxjs/toolkit";

const signupSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    username: "",
  },

  reducers: {
    signup: (state, action) => {
      const { firstname, lastname, username, password } = action.payload;

      state.isAuthenticated = true;
      state.username = username;
    },
  },
});

export const { signup } = signupSlice.actions;
export default signupSlice.reducer;
