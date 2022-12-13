import React, { Component } from "react";
import Box from "@mui/material/Box";

import BackgroundAnimation from "./BackgroundAnimation";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { HashLink as Link } from 'react-router-hash-link';
import "../CSS/text.css";
import "animate.css/animate.min.css";
import classes from "../CSS/LandingPage.module.css";
export default class LandingPage extends Component {
    render() {
        return (
            <React.Fragment>
                <Box sx={{position: "relative"}}>
                    <BackgroundAnimation />
                    <header id="home">
                        <div className="row banner">
                            <div className={`banner-text ${classes.header_}`}>
                                <h1 className="responsive-headline">
                                    Work Experiences
                                </h1>
                                <h3>
                                    <i>
                                        "Throughout the years of work
                                        experiences with different companies,
                                        I've learned various valuable lessons
                                        that will help me to improve and advance
                                        to be a better programmer."
                                    </i>
                                </h3>
                                <hr />
                            </div>
                            <div className = {`animate__animated animate__pulse animate__infinite ${classes.scrollForMore}`}>
                                <Link className="smoothscroll"  to="#experiences_tab"><FaArrowAltCircleDown size={40}/></Link>
                                
                            </div>
                        </div>
                        
                    </header>
                </Box>
            </React.Fragment>
        );
    }
}
