import { useQuery } from "@apollo/client";
import { useCookies } from "react-cookie";

import { ACCESS_TOKEN_KEY, USER_ID_KEY } from "@/constant/auth";
import { USER_QUERY } from "@/graphql/query/user";

export function useGetUser() {
  const [cookies] = useCookies([ACCESS_TOKEN_KEY, USER_ID_KEY]);

  const token = cookies[ACCESS_TOKEN_KEY];
  const userId = cookies[USER_ID_KEY];

  const { loading, error, data } = useQuery(USER_QUERY, {
    variables: { userId },
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    },
  });

  return { loading, data, error };
}
