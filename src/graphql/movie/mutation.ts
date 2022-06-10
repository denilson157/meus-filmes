import { gql } from '@apollo/client'

export const INSERT_MOVIE = gql`
mutation InsertMovie($id: Int!, $title: String!, $overview: String!, $vote_average: numeric!, $poster_path: String!, $backdrop_path: String!) {
    insert_favorites_movies(objects: {id: $id, title: $title, overview: $overview, vote_average: $vote_average, poster_path: $poster_path, backdrop_path: $backdrop_path}) {
      affected_rows
    }
  }
`

export const REMOVE_MOVIE = gql`

mutation Delete_Movie($id: Int!) {
  delete_favorites_movies(where: {id: {_eq: $id}}) {
    affected_rows
  }
}

`