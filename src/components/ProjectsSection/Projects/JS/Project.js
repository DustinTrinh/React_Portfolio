import React, { Fragment } from "react";
import Grid from "@mui/material/Grid";
import { FaGithub, FaStar, FaRegArrowAltCircleLeft } from "react-icons/fa";

import TechStackTable from "./TechStackTable";
import classes from "../CSS/ProjectContainer.module.css";

const Project = (props) => {
    const projectProps = props.project;
    const difficulties = [...Array(projectProps.difficulty)].map((t, index) => (
        <FaStar key={index} />
    ));

    return (
        <Fragment>
            <Grid container spacing={2}>
                <Grid item xs={1}></Grid>
                <Grid item xs={8}>
                    <h1>{projectProps.title}</h1>
                    <a href={projectProps.url} target="_blank">
                        <FaGithub size={30} />
                        <p>Go to Github to learn more (Code + Documentation)</p>
                    </a>
                    <div>
                        <h6>Difficulty: {difficulties}</h6>
                    </div>
                    <h6>Status: {projectProps.status}</h6>
                    <h6>Date: {projectProps.date}</h6>
                    <h2>Introduction</h2>
                    <p>{projectProps.introduction}</p>

                    <h2>Technology Stack</h2>
                    <Grid container spacing={2} className={classes.techTable}>
                        <Grid item xs={4}>
                            <TechStackTable stack={projectProps.techStack.frontEnd}/>
                        </Grid>
                        <Grid item xs={4}>
                            <TechStackTable stack={projectProps.techStack.backEnd}/>
                        </Grid>
                        <Grid item xs={4}>
                            <TechStackTable stack={projectProps.techStack.others}/>
                        </Grid>
                    </Grid>
                    <h2>Discussion</h2>
                    <p>{projectProps.discussion}</p>
                    <h2>Result</h2>
                    <p>{projectProps.result}</p>
                    <h2>Retrospective</h2>
                    <p>{projectProps.retrospective} </p>
                </Grid>
                <Grid item xs={3}></Grid>
            </Grid>
        </Fragment>
    );
};

export default Project;
