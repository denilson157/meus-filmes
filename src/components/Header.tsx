import { AppBar, Toolbar, Typography, MenuItem, Icon } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAppThemeContext } from '../contexts/ThemeContext';

export const Header = () => {
    const { toggleTheme } = useAppThemeContext();

    return (
        <AppBar>
            <Toolbar>
                <Typography sx={{ marginRight: '32px' }} variant="h6" component="h1">
                    Meus filmes
                </Typography>

                <MenuItem>
                    <Link to='/home'>
                        <Typography>
                            Home
                        </Typography>
                    </Link>
                </MenuItem>

                <MenuItem>
                    <Link to='/favorites' className='navbar-brand'>
                        <Typography>
                            Filmes favoritos
                        </Typography>
                    </Link>
                </MenuItem>

                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                </Typography>

                <MenuItem onClick={toggleTheme}>
                    <Icon>dark_mode</Icon>
                </MenuItem>
            </Toolbar>
        </AppBar >
    )
}
