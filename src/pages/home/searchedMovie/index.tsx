import { FC, useContext } from 'react'
import { Grid } from "@mui/material"
import { IMovie } from '../../../interface/IMovie'
import { Movie } from './Movie'
import { FavoritesMoviesIdContext } from '../../../components/Main'

type IFeatureMovies = {
    movies: IMovie[],
    refetchMovies: any,
    toggleLoading: (bool: boolean) => void
}

export const SearchedMovies: FC<IFeatureMovies> = ({ movies, refetchMovies, toggleLoading }) => {

    const { movieReducer, favoriteMoviesIdDispatch } = useContext<any>(FavoritesMoviesIdContext);

    return (
        <Grid container style={{ marginTop: '32px', marginLeft: '32px' }}>
            {
                movies.map((movie, index) =>
                    <Movie toggleLoading={toggleLoading} refetchMovies={refetchMovies} favoriteMoviesIdDispatch={favoriteMoviesIdDispatch} favoriteMoviesId={movieReducer} key={index} movie={movie} />
                )
            }

        </Grid>
    )
} 