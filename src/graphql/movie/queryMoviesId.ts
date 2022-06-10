import { gql } from '@apollo/client'

export const GET_MOVIES_ID = gql`
    query GetMovies {
        favorites_movies {
          id         
        }
    }
`