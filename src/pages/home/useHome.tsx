import { useState } from 'react'
import { useAppLoadingContext } from '../../contexts/LoadingContext';
import { IMovie } from '../../interface/IMovie';
import { SearchMovies } from '../../service/getMovies';

export const UseHome = () => {
    const { toggleLoading } = useAppLoadingContext();

    const [movieName, setMovieName] = useState('');
    const [moviesSearched, setMoviesSearched] = useState<IMovie[]>([]);

    const searchMovies = () => {
        if (movieName) {
            toggleLoading(true)
            SearchMovies(movieName)
                .then((m) => setMoviesSearched(m))
                .finally(() => toggleLoading(false))
        }
    }

    return {
        movieName,
        setMovieName,
        searchMovies,
        moviesSearched,
        toggleLoading
    }
}