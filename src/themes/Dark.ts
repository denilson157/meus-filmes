import { createTheme } from '@mui/material'
import { yellow } from '@mui/material/colors'
export const DarkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: yellow[700],
            dark: yellow[800],
            light: yellow[500],
            contrastText: "#ffffff"
        },
        background: {
            paper: '#303134',
            default: '#202124',
        },
    },
    typography: {
        allVariants: {
            color: 'white',            
            fontWeight: 400,
            fontSize: '1rem'
        }
    }
});