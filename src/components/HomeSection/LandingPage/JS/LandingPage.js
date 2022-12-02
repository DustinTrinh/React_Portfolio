import React, { Component } from "react";

import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import BackgroundAnimation from "./BackgroundAnimation";
import avatar from "assets/images/avatar.png";
import { FaArrowAltCircleDown } from "react-icons/fa";
import classes from "../CSS/HomeLandingPage.module.css";
import "animate.css/animate.min.css";

export default class LandingPage extends Component {
    
    render() {
        let pulseClasses = "animate__animated animate__pulse animate__infinite " + classes.scrollForMore;
        let resumeData = this.props.resumeData;
        return (
            <React.Fragment>
                <Box sx={{position: "relative"}}>
                    <BackgroundAnimation />
                    <header id="home">
                       
                        <div className="row banner">
                            <div className={`banner-text ${classes.font_styling}`}>
                                <Grid container spacing={3}>
                                    <Grid item xs={4}></Grid>
                                    <Grid item xs={4}>
                                        <Stack
                                            direction="row"
                                            style={{
                                                justifyContent: "center",
                                                display: "flex",
                                            }}
                                            spacing={1}
                                        >
                                            <Avatar
                                                sx={{
                                                    backgroundColor: "#ffffff",
                                                    height: "160px",
                                                    width: "160px",
                                                }}
                                                src={avatar}
                                            />
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={4}></Grid>
                                </Grid>

                                <h1 className="responsive-headline">
                                    {resumeData.name}.
                                </h1>
                                <h3>
                                   {resumeData.description}
                                </h3>
                                <hr />
                                <ul className="social">
                                    {resumeData.socialLinks &&
                                        resumeData.socialLinks.map((item) => {
                                            return (
                                                <li key={item.name}>
                                                    <a
                                                        href={item.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <i
                                                            className={
                                                                item.className
                                                            }
                                                        ></i>
                                                    </a>
                                                </li>
                                            );
                                        })}
                                </ul>
                            </div>
                            <div className={pulseClasses} >
                                <h4>Scroll Down for more!</h4>
                                <FaArrowAltCircleDown size={40}/>
                                
                            </div>
                        </div>
                        
                    </header>
                </Box>
            </React.Fragment>
        );
    }
}
