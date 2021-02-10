import { gql } from 'apollo-angular';

export const SIGN_UP = gql`
  mutation CreateUser($name: String!, $email: String!, $password: String!) {
    signUp(input: { name: $name, email: $email, password: $password} ) {
      id,
      name,
      email,
      token,
    }
  }
`;

export const SIGN_IN = gql`
  mutation Login($email: String!, $password: String!) {
    signIn(input: { email: $email, password: $password } ) {
      id,
      token
    }
  }
`;