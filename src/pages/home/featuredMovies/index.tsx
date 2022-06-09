import { Typography } from '@mui/material';
import NavigateBeforeRoundedIcon from '@mui/icons-material/NavigateBeforeRounded';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import { UseFeatuedMovies } from './useFeaturedMovies';

export const FeaturedMovies = () => {

    const {
        scrollx,
        handleLeftArrow,
        handleRightArrow,
        featuredMovies,

    } = UseFeatuedMovies()

    return (
        <div className="lists" style={{ marginTop: '32px' }}>

            <div className="rowMovie">
                <Typography variant="h2">Destaques</Typography>
                <div className="rowMovie--left" onClick={handleLeftArrow}>
                    <NavigateBeforeRoundedIcon style={{ fontSize: 50 }} />
                </div>
                <div className="rowMovie--right" onClick={handleRightArrow}>
                    <NavigateNextRoundedIcon style={{ fontSize: 50 }} />
                </div>
                <div className="rowMovie--listarea">
                    <div className="rowMovie--list" style={{ marginLeft: scrollx, width: featuredMovies.length * 150 }}>
                        {
                            featuredMovies.map((movie, index) =>
                                <div className="rowMovie--item" key={index}>
                                    <div className="rowMovie--item" key={index}>
                                        <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div >


        </div>
    )
} 