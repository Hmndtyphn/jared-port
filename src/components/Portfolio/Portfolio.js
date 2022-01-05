// import dependencies
import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Project from "../Project/Project";

// portfolio react function
function Portfolio() {

    // returns the portfolio data
    return (
        <Box sx={{ p: "10rem"}}>
            <Typography className="title" align="center" variant="h2" sx={{pb: "10rem"}}>Projects I've Been Working On</Typography>
            <br />
            <Project />
        </Box>
    )
}

// exports portfolio
export default Portfolio;
