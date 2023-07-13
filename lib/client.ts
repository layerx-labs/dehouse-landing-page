// lib/client.js
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import { env } from '../env.mjs'

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    ssrMode: true,
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: env.KEYSTONE_API_URL,
    }),
  });
});