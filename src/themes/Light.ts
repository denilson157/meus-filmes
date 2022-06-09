import { createTheme } from '@mui/material'
import { yellow } from '@mui/material/colors'

export const LightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: yellow[700],
            dark: yellow[800],
            light: yellow[500],
            contrastText: "#ffffff"
        },
        background: {
            paper: '#ffffff',
            default: '#f7f6f3',
        }
    },
    typography: {
        allVariants: {
            color: 'black',
            fontWeight: 400,
            fontSize: '1rem'
        }
    }
});