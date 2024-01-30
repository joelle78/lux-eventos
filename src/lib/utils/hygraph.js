import {
  HYGRAPH_URL,
  HYGRAPH_KEY
} from '$env/dynamic/private';
import { GraphQLClient } from 'graphql-request'

export const hygraph = new GraphQLClient(HYGRAPH_URL, {
  headers: {
    Authorization: `Bearer ${HYGRAPH_KEY}`,
  },
})

// export const hygraph = new GraphQLClient("https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clrxgyp9e14aw01w67zu9sgex/master", {
//   headers: {
//     Authorization: `Bearer ${HYGRAPH_KEY}`,
//   },
// });