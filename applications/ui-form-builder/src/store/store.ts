import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import signupReducer from "./signupSlice";
import signinReducer, { initialState } from "./signinSlice";
import profileReducer from "./profileSlice";
import formElementsReducer from "./formElementsSlice";

const persistedState = localStorage.getItem("loginState");

export const store = configureStore({
  reducer: {
    userRegister: signupReducer,
    userLogin: signinReducer,
    userProfile: profileReducer,
    formElements: formElementsReducer,
  },

  preloadedState: persistedState
    ? JSON.parse(persistedState)
    : localStorage.setItem("loginState", JSON.stringify(initialState)),
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("loginState", JSON.stringify(state.userLogin));
  console.log("Started");
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
