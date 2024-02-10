import { gql } from 'graphql-request'
import { hygraph } from '$lib/utils/hygraph.js'

export async function load() {
    let query = gql`
query MyQuery {
    overOnsPages {
        titel
        beschrijving
        titel2
        intro2
        beschrijving2
    }
    assets {
        url
    }
}

  `

    return await hygraph.request(query)
}


