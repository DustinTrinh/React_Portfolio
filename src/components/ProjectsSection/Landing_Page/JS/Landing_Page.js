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
                                <h1 className="responsive-headline">Projects</h1>
                                <h3
                                    style={{
                                        color: "#fff",
                                        fontFamily: "sans-serif ",
                                    }}
                                >
                                    Short Desc
                                </h3>
                                <hr />
                            </div>
                            <div>
                                <a className="smoothscroll" href="#projects_tab"><FaArrowAltCircleDown size={40}/></a>
                            </div>
                        </div>
                        
                    </header>
                </Box>
            </React.Fragment>
        );
    }
}
