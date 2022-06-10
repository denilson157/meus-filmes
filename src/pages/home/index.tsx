import { Button, Grid, TextField, Box } from '@mui/material';
import { UseHome } from './useHome';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { FeaturedMovies } from './featuredMovies';
import { SearchedMovies } from './searchedMovie';

export const Home = () => {

    const {
        movieName,
        setMovieName,
        searchMovies,
        moviesSearched,
        toggleLoading
    } = UseHome();

    return (
        <Grid container pt={10} >

            <Grid md={12} xs={12} sx={{ p: 1 }}>
                <Box sx={{ display: 'flex' }}>
                    <TextField
                        variant="outlined"
                        placeholder="Ex: Avatar"
                        fullWidth
                        label="Pesquise pelo nome do filme"
                        type="url"
                        sx={{ mr: 3 }}
                        size="small"
                        onChange={(e) => setMovieName(e.target.value)}
                        value={movieName}
                    />
                    <Button
                        type="button"
                        variant="outlined"
                        onClick={searchMovies}
                        startIcon={<SearchRoundedIcon />}
                    >
                        buscar
                    </Button>

                </Box>

                <FeaturedMovies />
                <SearchedMovies toggleLoading={toggleLoading} refetchMovies={() => searchMovies()} movies={moviesSearched} />
            </Grid>

        </Grid>
    )
} 