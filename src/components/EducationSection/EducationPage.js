import React, { Fragment } from "react";

import EducationTabs from "./Tabs/JS/EducationTabs";
import LandingPage from "./LandingPage/JS/LandingPage";
const EducationPage = () => {
    return (
        <Fragment>
            <LandingPage/>
            <EducationTabs/>
        </Fragment>
    );
};

export default EducationPage;
