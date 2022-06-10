import { gql } from '@apollo/client'

export const GET_MOVIES = gql`
  subscription GetMovies {
        favorites_movies {
          id
          backdrop_path
          overview
          poster_path
          title
          vote_average
        }
    }
`