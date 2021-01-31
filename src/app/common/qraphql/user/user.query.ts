import { gql } from 'apollo-angular';


export const GET_USER = gql(`
  query Me($id: ID!) {
    me(id: $id) {
      id,
      name,
      rooms { id, name, isBot, active, avatar, lastMessage }
    }
  }
`);

export const GET_USERS = gql(`
  {
    users {
      id,
      name,
    }
  }
`);