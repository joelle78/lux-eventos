import { gql } from 'graphql-request'
import { hygraph } from '$lib/utils/hygraph.js'

export async function load() {
    let query = gql`
query MyQuery {
  werkenBijPages {
    titel
    beschrijving
    titel2
    intro2
    quote2
    beschrijving2
    titel3
    titelPijlers
    pijlers3 {
      text
    }
  }
  assets {
    url
  }
}




  `

    return await hygraph.request(query)
}
