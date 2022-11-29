import React, { Fragment } from "react";
import { Grid } from "@mui/material";

import EducationTabs from "./Tabs/JS/EducationTabs";
import Landing_Page from "./Landing_Page/JS/Landing_Page";

const EducationPage = () => {
    return (
        <Fragment>
            <Landing_Page/>
            <EducationTabs/>
        </Fragment>
    );
};

export default EducationPage;
