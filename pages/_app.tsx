import type { AppProps } from "next/app";

import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/router";
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";

import { fontSans, fontMono } from "@/config/fonts";

import "@/styles/globals.css";

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

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}

export const fonts = {
  sans: fontSans.style.fontFamily,
  mono: fontMono.style.fontFamily,
};
