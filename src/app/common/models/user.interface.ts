export interface MeI {
  id: string;
  email?: string;
  name?: string;
  password?: string;
  token?: string;
  rooms?: any[];
}

export interface SignUpI {
  signUp: {
    email: string;
    id: string;
    name: string;
  }
}
export interface SignInI {
  signIn: {
    id: string;
    token: string;
  }
}