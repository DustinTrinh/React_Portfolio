import React, { Component } from "react";
import Box from "@mui/material/Box";

import Background_Animation from "./Background_Animation";
import { FaArrowAltCircleDown } from "react-icons/fa";

export default class Landing_Page extends Component {
    render() {
        return (
            <React.Fragment>
                <Box>
                    <Background_Animation />
                    <header id="home">
                        <div className="row banner">
                            <div className="banner-text">
                                <h1 className="responsive-headline">Education</h1>
                                <h3
                                    style={{
                                        color: "#fff",
                                        fontFamily: "sans-serif ",
                                    }}
                                >
                                    <i>"We now accept the fact that learning is a lifelong process of keeping abreast of change. And the most pressing task is to teach people how to learn."</i>
                                    - <b>Peter Drucker</b>
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
