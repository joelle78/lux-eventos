import { gql } from 'graphql-request'
import { hygraph } from '$lib/utils/hygraph.js'

export async function load() {
    let query = gql`
query MyQuery {
  contactPages {
    freelancersVraag1
    freelancersAntwoord1
    freelancersVraag2
    freelancersAntwoord2
    freelancersVraag3
    freelancersAntwoord3
    freelancersVraag4
    freelancersAntwoord4
    freelancersVraag5
    freelancersAntwoord5
    werkgeversVraag1
    werkgeversAntwoord1
    werkgeversVraag2
    werkgeversAntwoord2
    werkgeversVraag3
    werkgeversAntwoord3
    werkgeversVraag4
    werkgeversAntwoord4
    werkgeversVraag5
    werkgeversAntwoord5
  }
}

  `

    return await hygraph.request(query)
}
