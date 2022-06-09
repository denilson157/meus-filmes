import { useState, useEffect } from 'react'
import { IMovie } from '../../../interface/IMovie'
import { getFeaturedMovies } from '../../../service/getMovies'

export const UseFeatuedMovies = () => {
    const [featuredMovies, setFeaturedMovies] = useState<IMovie[]>([])

    useEffect(() => {
        getFeaturedMovies()
            .then(movies => {
                setFeaturedMovies(movies)
            })
    }, [])

    const [scrollx, setScrollx] = useState(-80)

    const handleLeftArrow = () => {
        let newValue = scrollx + Math.round(window.innerWidth / 2)
        if (newValue > 0)
            newValue = 0
        setScrollx(newValue)
    }

    const handleRightArrow = () => {
        let newValue = scrollx - Math.round(window.innerWidth / 2)
        let listW = featuredMovies.length * 150
        let calcValue = window.innerWidth - listW

        if ((calcValue) > newValue)
            newValue = (calcValue) - 60

        setScrollx(newValue)
    }


    return {
        scrollx,
        handleLeftArrow,
        handleRightArrow,
        featuredMovies,
    }

}