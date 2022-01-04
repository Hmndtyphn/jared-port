import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import "./css/Footer.css";

// simple mui footer 
function Footer() {
    return (
        <Box component="footer" className="footer" sx={{ p:.5, flexGrow: 0 }}>
            <Grid container cols={12} spacing={1}>
                <Grid item xs>
                    <Typography className="footer-name" variant="subtitle1" align="left">
                       Created by: Jared Elliott 
                    </Typography>
                </Grid>
        </Grid>
    </Box>
    );
}

// exports footer
export default Footer;