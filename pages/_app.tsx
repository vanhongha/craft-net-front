import type { AppProps } from "next/app";

import { CookiesProvider } from "react-cookie";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/router";
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";
import { useState } from "react";

import "@/styles/globals.css";
import { User } from "@/models/user";
import { fontSans, fontMono } from "@/config/fonts";
import { UserContext } from "@/store/user-context";

export default function App({ Component, pageProps }: AppProps) {
  const link = createHttpLink({
    uri: "http://localhost:8080/query",
    credentials: "include",
  });
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
  });

  const router = useRouter();
  const [userData, setUserData] = useState<User>(new User({}));
  const userCtx = {
    user: userData,
    setUser: (newUser: User) => {
      setUserData(new User(newUser));
    },
  };

  return (
    <CookiesProvider defaultSetOptions={{ path: "/" }}>
      <NextUIProvider navigate={router.push}>
        <NextThemesProvider>
          <ApolloProvider client={client}>
            <UserContext.Provider value={userCtx}>
              <Component {...pageProps} />
            </UserContext.Provider>
          </ApolloProvider>
        </NextThemesProvider>
      </NextUIProvider>
    </CookiesProvider>
  );
}

export const fonts = {
  sans: fontSans.style.fontFamily,
  mono: fontMono.style.fontFamily,
};
