import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { queryCarMake, queryCarModel } from "../store/actions/Car.actions";
import { Typography } from "@material-ui/core";
import UserForm from "./UserForm";
import { Formik } from "formik";
import { userSchema } from "../utils/YupSchema";
import {fakeProcessApplication} from "../fakeNetworkCalls/fakeNetworkCalls";
import NewAccount from "./NewAccount";
import Disqualification from "./Disqualification";

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
                <>
                    <h1>Auto Loan Qualification</h1>
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
                </>
            );
    }
}

export default LandingPage;