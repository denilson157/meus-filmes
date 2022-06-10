import { useQuery } from '@apollo/client';
import { createContext, useEffect, useReducer } from "react"
import { GET_MOVIES_ID } from "../graphql/movie/queryMoviesId"
import { MovieReducer } from "../reducer/root"
import { AppRoutes } from "../routes"
import { Header } from "./Header"


export const FavoritesMoviesIdContext = createContext([])

export const Main = () => {
    const [movieReducer, favoriteMoviesIdDispatch] = useReducer(MovieReducer, [])

    const { data } = useQuery(GET_MOVIES_ID)

    useEffect(() => {
        if (data) {
            favoriteMoviesIdDispatch({ type: 'FAVORITE_MOVIES', payload: data.favorites_movies.map(m => m.id) })
        }
    }, [data])

    return (
        <FavoritesMoviesIdContext.Provider value={{ movieReducer, favoriteMoviesIdDispatch }}>
            <Header />
            <AppRoutes />
        </FavoritesMoviesIdContext.Provider>

    )
}