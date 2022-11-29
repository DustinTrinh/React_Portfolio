import React, { Component, Fragment } from "react";
import { Grid } from "@mui/material";
import classes from "../CSS/About_Me_Header.module.css";
import ProjectSection from "./ProjectSection";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import "animate.css/animate.min.css";

import { AnimationOnScroll } from 'react-animation-on-scroll';

export default class About_Me extends Component {
    render() {
        const aboutMeData = this.props.aboutMeData;
        return (
            <Fragment>
                <div id="#about_me">
                    <Grid spacing={2} container>
                        <Grid item xs={12} className={classes.header_}>
                            <h1 className={classes.header_}>About Me</h1>
                        </Grid>
                        <AnimationOnScroll 
                            animateIn="animate__bounceInRight"
                            animateOut="fadeOut"
                            duration={1.75}
                            delay={0}
                        >
                            <ProjectSection />
                        </AnimationOnScroll >

                        <AnimationOnScroll 
                            animateIn="animate__bounceInLeft"
                            animateOut="fadeOut"
                            duration={1.75}
                            delay={0}
                        >
                            <EducationSection />
                        </AnimationOnScroll >

                        <AnimationOnScroll 
                            animateIn="animate__bounceInRight"
                            animateOut="fadeOut"
                            duration={1.75}
                            delay={0}
                        >
                             <ExperienceSection />
                        </AnimationOnScroll >
                        
                       
                    </Grid>
                </div>
            </Fragment>
        );
    }
}
