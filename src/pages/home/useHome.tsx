import { useState } from 'react'

export const UseHome = () => {

    const [movieName, setMovieName] = useState('');

    const searchMovies = () => {

    }

    return {
        movieName,
        setMovieName,
        searchMovies
    }
}