import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TabPanel from "@mui/lab/TabPanel";
import TabList from "@mui/lab/TabList";
import TabContext from "@mui/lab/TabContext";

import classes from "./CSS/ProjectContainer.module.css";
import projects from "assets/Data/Projects_Data";
import IntroductionTab from "./JS/IntroductionTab";

import Project from "./JS/Project";

export default function ProjectsContainer() {
    const [value, setValue] = React.useState("intro");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const tabs = projects.map((project, index) => (
        <Tab key={project.id} label={project.title} value={project.id} />
    ));
    const tabs_content = projects.map((project, index) => (
        <TabPanel value={project.id} key={index}>
            <Project project={project} />
        </TabPanel>
    ));

    return (
        <React.Fragment>
            <Box id="projects_tab" sx={{ width: "100%", typography: "body1" }}>
                <TabContext value={value}>
                    <Grid container spacing={0}>
                        <Grid item xs={2}>
                            <Box
                                sx={{
                                    borderBottom: 1,
                                    borderColor: "divider",
                                    textAlign: "center",
                                }}
                            >
                                <TabList
                                    onChange={handleChange}
                                    centered
                                    orientation="vertical"
                                >
                                    <Tab value="intro" label="Instructions"/>
                                    {tabs}
                                </TabList>
                            </Box>
                        </Grid>
                        <Grid item xs={10}>
                            <TabPanel value="intro">
                                <IntroductionTab/>
                            </TabPanel>
                            {tabs_content}
                        </Grid>
                    </Grid>
                </TabContext>
            </Box>
        </React.Fragment>
    );
}
