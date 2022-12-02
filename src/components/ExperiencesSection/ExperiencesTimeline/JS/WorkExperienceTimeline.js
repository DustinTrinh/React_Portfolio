import React, { Fragment } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import Typography from "@mui/material/Typography";
import classes from "../CSS/Timeline.module.css";

import TimelineOppositeContent, {
    timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";

const ExperienceTimeline = (props) => {
    const exps = props.exp;

    const timeLineTemplate = exps.map((exp, index) => (
        <TimelineItem key={exp.id}>
            <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                variant="body2"
                color="text.secondary"
                className={classes.jobTimeline}
            >
                <h3>{exp.company}</h3>
                <br></br>
                <Typography variant="h5" component="span">
                    {exp.date}
                </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot
                    sx={{
                        backgroundColor: "white",
                        width: "60px",
                        height: "60px",
                    }}
                >
                    <img
                        src={exp.logo}
                        className={classes.iconPlacement}
                        alt={exp.company}
                    />
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
                <h4>{exp.title}</h4>
                <Typography className={classes.jobDesc}>
                    <ul>
                        {exp.jobDesc.map((jd, index) => (
                            <li key={index}>{jd}</li>
                        ))}
                    </ul>
                </Typography>
            </TimelineContent>
        </TimelineItem>
    ));

    return (
        <Fragment>
            <Timeline
                id="experiences_tab"
                sx={{
                    [`& .${timelineOppositeContentClasses.root}`]: {
                        flex: 0.4,
                    },
                }}
                className={classes.workExperienceItem}
            >
                {timeLineTemplate}
            </Timeline>
        </Fragment>
    );
};

export default ExperienceTimeline;
