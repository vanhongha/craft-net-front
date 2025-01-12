import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation Login($username: String!, $password: String!) {
    auth {
      login(input: { username: $username, password: $password }) {
        accessToken
        userId
      }
    }
  }
`;
