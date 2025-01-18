import { ACCESS_TOKEN_KEY } from "@/constant/auth";
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  createHttpLink,
} from "@apollo/client";
import { onError } from "apollo-link-error";
import { destroyCookie } from "nookies";

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

function create() {
  const httpLink = createHttpLink({
    uri: "http://localhost:8080/query",
    credentials: "include",
  });

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path }) => {
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        );
      });
    if (networkError) {
      if (networkError.message.includes("TypeError: Failed to fetch")) {
        destroyCookie(null, ACCESS_TOKEN_KEY);
        window.location.reload();
      }
      console.log(`[Network error]: ${networkError}`);
    }
  });

  return new ApolloClient({
    link: errorLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
}

export default function initApollo() {
  if (!apolloClient) {
    apolloClient = create();
  }

  return apolloClient;
}
