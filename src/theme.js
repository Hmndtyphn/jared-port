// import dependencies
// createMuiTheme = createTheme now

// import { createMuiTheme } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

// create theme function for mui styling
const theme = createTheme({

    // font sizing 
    typography: {
        // about page name/ each pages headers
        h1: {
            fontFamily: "Permanent Marker",
        },

        // about page job description
        h2: {
            fontFamily: "Permanent Marker",
        },

        // about page "about me" section
        h3: {
            fontFamily: "Permanent Marker",
            fontSize: '3.4rem'
        },

        // about me section body
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

// export themes
export default theme;