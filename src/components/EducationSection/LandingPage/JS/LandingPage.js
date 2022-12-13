import React, { Component } from "react";
import Box from "@mui/material/Box";

import BackgroundAnimation from "./BackgroundAnimation";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { HashLink as Link } from 'react-router-hash-link';
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
                                <h1 className="responsive-headline">Education</h1>
                                <h3>
                                    <i>"We now accept the fact that learning is a lifelong process of keeping abreast of change. And the most pressing task is to teach people how to learn."</i>
                                    - <b>Peter Drucker</b>
                                </h3>
                                <hr />
                            </div>
                            <div className = {`animate__animated animate__pulse animate__infinite ${classes.scrollForMore}`}>
                                <Link className="smoothscroll"  to="#SkillsTab"><FaArrowAltCircleDown size={40}/></Link>
                            </div>
                        </div>
                    </header>
                </Box>
            </React.Fragment>
        );
    }
}
