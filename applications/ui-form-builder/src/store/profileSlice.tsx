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

export const profileSlice = createSlice({
  name: "userRegister",
  initialState,
  reducers: {
    profileStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    profileSuccess: (state, action: PayloadAction<User>) => {
      state.loading = false;
      state.user = action.payload;
      console.log("state ", state);
      localStorage.setItem("loginState", JSON.stringify(state));
    },
    profileFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { profileStart, profileSuccess, profileFailure } =
  profileSlice.actions;

export const profile =
  (userData: {
    userId: number;
    firstname: string;
    lastname: string;
    email: string;
    password?: string;
  }): AppThunk =>
  async (dispatch: any) => {
    try {
      dispatch(profileStart());
      const response = await api.profile(userData);
      dispatch(profileSuccess(response.data));
    } catch (error: any) {
      dispatch(profileFailure(error.message));
    }
  };

export default profileSlice.reducer;
