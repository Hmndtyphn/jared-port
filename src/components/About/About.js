// import dependencies
import React from "react";
import "./css/About.css";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import coverPhoto from "../../assets/cover/IMG_2993.jpg";

// about function
function About() {
    return (
        // introduction page (needs photo)
        <Box sx={{ flexGrow: 1, px: 10, pt: 15, pb: 30 }}>
        <Typography className="title" variant="h1" component="h2" align="left" sx={{pt: 5}} gutterBottom>
            Hello, I'm Jared Elliott

        </Typography>
        {/* Issue with font not changing here */}
        <Typography className="sub-title" variant="h4" align="left" sx={{ pb: "5rem"}} gutterBottom>
            Full Stack Web Developer
        </Typography>


        {/* photo is not coming through */}
        <Grid container sx={{display: "flex", flexWrap: "wrap", justifyContent: "center"}} alignItems="center">
        <Grid item xs>
            <Container>
                <img src={coverPhoto} style={{ height: "25rem", width: "20rem" }} align="center" alt="cover" />
            </Container>
        </Grid>
        <Grid item xs={5}>
          <Container className="background">
            <Typography className="about-title" variant="h3" align="center" sx={{ pb: "2rem"}} gutterBottom>
                Get To Know Me
            </Typography>

            {/* about section */}
            <Typography  className="about-content" variant="subtitle1" align="center">
                Hi there, I'm Jared Elliott, a full stack web developer from St. Louis, MO.
            </Typography>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
}

// export about page
export default About;