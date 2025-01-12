import { gql } from "@apollo/client";

export const USER_QUERY = gql`
  query User($userId: Int64!) {
    user(input: { userId: $userId }) {
      user {
        id
        lastName
        firstName
        dateOfBirth
        email
        phoneNumber
        avatarImgPath
        status
      }
    }
  }
`;
