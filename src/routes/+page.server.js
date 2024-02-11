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
    beschrijving4
    titel5
    beschrijving5
    nummeredList5
  }
  assets {
    url
  }
}


  `

    return await hygraph.request(query)
}
