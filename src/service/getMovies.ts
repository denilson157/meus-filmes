import { IMovie } from "../interface/IMovie"
import { searchPatern, tmdbAuth } from "./tmdm"

export const getFeaturedMovies = async (): Promise<IMovie[]> => {
    const movies = await searchPatern(`/movie/top_rated?${tmdbAuth}&page=${Math.floor(Math.random() * (200 - 1 + 1)) + 1}`)

    return movies.results
}

export const SearchMovies = async (movieName: string): Promise<IMovie[]> => {
    const movies = await searchPatern(`/search/movie?${tmdbAuth}&query=${movieName}`)

    return movies.results
}