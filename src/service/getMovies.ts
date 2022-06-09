import { IMovie } from "../interface/IMovie"
import { searchPatern, tmdbAuth } from "./tmdm"

export const getFeaturedMovies = async (): Promise<IMovie[]> => {
    const movies = await searchPatern(`/movie/top_rated?${tmdbAuth}`)

    return movies.results
}