import React, { Component } from "react";
import Box from "@mui/material/Box";

import BackgroundAnimation from "./BackgroundAnimation";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { HashLink as Link } from 'react-router-hash-link';

import classes from "../CSS/LandingPage.module.css";
import "animate.css/animate.min.css";

export default class LandingPage extends Component {
    render() {
        return (
            <React.Fragment>
                <Box sx={{position: "relative"}}>
                    <BackgroundAnimation />
                    <header id="home">
                        <div className="row banner">
                            <div className={`banner-text ${classes.header_}`}>
                                <h1 className="responsive-headline">Projects</h1>
                                <h3>
                                    <i>“Practice makes perfect. After a long time of practicing, our work will become natural, skillful, swift, and steady.”</i>― Bruce Lee
                                </h3>
                                <hr />
                            </div>
                            <div className = {`animate__animated animate__pulse animate__infinite ${classes.scrollForMore}`}>
                                <Link className="smoothscroll"  to="#projects_tab"><FaArrowAltCircleDown size={40}/></Link>
                            </div>
                        </div>
                        
                    </header>
                </Box>
            </React.Fragment>
        );
    }
}
