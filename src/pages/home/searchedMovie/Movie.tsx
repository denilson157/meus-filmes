import { Card, Box, CardContent, Typography, CardMedia, Grid } from "@mui/material"
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { FC, useState } from 'react'
import { IMovie } from '../../../interface/IMovie'
import { useMutation } from "@apollo/client";
import { INSERT_MOVIE } from "../../../graphql/movie/mutation";


type IMovieProps = {
    movie: IMovie
}

export const Movie: FC<IMovieProps> = ({ movie }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => setExpanded(old => !old)
    const [insertMovie] = useMutation(INSERT_MOVIE);

    const favoriteMovie = async (movie: IMovie) => {

        try {

            await insertMovie({
                variables: {
                    id: movie.id,
                    title: movie.title,
                    vote_average: movie.vote_average,
                    overview: movie.overview,
                    poster_path: movie.poster_path,
                    backdrop_path: movie.backdrop_path
                }
            })

            return true;
        }
        catch (error) {
            console.log(error)
            return false;
        }

    }

    return (
        <Grid md={5}>

            <Card sx={{ display: 'flex', mt: 3, mr: 3 }}>
                <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title}
                />

                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            {movie.title}
                            <FavoriteRoundedIcon onClick={() => favoriteMovie(movie)} color="primary" style={{ marginLeft: 1, cursor: 'pointer' }} />
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" style={{ cursor: 'pointer' }} component="div" onClick={toggleExpanded}>
                            {
                                expanded ?
                                    <>
                                        {movie.overview}
                                    </>
                                    :
                                    <>
                                        {movie.overview.substring(0, 230)}
                                        {movie.overview.length > 230 ? '...' : ''}
                                    </>
                            }
                        </Typography>
                    </CardContent>

                </Box>


            </Card>
        </Grid>
    )
}