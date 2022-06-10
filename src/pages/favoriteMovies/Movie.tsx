import { Card, Box, CardContent, Typography, CardMedia, Grid } from "@mui/material"
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { FC, useState, useContext } from 'react'
import { IMovie } from '../../interface/IMovie'
import { useMutation } from "@apollo/client";
import { REMOVE_MOVIE } from "../../graphql/movie/mutation";
import { FavoritesMoviesIdContext } from "../../components/Main";


type IMovieProps = {
    movie: IMovie
}

export const Movie: FC<IMovieProps> = ({ movie }) => {
    const [expanded, setExpanded] = useState(false);
    const { movieReducer, favoriteMoviesIdDispatch } = useContext<any>(FavoritesMoviesIdContext);

    const toggleExpanded = () => setExpanded(old => !old)
    const [RemoveMovie] = useMutation(REMOVE_MOVIE);


    const unfavoriteMovie = () => {
        RemoveMovie({
            variables: {
                id: movie.id
            }
        })
            .then(() => {
                favoriteMoviesIdDispatch({ type: "INSERT_FAVORITE_MOVIES", payload: movie.id })
            })
            .catch(err => {
                console.log(err)
            })
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
                            <FavoriteRoundedIcon onClick={() => unfavoriteMovie()} color="primary" style={{ marginLeft: 1, cursor: 'pointer' }} />
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