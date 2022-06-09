import { FC } from 'react'
import { Card, Box, CardContent, Typography, CardMedia } from "@mui/material"
import { IMovie } from '../../../interface/IMovie'

type IFeatureMovies = {
    movies: IMovie[]
}

export const SearchedMovies: FC<IFeatureMovies> = ({ movies }) => {



    return (
        <div style={{ marginTop: '32px' }}>

            {
                movies.map((movie, index) =>
                    <Card sx={{ display: 'flex' }}>
                        <CardMedia
                            component="img"
                            sx={{ width: 151 }}
                            image={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title}
                        />

                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5">
                                    {movie.title}</Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    {movie.overview}
                                </Typography>
                            </CardContent>

                        </Box>


                    </Card>
                )
            }

        </div>
    )
} 