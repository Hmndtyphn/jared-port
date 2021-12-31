import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Box from "@mui/material/Box";
import "./css/Footer.css";

function Footer() {
    return (
        <Box component="footer" className="footer" sx={{ p:1, flexGrow: 1 }}>
            <Grid container cols={12} spacing={1}>
                <Grid item xs>
                    <Typography className="footer-name" variant="subtitle1" align="left">
                       Created by Jared Elliott 
                    </Typography>
                </Grid>
            
            <Grid align="right" item xs={6}>
                <IconButton
                onClick={() => 
                (window.location.href = "https://github.com/Hmndtyphn")
            }
            aria-label="github"
            size="large"
            align="right">
                {/* <GitHubIcon fontsize="inherit" /> */}
            </IconButton>

            <IconButton
            onclick={() => 
            (window.location.href = 
                "")
            }
            aria-label="linked-in"
            className="icon"
            size="large"
            align="right"
            >
                {/* <LinkedInIcon fontsize="inherit" /> */}
            </IconButton>
            </Grid>
        </Grid>
    </Box>
    );
}

export default Footer;