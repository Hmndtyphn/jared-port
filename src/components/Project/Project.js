import React, {useState} from 'react';
import {ImageList, ImageListItem, ImageListItemBar} from '@mui/material'

// allows auto image upload for github project files
function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `https://res.cloudinary.com/dceprxjzq/image/upload/w_${size * cols},h_${size * rows},c_lfill/${image}.jpg`,
      srcSet: `https://res.cloudinary.com/dceprxjzq/image/upload/w_${size * cols},h_${size * rows},c_lfill/${image}.jpg`,
    };
  }

//   project data 1-6
function Project() {

    const [projects] = useState([
        {
            image: "budget-tracker",
            title: "Budget Tracker",
            description: "A budget tracker application, built using webpack, mongodb, as a progressive web application. This application is built to update banking budgets for offline use.",
            appLink: "https://agile-plateau-97433.herokuapp.com/",
            repoLink: "https://github.com/Hmndtyphn/budget-tracker",
            rows: 1,
            cols: 1
        },
        {
            image: "Group-proj-2",
            title: "Down Scout",
            description: "A simple server detector, built with authentication, and favorites in mind.",
            appLink: "https://hmndtyphn.github.io/Group-proj-2/",
            repoLink: "https://github.com/Hmndtyphn/Group-proj-2",
            rows: 1,
            cols: 2
        },
        {
            image: "e-commerce-backend",
            title: "E commerce Backend",
            description: "",
            appLink: "",
            repoLink: "https://github.com/Hmndtyphn/e-commerce-backend",
            rows: 1,
            cols: 2
        },
        {
            image: "note-takr",
            title: "Note Taker",
            description: "",
            appLink: "https://note-takr23.herokuapp.com/",
            repoLink: "https://github.com/Hmndtyphn/note-takr",
            rows: 1,
            cols: 1
        },
        {
            image: "Weather-Pro",
            title: "Weather Pro",
            description: "",
            appLink: "https://hmndtyphn.github.io/Weather-Pro/",
            repoLink: "https://github.com/Hmndtyphn/Weather-Pro",
            rows: 1,
            cols: 1
        },
        {
            image: "",
            title: "",
            description: "",
            appLink: "",
            repoLink: "",
            rows: 1,
            cols: 2
        }
    ]);

    // returns the above project data
    return (

        <ImageList
          sx={{ width: "100%", height: "100%", overflowY: 'scroll'}}
          variant="quilted"
          cols={3}
          rowHeight={525}
        >
            {/* maps data with images */}
            {projects.map((project) => (
                <ImageListItem key={project.image} cols={project.cols || 1} rows={project.rows || 1}>
                    <img 
                        {...srcset(project.image, 525, project.rows, project.cols)}
                        alt={project.title}
                        loading="lazy"
                        onClick={() => (window.location.href = project.appLink)}
                    ></img>
                    <ImageListItemBar
                        title={project.title}
                        subtitle={project.description}
                        >

                    </ImageListItemBar>
                </ImageListItem>
            ))}
        </ImageList>

    )
}

// exports project file
export default Project;