import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { queryCarMake, queryCarModel } from "../store/actions/Car.actions";
import {Grid, Typography} from "@material-ui/core";
import UserForm from "./UserForm";
import { Formik } from "formik";
import { userSchema } from "../utils/YupSchema";
import {fakeProcessApplication} from "../fakeNetworkCalls/fakeNetworkCalls";
import NewAccount from "./NewAccount";
import Disqualification from "./Disqualification";
import {makeStyles} from "@material-ui/core/styles";

interface PropsI {
    pastFailedState: AppState
};

enum AppStates {
    Passed = "PASSED",
    Failed = "FAILED",
    None = ""
};

export type AppState = string | null;

const initialFormValues = {
    price: '',
    make: '',
    model: '',
    income: '',
    creditScore: ''
};

const LandingPage: React.FunctionComponent<PropsI> = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [ appState, setAppState ] = useState(props.pastFailedState)
    const [ errorMsg, setErrorMsg ] = useState('');

    useEffect(() => {
        dispatch(queryCarMake());
        dispatch(queryCarModel());
    });

    const handleSubmit = (formValues : any) => {
        fakeProcessApplication(formValues).then(response => {
            setAppState(AppStates.Passed);
        }).catch( error => {
            setAppState(AppStates.Failed);
            setErrorMsg(error.message);
            window.localStorage.setItem("autoAppQualification", AppStates.Failed);
        });
    };

    switch(appState) {
        case AppStates.Passed:
            return (
                <NewAccount />
            );
        case AppStates.Failed:
            return (
                <Disqualification error={errorMsg} />
            );
        default:
            return (
                <Grid className={classes.root} container spacing={4} justify="center" alignItems="center">
                    <Grid item xs={11}>
                        <div className={classes.soft}>
                            <Typography variant="h2" className={classes.hard}>Auto Loan Qualification</Typography>
                            <Typography
                                align={"left"}
                                gutterBottom={true}
                            >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id eleifend ex. Nam elementum orci
                                quam, at pulvinar ante ultricies non. Nullam sagittis consequat felis vitae efficitur. Phasellus
                                vitae augue enim. Etiam et felis volutpat, pharetra mi eget, volutpat massa. Morbi placerat
                                viverra finibus. Sed vulputate a lacus id mattis.</Typography>
                            <Typography align={"left"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id eleifend
                                ex. Nam elementum orci quam, at pulvinar ante ultricies non. Nullam sagittis consequat felis
                                vitae efficitur. Phasellus vitae augue enim. Etiam et felis volutpat, pharetra mi eget, volutpat
                                massa. Morbi placerat viverra finibus. Sed vulputate a lacus id mattis.</Typography>
                        </div>
                        <Formik
                            validationSchema={userSchema}
                            initialValues={initialFormValues}
                            onSubmit={handleSubmit}
                        >
                            {props => (
                                <UserForm
                                    {...props}
                                />
                            )}
                        </Formik>
                    </Grid>
                </Grid>
            );
    }
}

const useStyles = makeStyles((theme) => ({
    hard: {
        margin: theme.spacing(4)
    },
    root: {
        height: "100vh"
    },
    soft: {
        padding: theme.spacing(4)
    }
}));

export default LandingPage;