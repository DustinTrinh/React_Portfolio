import React, { Component } from "react";

import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import NavBar from "./NavBar";
import Background_Animation from "./Background_Animation";
import avatar from "../../../../assets/images/avatar.png";
import { FaArrowAltCircleDown } from "react-icons/fa";

export default class Landing_Page extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <React.Fragment>
                <Box>
                    <Background_Animation />
                    <header id="home">
                       
                        <div className="row banner">
                            <div className="banner-text">
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
                                    I am {resumeData.name}.
                                </h1>
                                <h3
                                    style={{
                                        color: "#fff",
                                        fontFamily: "sans-serif ",
                                    }}
                                >
                                    I am a {resumeData.role}.
                                    {resumeData.roleDescription}
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
                            <div>
                                <a className="smoothscroll" href="#about_me"><FaArrowAltCircleDown size={40}/></a>
                            </div>
                        </div>
                        
                    </header>
                </Box>
            </React.Fragment>
        );
    }
}
