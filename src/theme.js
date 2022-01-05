// import dependencies
// createMuiTheme = createTheme now
// import { createMuiTheme } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        h1: {
            fontFamily: "Permanent Marker",
        },
        h2: {
            fontFamily: "Permanent Marker",
        },

        h3: {
            fontFamily: "Permanent Marker",
            fontSize: '3.4rem'
        },

        h4: {
            fontFamily: "Permanent Marker",
        },

        h6: {
            fontFamily: '"Permanent Marker"'
        },
        subtitle1: {
            fontFamily: 'Permanent Marker',
            fontWeight: 'Bold',
            fontSize: '30px'
        }
    }
})

export default theme;