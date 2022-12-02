import React, {Fragment} from "react";
import SchoolsPlatforms_Data from "assets/Data/SchoolsPlatforms_Data";

import SchoolList from "./JS/SchoolList";

const SchoolTabs = () => {
    return(
        <Fragment>
            <SchoolList schools={SchoolsPlatforms_Data}/>
        </Fragment>
    )
}

export default SchoolTabs;