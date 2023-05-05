import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "./types";
import { api } from "./api";
import { AppThunk } from "./store";

interface UserState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

export const initialState: UserState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

export const signinSlice = createSlice({
  name: "userLogin",
  initialState,
  //The reducer is a pure function that accepts 2 parameters: the current state and an action object.
  reducers: {
    signinStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    signinSuccess: (state, action: PayloadAction<User>) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
      localStorage.setItem("loginState", JSON.stringify(state));
    },
    signinFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.setItem("loginState", JSON.stringify(state));
    },
  },
});

//action creators
export const { signinStart, signinSuccess, signinFailure, logout } =
  signinSlice.actions;

export const signin =
  (userData: { email: string; password: string }): AppThunk =>
  async (dispatch: any) => {
    dispatch(signinStart());
    try {
      const response = await api.signin(userData);
      console.log(response);
      dispatch(signinSuccess(response));
    } catch (error: any) {
      console.log(error.message);
      dispatch(signinFailure(error.message));
    }
  };

export const signout = async (dispatch: any) => {
  dispatch(logout());
};

export default signinSlice.reducer;
