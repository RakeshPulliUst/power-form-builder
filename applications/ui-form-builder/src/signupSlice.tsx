import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "./store";
import { User } from "./types";
import { api } from "./api";

interface UserState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
};

export const signupSlice = createSlice({
  name: "userRegister",
  initialState,
  reducers: {
    signupStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    signupSuccess: (state, action: PayloadAction<User>) => {
      state.loading = false;
      state.user = action.payload;
    },
    signupFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { signupStart, signupSuccess, signupFailure } =
  signupSlice.actions;

export const signup =
  (userData: {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
  }): AppThunk =>
  async (dispatch: any) => {
    try {
      dispatch(signupStart());
      const response = await api.signup(userData);
      dispatch(signupSuccess(response.data));
    } catch (error: any) {
      dispatch(signupFailure(error.message));
    }
  };

export default signupSlice.reducer;
