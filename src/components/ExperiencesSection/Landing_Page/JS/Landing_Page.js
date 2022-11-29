import React, { Component } from "react";
import Box from "@mui/material/Box";

import Background_Animation from "./Background_Animation";
import { FaArrowAltCircleDown } from "react-icons/fa";
import "../CSS/text.css";

export default class Landing_Page extends Component {
    render() {
        return (
            <React.Fragment>
                <Box>
                    <Background_Animation />
                    <header id="home">
                        <div className="row banner">
                            <div className="banner-text">
                                <h1 className="responsive-headline">
                                    Work Experiences
                                </h1>
                                <h3
                                    style={{
                                        color: "#fff",
                                        fontFamily: "sans-serif ",
                                    }}
                                >
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
                            <div>
                                <a className="smoothscroll" href="#skills_tab"><FaArrowAltCircleDown size={40}/></a>
                            </div>
                        </div>
                        
                    </header>
                </Box>
            </React.Fragment>
        );
    }
}
