import React, { Fragment } from "react";
import LandingPage from "./LandingPage/JS/LandingPage";
import ExperienceTimeline from "./ExperiencesTimeline/JS/WorkExperienceTimeline";
import WorkExperience from "assets/Data/WorkExperience";

const ExperiencePage = () => {
    return(
        <Fragment>
            <LandingPage/>
            <ExperienceTimeline exp={WorkExperience}/>
        </Fragment>
    )
}

export default ExperiencePage;