import { createMuiTheme } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        h1: {
            fontFamily: '"Permanent Marker", Open Sans',
        },
        h2: {
            fontFamily: '"Permanent Marker", Open Sans',
        },
        h3: {
            fontFamily: '"Permanent Marker", Open Sans',
            fontSize: '3.4rem'
        },
        h4: {
            fontFamily: '"Permanent Marker", Open Sans',
        },
        h6: {
            fontFamily: '"Permanent Marker"'
        },
        subtitle1: {
            fontFamily: 'Permanent Marker',
            fontWeight: 'Bold',
            fontSize: '20px'
        }
    }
})

export default theme;