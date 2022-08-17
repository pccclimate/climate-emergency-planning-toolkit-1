import {createTheme} from "@mui/material";

export const themeOptions = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#3f51b5',
        },
        secondary: {
            main: '#f50057',
        },
    },
    typography: {
        fontFamily: "'Lato', sans-serif",
    },
});