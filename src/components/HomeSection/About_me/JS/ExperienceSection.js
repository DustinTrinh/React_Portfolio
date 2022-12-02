import React, { Fragment } from "react";
import { Grid } from "@mui/material";
import { NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";

import expIllustration from "assets/images/about/work.svg";
import classes from "../CSS/About_Me_Section.module.css";

const ExperienceSection = (props) => {
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
                    <img
                        src={expIllustration}
                        alt="Experience Illustration"
                        className={classes.about_me_img}
                    />
                </Grid>
                <Grid item xs={4}>
                    <h1>Experiences</h1>
                    <Typography>
                        Timeline of my Work Experiences as a developer since
                        2018. For each positions, I layed out my duties,
                        achievements and skills learned.{" "}
                    </Typography>
                    <NavLink className="nav_link" to="/experience">
                        Explore Work Experiences
                    </NavLink>
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>
        </Fragment>
    );
};

export default ExperienceSection;
