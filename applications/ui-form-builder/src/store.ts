// import { configureStore } from '@reduxjs/toolkit'
// import signupReducer from './signupSlice'
// import signinReducer from './signinSlice'
// import userReducer from './userSlice'

// const store = configureStore({
//   reducer: {
//     // signup: signupReducer,
//     // signin: signinReducer,
//     user: userReducer
//   }
// })

// export default store

import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import signupReducer from "./signupSlice";
import signinReducer from "./signinSlice";

import thunk from 'redux-thunk';

export const store = configureStore({
  reducer: {
    userRegister: signupReducer,
    userLogin: signinReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

