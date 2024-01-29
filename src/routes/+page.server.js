import { gql } from 'graphql-request'
import { hygraph } from '$lib/utils/hygraph.js'

export async function load() {
    let query = gql`
    query MyQuery {
  homepages {
    titel
    beschrijving
    titel2
    beschrijving2
  }
  assets {
    url
  }
}

  `

    return await hygraph.request(query)
}
