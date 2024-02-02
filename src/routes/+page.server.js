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
    titel3
    beschrijving3
    titel4
    nummeredList4
    beschrijving4
  }
  assets {
    url
  }
}


  `

    return await hygraph.request(query)
}
