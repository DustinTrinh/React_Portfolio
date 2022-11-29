import React, { Fragment } from "react";
import Landing_Page from "./Landing_Page/JS/Landing_Page";
import ExperienceTimeline from "./ExperiencesTimeline/JS/WorkExperienceTimeline";

const ExperiencePage = () => {
    return(
        <Fragment>
            <Landing_Page/>
            <ExperienceTimeline/>
        </Fragment>
    )
}

export default ExperiencePage;