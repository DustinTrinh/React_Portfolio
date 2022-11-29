import React, { Fragment } from "react";
import Landing_Page from "./Landing_Page/JS/Landing_Page";
import ProjectsContainer from "./Projects/ProjectsContainer";

const ProjectPage = () => {

    return(
        <Fragment>
            <Landing_Page/>
            <ProjectsContainer/>
        </Fragment>
    )
}

export default ProjectPage;