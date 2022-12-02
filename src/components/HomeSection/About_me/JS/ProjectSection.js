import React, { Fragment } from "react";
import { Grid } from "@mui/material";
import {  NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";

import projectsIllustration from "assets/images/about/project.svg";
import classes from "../CSS/About_Me_Section.module.css";

const ProjectSection = (props) => {
    return (
        <Fragment>
            <Grid
                container
                spacing={2}
                alignItems="center"
                justify="center"
                justifyContent="center"
                wrap="nowrap"
                className={classes.font_styling}
            >
                <Grid item xs={2}></Grid>
                <Grid item xs={4}>
                    <img src={projectsIllustration} alt="Projects Illustration" className={classes.about_me_img}/>
                </Grid>
                <Grid item xs={4}>
                    <h1>Projects</h1>
                    <Typography>
                        Where I showcase most of my personal, professional or school projects. 
                        Each projects will have in-depth details about Purposes and technology stacks. 
                        Even better, viewers can go to Github and see all the codes and download it.
                    </Typography>
                    <NavLink className="nav_link" to="/projects" > Explore Projects </NavLink>
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>
        </Fragment>
    );
};

export default ProjectSection;
