import React, {useState} from 'react';
import {ImageList, ImageListItem, ImageListItemBar} from '@mui/material'

function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `https://res.cloudinary.com/dceprxjzq/image/upload/w_${size * cols},h_${size * rows},c_lfill/${image}.jpg`,
      srcSet: `https://res.cloudinary.com/dceprxjzq/image/upload/w_${size * cols},h_${size * rows},c_lfill/${image}.jpg`,
    };
  }

function Project() {

    const [projects] = useState([
        {
            image: "budget-tracker",
            title: "Budget Tracker",
            description: "An app to track a budget on or offline",
            appLink: "",
            repoLink: "https://github.com/Hmndtyphn/jared-port",
            rows: 1,
            cols: 1
        },
        {
            image: "santas-nice-list",
            title: "Santa's Nice List",
            description: "",
            appLink: "",
            repoLink: "",
            rows: 1,
            cols: 2
        },
        {
            image: "",
            title: "",
            description: "",
            appLink: "",
            repoLink: "",
            rows: 1,
            cols: 2
        },
        {
            image: "",
            title: "",
            description: "",
            appLink: "",
            repoLink: "",
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

    return (

        <ImageList
          sx={{ width: "100%", height: "100%", overflowY: 'scroll'}}
          variant="quilted"
          cols={3}
          rowHeight={525}
        >
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

export default Project;