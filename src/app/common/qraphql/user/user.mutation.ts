import { gql } from 'apollo-angular';

export const CREATE_USER = gql`
  mutation CreateUser($name: String!, $email: String!){
    signUp(input: { name: $name, email: $email } ) {
      id,
      name,
      email,
    }
  }
`;