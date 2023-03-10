// import axios from "axios"

// const instance = axios.create({
//     baseURL: process.env.REACT_APP_API_URL
// })

// export const signup = (data: any) => instance.post("/api/signup", data)

import axios from "axios";
import { SignupData, SigninData, ProfileData } from "./types";

const API_BASE_URL = "http://localhost:4000/api";

export const api = {
  signup: async (signupData: SignupData) => {
    const response = await axios.post(`${API_BASE_URL}/signup`, signupData);
    return response.data;
  },
  signin: async (signinData: SigninData) => {
    const response = await axios.post(`${API_BASE_URL}/signin`, signinData);
    return response.data;
  },
  profile: async (profileData: ProfileData) => {
    const response = await axios.put(`${API_BASE_URL}/user/update-profile/${profileData.userId}`, profileData);
    return response.data;
  },
};
