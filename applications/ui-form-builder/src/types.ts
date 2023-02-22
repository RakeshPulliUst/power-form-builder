export interface User {
  id: string;
  firstname: string,
  lastname: string,
  email: string;
}

export interface SignupData {
  firstname: string,
  lastname: string,
  email: string;
  password: string;
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
