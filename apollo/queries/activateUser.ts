import { gql } from '@apollo/client'

export const ACTIVATE = gql`
  query activate($activationLink: String!) {
    activate(activationLink: $activationLink) {
      user {
        name
        email
        avatar
      }
      refreshToken
    }
  }
`