import React, { Component, Fragment } from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';

import classes from "../CSS/About_Me_Header.module.css";
import ProjectSection from "./ProjectSection";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import "animate.css/animate.min.css";



export default class AboutMe extends Component {
    render() {
        return (
            <Fragment>
                <div id="#about_me" className={classes.header_}>
                    
                        
                        <AnimationOnScroll 
                            animateIn="animate__bounceInRight"
                            animateOut="fadeOut"
                            duration={1.75}
                            delay={0}
                            className={classes.sectionContainer}
                        >
                            <ProjectSection />
                        </AnimationOnScroll >

                        <AnimationOnScroll 
                            animateIn="animate__bounceInLeft"
                            animateOut="fadeOut"
                            duration={1.75}
                            delay={0}
                            className={classes.sectionContainer}
                        >
                            <EducationSection />
                        </AnimationOnScroll >

                        <AnimationOnScroll 
                            animateIn="animate__bounceInRight"
                            animateOut="fadeOut"
                            duration={1.75}
                            delay={0}
                            className={classes.sectionContainer}
                        >
                             <ExperienceSection />
                        </AnimationOnScroll >
                        
                </div>
            </Fragment>
        );
    }
}
