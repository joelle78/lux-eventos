import { gql } from 'graphql-request'
import { hygraph } from '$lib/utils/hygraph.js'

export async function load() {
    let query = gql`
query MyQuery {
  voorOpdrachtgeversPages {
    titel
    intro
    beschrijving
    titel2
    intro2
    beschrijving2
    titel3
    nrlist3
  }
  assets {
    url
  }
}


  `

    return await hygraph.request(query)
}


