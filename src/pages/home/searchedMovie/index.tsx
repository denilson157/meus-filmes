import { FC } from 'react'
import { Grid } from "@mui/material"
import { IMovie } from '../../../interface/IMovie'
import { Movie } from './Movie'

type IFeatureMovies = {
    movies: IMovie[]
}

export const SearchedMovies: FC<IFeatureMovies> = ({ movies }) => {
    return (
        <Grid container style={{ marginTop: '32px', marginLeft: '32px' }}>
            {
                movies.map((movie, index) =>
                    <Movie key={index} movie={movie} />
                )
            }

        </Grid>
    )
} 