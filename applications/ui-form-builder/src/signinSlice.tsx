import { createSlice } from "@reduxjs/toolkit";

const signinSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    username: "",
  },

  reducers: {
    login: (state, action) => {
      const { username, password } = action.payload;

      const isAuthenticated =
        username === "admin@gmail.com" && password === "password";
      state.isAuthenticated = isAuthenticated;
      state.username = isAuthenticated ? username : "";
    },
  },
});

export const { login } = signinSlice.actions;
export default signinSlice.reducer;
