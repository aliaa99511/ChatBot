import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#0e69fa', // main brand color (indigo)
        },
        secondary: {
            main: '#22c55e', // optional accent (green)
        },
        background: {
            default: 'transparent', // important for bg image
        }
    },
    shape: {
        borderRadius: 12
    },
    typography: {
        fontFamily: 'Inter, sans-serif'
    }
});