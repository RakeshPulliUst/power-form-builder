import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FormElements, User } from "./types";
import { api } from "./api";
import { AppThunk } from "./store";
import { Element } from "../form-builder/ElementInterface";

interface ElementState {
  components: Element[];
  error: string | null;
}

const initialState: ElementState = {
  components: [],
  error: null,
};

const formElementsSlice = createSlice({
  name: "formElements",
  initialState,
  reducers: {
    addElement: (state, action: PayloadAction<Element>) => {
      console.log("Sssd", state);
      state.components.push(action.payload);
      localStorage.setItem("formElementsState", JSON.stringify(state));
      console.log("Sssd", state);
    },
    addElementFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    clear: (state) => {
      state.components = [];
      localStorage.setItem("formElementsState", JSON.stringify(state));
    },
  },
});

//action creators
export const { addElement, addElementFailure, clear } =
  formElementsSlice.actions;

export const addFormElements =
  (components: Element): AppThunk =>
  async (dispatch: any) => {
    try {
      dispatch(addElement(components));
    } catch (error: any) {
      dispatch(addElementFailure(error.message));
    }
  };

export const clearFormElements = async (dispatch: any) => {
  dispatch(clear());
};

export default formElementsSlice.reducer;
