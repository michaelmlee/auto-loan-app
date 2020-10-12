import React from "react";
import {Grid, Theme, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

interface PropsI {
    error: string
};

const Disqualification: React.FunctionComponent<PropsI> = (props) => {
    const classes = useStyles();
    return (
        <Grid className={classes.root} container spacing={4} justify="center" alignItems="center">
            <Grid item xs={11}>
                <Typography className={classes.hard} variant="h5">Sorry, your auto loan application did not pass</Typography>
                <Typography className={classes.hard} variant="h6">Reasoning: {props.error}</Typography>
                <Typography className={classes.hard}>Please contact customer support at (555)555-5555 for more information</Typography>
            </Grid>
        </Grid>
    );
};

const useStyles = makeStyles((theme: Theme) => ({
    hard: {
        margin: theme.spacing(2)
    },
    root: {
        height: "100vh"
    }
}));

export default Disqualification