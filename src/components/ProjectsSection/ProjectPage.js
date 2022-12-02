import React, { Fragment } from "react";
import LandingPage from "./LandingPage/JS/LandingPage";
import ProjectsContainer from "./Projects/ProjectsContainer";

const ProjectPage = () => {

    return(
        <Fragment>
            <LandingPage/>
            <ProjectsContainer/>
        </Fragment>
    )
}

export default ProjectPage;