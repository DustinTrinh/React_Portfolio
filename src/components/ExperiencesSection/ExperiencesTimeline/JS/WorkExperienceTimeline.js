import React, { Fragment } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import Typography from "@mui/material/Typography";

import CGI_Logo from "../../../../assets/images/CGI_Logo.svg";
import CIBC_Logo from "../../../../assets/images/CIBC_Logo.svg";
import classes from "../CSS/Timeline.module.css";

import TimelineOppositeContent, {
  timelineOppositeContentClasses
} from "@mui/lab/TimelineOppositeContent";

const ExperienceTimeline = () => {
    return (
      <Fragment>
        <Timeline
            sx={{
                [`& .${timelineOppositeContentClasses.root}`]: {
                    flex: 0.4,
                },
            }}
            className={classes.workExperienceItem}
        >
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: "auto 0" }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                    className={classes.jobTimeline}
                >
                    <Typography variant="h3" component="span">
                        CIBC
                    </Typography>
                    <br></br>
                    <Typography variant="h5" component="span">
                        January 2022 - Present
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
                            src={CIBC_Logo}
                            className={classes.iconPlacement}
                            alt="CIBC Logo"
                        />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Typography variant="h4" component="span">
                        Application Developer
                    </Typography>
                    <Typography className={classes.jobDesc}>
                        <ul>
                            <li>- Debug, maintain and fix bugs using PL/SQL</li>
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
                        CGI
                    </Typography>
                    <br></br>
                    <Typography variant="h5" component="span">
                        January 2021 — August 2021
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
                            src={CGI_Logo}
                            className={classes.iconPlacement_CGI}
                            alt="CGI Logo"
                        />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Typography variant="h4" component="span">
                        Java Developer Co-op
                    </Typography>
                    <Typography className={classes.jobDesc}>
                        <ul>
                            <li></li>
                            <li>
                                - Using Java, JSP, HTML, CSS, JavaScript, and
                                MySQL to create, maintain and optimize internal
                                software.
                            </li>
                            <li>
                                - Worked on software that Manages staff, Teams,
                                Schedules, and other resources.
                            </li>
                            <li>
                                - Constantly research new technologies and
                                methodologies in order to meet the demands of
                                managers and co-workers
                            </li>
                            <li>
                                - Troubleshoot problems and develop successful
                                solutions.
                            </li>
                            <li>
                                - Collaborated to create strategic initiatives
                                to design, code, and test solutions
                            </li>
                            <li>
                                - Effectively coded software changes and
                                alterations based on specific design
                                specifications.
                            </li>
                            <li>
                                - Worked well independently and on a team to
                                solve problems.
                            </li>
                            <li>
                                - Organized and prioritized work to complete
                                assignments in a timely, efficient manner.
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
                        CIBC
                    </Typography>
                    <br></br>
                    <Typography variant="h5" component="span">
                        September 2018 — April 2019
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
                            src={CIBC_Logo}
                            className={classes.iconPlacement}
                            alt="CIBC Logo"
                        />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Typography variant="h4" component="span">
                        Application Developer Co-op
                    </Typography>
                    <Typography className={classes.jobDesc}>
                        <ul>
                            <li>
                                - Collaborated with team members to meet daily
                                demands and handle challenging projects.
                            </li>
                            <li>
                                - Updated office files daily and kept records
                                organized.
                            </li>
                            <li>
                                - Test and report bugs from User Interface (UI)
                                errors or efficiency issues of applications on
                                Web, Android, and iOS platforms.
                            </li>
                            <li>
                                - Complete documentation for projects such as
                                Copy Deck.
                            </li>
                            <li>
                                - Create, update, and upload keys based on Copy
                                Deck to CMS.
                            </li>
                            <li>
                                - Fix, update, and maintain web pages through
                                XHTML, CSS, and JavaScript.
                            </li>
                            <li>
                                - Worked on internal and external projects with
                                great care.
                            </li>
                            <li>
                                - Interfaced with clients to identify business
                                requirements.
                            </li>
                        </ul>
                    </Typography>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
        </Fragment>
    );
};

export default ExperienceTimeline;
