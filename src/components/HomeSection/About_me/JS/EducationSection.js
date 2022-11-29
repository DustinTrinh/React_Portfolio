import React, { Fragment } from "react";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import test from "../../../../assets/images/astronomy.jpg";
const EducationSection = (props) => {
    return (
        <Fragment>
            <Grid
                container
                spacing={2}
                alignItems="center"
                justify="center"
                justifyContent="center"
                wrap="nowrap"
            >
                <Grid item xs={6}>
                <Typography>WWWWWWWWWWWWW WWWWWWWWWWWWWWW WWWWWWWWW WWWWWWWWWWWWW WWWWWWWWWWW</Typography>
                </Grid>
                <Grid item xs={6}>
                    <img src={test} alt="test" />
                </Grid>
                
            </Grid>
        </Fragment>
    );
};

export default EducationSection;
