import { configureStore } from '@reduxjs/toolkit'
import signupReducer from './signupSlice'
import signinReducer from './signinSlice'

const store = configureStore({
  reducer: {
    signup: signupReducer,
    signin: signinReducer
  }
})

export default store
