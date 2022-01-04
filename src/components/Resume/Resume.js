// import file dependencies
import React from 'react';
import Container from '@mui/material/Container'
import Typography from "@mui/material/Typography";
import resumeFile from "../../assets/resume/Resume2021.pdf"

// react resume func
function Resume() {
    // returns current resume (pulls from public)
    return (
        <Container align="center">
            <Typography className="title" align="center" variant="h3" sx={{p: "5rem"}}>
                Resume
            </Typography>

            <iframe
            id="resume-pdf"
            title="Jared Elliott Resume"
            src={resumeFile}
            frameboarder="5"
            scrolling="auto"
            height="1200"
            width="100%"></iframe>
        </Container>
    )
}

export default Resume;