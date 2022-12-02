import React, { Fragment } from "react";
import LandingPage from "./LandingPage/JS/LandingPage";
import AboutMe from "./About_me/JS/AboutMe";
import Homepage_Data from "assets/Data/HomepageData";

const HomePage = (props) => {
    return (
        <Fragment>
            <LandingPage resumeData={Homepage_Data} />
            <AboutMe />
        </Fragment>
    );
};

export default HomePage;
