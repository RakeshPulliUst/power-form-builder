import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import signupReducer from "./signupSlice";
import signinReducer from "./signinSlice";

import thunk from 'redux-thunk';

const persistedState = localStorage.getItem("loginState")

export const store = configureStore({
  reducer: {
    userRegister: signupReducer,
    userLogin: signinReducer
  },
  preloadedState: persistedState ?  JSON.parse(persistedState) : undefined,
});

store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem("loginState", JSON.stringify(state.userLogin));
  });
  
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

