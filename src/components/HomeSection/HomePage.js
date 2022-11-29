import React, { Fragment } from "react";
import Landing_Page from "./Landing_Page/JS/Landing_Page";
import About_Me from "./About_me/JS/About_Me";
import resumeData from "../../Static_Data/resumeData";
import aboutMeData from "../../Static_Data/aboutMeData";

const HomePage = (props) => {
    return (
        <Fragment>
            <Landing_Page resumeData={resumeData} />
            <About_Me aboutMeData={aboutMeData} />
        </Fragment>
    );
};

export default HomePage;
