import { Element } from "./form-builder/ElementInterface";
export interface User {
  id: string;
  firstname: string,
  lastname: string,
  email: string;
}

export interface formElements {
  components: Element[]
}

export interface SignupData {
  userId: number,
  firstname: string,
  lastname: string,
  email: string;
  password: string;
}

export interface ProfileData {
  userId: number,
  firstname: string,
  lastname: string,
  email: string;
  password?: string;
}

export interface SigninData {
  email: string;
  password: string;
}

export interface RootState {
  user: User | null;
  loading: boolean;
  error: string | null;
}
