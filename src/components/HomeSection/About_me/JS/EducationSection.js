import React, { Fragment } from "react";
import { Grid } from "@mui/material";
import {  NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";

import eduIllustration from "assets/images/about/education.svg";
import classes from "../CSS/About_Me_Section.module.css";



const EducationSection = (props) => {
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
                <h1>Education</h1>
                    <Typography>
                        Find out more about my Skills, School/Platforms and Certificates throughout the years. As I will always learn new technologies and create more projects. The list will go on and on ... 
                    </Typography>
                    <NavLink className="nav_link" to="/education" > Explore Skills & More </NavLink>
                </Grid>
                <Grid item xs={4}>
                    <img src={eduIllustration} alt="Education Illustration" className={classes.about_me_img}/>
                </Grid>
                <Grid item xs={2}></Grid>
                
            </Grid>
        </Fragment>
    );
};

export default EducationSection;
