import React, { Fragment } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import classes from "../CSS/Certificates.module.css";

const Certificate = (props) => {
    const certificateCard = props.certInfo.map((cert, index) => (
        <Grid item xs={4} key={cert.id}>
            <Card>
                <CardMedia
                    className={classes.certImg}
                    component="img"
                    src={cert.img}
                    alt={cert.imgAlt}
                />
                <CardContent>
                    <ul className={classes.certContent}>
                        <li><b>ID:</b> {cert.id}</li>
                        <li><b>Name:</b> {cert.name}</li>
                        <li><b>Provider:</b> {cert.provider}</li>
                        <li><b>Date:</b> {cert.date}</li>
                        <li>
                            <b>URL: </b>
                            <a href={cert.url} target="_blank">
                                {cert.name}
                            </a>
                        </li>
                    </ul>
                </CardContent>
            </Card>
        </Grid>
    ));

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
                {certificateCard}
            </Grid>
        </Box>
    );
};

export default Certificate;