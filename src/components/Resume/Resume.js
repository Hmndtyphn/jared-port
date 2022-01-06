// import file dependencies
import React from 'react';

// import mui 
import Container from '@mui/material/Container'
import Typography from "@mui/material/Typography";

// import resume file
import resumeFile from "../../assets/resume/Resume2021.pdf"

// react resume func
function Resume() {

    // returns current resume (pulls from public)
    return (
        <Container align="center">
            <Typography className="title" align="center" variant="h3" sx={{p: "5rem"}}>
                Resume
            </Typography>

{/* resume styling/ sizing */}
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

// exports resume
export default Resume;