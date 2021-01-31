import { gql } from 'apollo-angular';


export const GET_ROOMS = gql(`
  {
    rooms {
      id,
      name,
    }
  }
`);