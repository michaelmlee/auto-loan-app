import React, { useState } from "react";
import {Grid, Theme, Typography} from "@material-ui/core";
import NewAccountForm from "./NewAccountForm";
import { newAccountSchema } from "../utils/YupSchema";
import {Formik} from "formik";
import {makeStyles} from "@material-ui/core/styles";

interface initialFormValuesI {
    username: string,
    password: string,
    passwordConfirmation: string
}

const initialFormValues: initialFormValuesI = {
    username: '',
    password: '',
    passwordConfirmation: ''
};

const NewAccount: React.FunctionComponent = () => {
    const classes = useStyles();
    const [ accountCreatedFlag, setAccountCreatedFlag ] = useState(false);

    const handleSubmit = () => {
        setAccountCreatedFlag(true);
    }

    return (
        <>
            {accountCreatedFlag ?
                <Grid className={classes.root} container spacing={4} justify="center" alignItems="center">
                    <Grid item xs={11}>
                        <Typography variant="h3">Your account has been created!</Typography>
                    </Grid>
                </Grid> :
                <Grid className={classes.root} container spacing={4} justify="center" alignItems="center">
                    <Grid item xs={11}>
                        <Typography variant="h3" className={classes.hard}>You are qualified for an Auto Loan!</Typography>
                        <Typography>Please enter your information below to create an account.</Typography>
                        <Formik
                            validationSchema={newAccountSchema}
                            initialValues={initialFormValues}
                            onSubmit={handleSubmit}
                        >
                            {props => (
                                <NewAccountForm
                                    {...props}
                                />
                            )}
                        </Formik>
                    </Grid>
                </Grid>
            }
        </>
    );
}

const useStyles = makeStyles((theme: Theme) => ({
    hard: {
        margin: theme.spacing(2)
    },
    root: {
        height: "100vh"
    }
}));

export default NewAccount