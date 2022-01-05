// import dependencies
import React from "react";
import "./css/About.css";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import coverPhoto from "../../assets/cover/IMG_4231.jpeg";
import coverPhoto2 from "../../assets/cover/IMG_2993.jpg";

// about function
function About() {
    return (
        // introduction page (needs photo)
        <Box sx={{ px: 5, pt: 0, pb: 15 }}>
        <Typography className="title" variant="h1" component="h1" align="left" sx={{pt: 10}} gutterBottom>
            Hello, I'm Jared Elliott

        </Typography>
        {/* Issue with font not changing here------related to sizing... */}
        <Typography className="sub-title" variant="h4" align="left" sx={{ pb: "5rem"}} gutterBottom>
            Full Stack Web Developer
        </Typography>


        {/* photo is not coming through */}
        <Grid container sx={{display: "flex", flexWrap: "wrap", justifyContent: "center"}} alignItems="center">
        <Grid item xs>
            <Container>
                <img src={coverPhoto} style={{ height: "30rem", width: "25rem" }} align="right" alt="my image 1" />
                <img src={coverPhoto2} style={{ height: "30rem", width: "25rem" }} align="center" alt="my image 2" />
            </Container>
        </Grid>
        <Grid item xs={5}>
          <Container className="background">
            <Typography className="about-title" variant="h3" align="center" sx={{ pb: "2rem"}} gutterBottom>
                Get To Know Me
            </Typography>

            {/* about section */}
            <Typography  className="about-content" variant="subtitle1" align="center">
                Hi there, I'm Jared Elliott, a full stack web developer from St. Louis, MO. I am currently finishing a Full stack web development course with Wash U. In my spare time, I enjoy writing music, gaming on my PS5 or Nintendo Switch, or trying out new craft beers.
            </Typography>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
}

// export about page
export default About;