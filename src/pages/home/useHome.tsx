import { useState } from 'react'
import { IMovie } from '../../interface/IMovie';
import { SearchMovies } from '../../service/getMovies';

export const UseHome = () => {

    const [movieName, setMovieName] = useState('');
    const [moviesSearched, setMoviesSearched] = useState<IMovie[]>([]);

    const searchMovies = () => {
        SearchMovies(movieName)
            .then((m) => setMoviesSearched(m))
    }

    return {
        movieName,
        setMovieName,
        searchMovies,
        moviesSearched
    }
}