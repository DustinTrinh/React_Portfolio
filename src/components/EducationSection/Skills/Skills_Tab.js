import React, { Fragment } from "react";
import Grid from '@mui/material/Grid';

import SkillsList from "./JS/SkillsList";
import FE_Skills from "assets/Data/FE_Skills_Data";
import BE_Skills from "assets/Data/BE_Skills_Data";
import OT_Skills from "assets/Data/OT_Skills_Data";

import classes from "./CSS/Skills_Tab.module.css";
const Skills_Tab = () => {
    return (
        <Fragment>
            <div id="skills_tab" className={classes.tab}> 
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <SkillsList skills={FE_Skills} title="Front End" category="FE"/>
                </Grid>
                <Grid item xs={4}>
                    <SkillsList skills={BE_Skills} title="Back End" category="BE"/>
                </Grid>
                <Grid item xs={4}>
                    <SkillsList skills={OT_Skills} title="Others" category="OT"/>
                </Grid>
            </Grid>
            </div>
        </Fragment>
    );
};

export default Skills_Tab;
