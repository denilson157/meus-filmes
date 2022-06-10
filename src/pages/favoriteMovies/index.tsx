import { useSubscription } from '@apollo/client';
import { CircularProgress, Grid } from '@mui/material';
import { useAppLoadingContext } from '../../contexts/LoadingContext';
import { GET_MOVIES } from '../../graphql/movie/query';
import { IMovie } from '../../interface/IMovie';
import { Movie } from './Movie';

export const FavoriteMovies = () => {

    const { toggleLoading } = useAppLoadingContext();



    const { data, loading, error } = useSubscription(GET_MOVIES)

    toggleLoading(loading)

    if (error) {
        console.log(error)
        return <div>Erro ao Buscar filmes</div>
    }



    return (
        <Grid container style={{ marginTop: '60px', marginLeft: '32px' }}>
            {
                data?.favorites_movies.map((movie: IMovie, index: number) =>
                    <Movie key={index} movie={movie} />
                )
            }

        </Grid>
    )
} 