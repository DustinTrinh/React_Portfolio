import React, { Fragment } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import Typography from "@mui/material/Typography";
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import { SiUdemy, SiCoursera } from "react-icons/si";

import classes from "../CSS/SchoolList.module.css";
import { FaSchool } from "react-icons/fa";
const SchoolList = () => {
    return (
        <Fragment>
            <Timeline className={classes.workExperienceItem}>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: "auto 0" }}
                        align="right"
                        variant="body2"
                        color="text.secondary"
                        className={classes.jobTimeline}
                    >
                        <Typography variant="h3" component="span">
                            Seneca College
                        </Typography>
                        <br></br>
                        <Typography variant="h5" component="span">
                            September 2019 - December 2022
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
                            <FaSchool className={classes.iconStyle} size={25} />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: "12px", px: 2 }}>
                        <Typography variant="h4" component="span">
                            Honours Bachelor of Technology - Software
                            Development
                        </Typography>
                        <Typography className={classes.jobDesc}>
                            <ul>
                                <li>GPA: 3.6/4.0</li>
                                <li>Diploma to Degree Scholarship Year 2019</li>
                            </ul>
                        </Typography>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: "auto 0" }}
                        align="right"
                        variant="body2"
                        color="text.secondary"
                        className={classes.jobTimeline}
                    >
                        <Typography variant="h3" component="span">
                            Seneca College
                        </Typography>
                        <br></br>
                        <Typography variant="h5" component="span">
                            September 2016 - September 2019
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
                            <FaSchool className={classes.iconStyle} size={25} />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: "12px", px: 2 }}>
                        <Typography variant="h4" component="span">
                            Computer Programming & Analysis
                        </Typography>
                        <Typography className={classes.jobDesc}>
                            <ul>
                                <li>GPA: 3.7/4.0</li>
                                <li>
                                    Awarded President's Honour List Year 2017
                                </li>
                            </ul>
                        </Typography>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: "auto 0" }}
                        align="right"
                        variant="body2"
                        color="text.secondary"
                        className={classes.jobTimeline}
                    >
                        <Typography variant="h3" component="span">
                            Udemy
                        </Typography>
                        <br></br>
                        <Typography variant="h5" component="span">
                            September 2016 - Present
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
                            <SiUdemy className={classes.iconStyle} size={25} />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: "12px", px: 2 }}>
                        <Typography variant="h4" component="span">
                            Continuously Upgrade Skills (Practical)
                        </Typography>
                        <Typography className={classes.jobDesc}>
                            <ul>
                                <li>
                                    Take courses to improve and enhance
                                    programming skills
                                </li>
                                <li>
                                    Learn, adopt and apply new frameworks,
                                    knowledge to personal and professional
                                    projects.
                                </li>
                            </ul>
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: "auto 0" }}
                        align="right"
                        variant="body2"
                        color="text.secondary"
                        className={classes.jobTimeline}
                    >
                        <Typography variant="h3" component="span">
                            Udemy
                        </Typography>
                        <br></br>
                        <Typography variant="h5" component="span">
                            September 2016 - Present
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
                            <SiCoursera className={classes.iconStyle} size={25} />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: "12px", px: 2 }}>
                        <Typography variant="h4" component="span">
                            Continuously Upgrade Skills (Theoretical)
                        </Typography>
                        <Typography className={classes.jobDesc}>
                            <ul>
                                <li>
                                    Take courses to improve and enhance
                                    programming skills
                                </li>
                                <li>
                                    Learn, adopt and apply new frameworks,
                                    knowledge to personal and professional
                                    projects.
                                </li>
                            </ul>
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </Fragment>
    );
};

export default SchoolList;
