import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import NewAccountForm from "./NewAccountForm";
import { newAccountSchema } from "../utils/YupSchema";
import {Formik} from "formik";

const NewAccount: React.FunctionComponent = () => {
    const [ accountCreatedFlag, setAccountCreatedFlag ] = useState(false);
    const initialFormValues = {
        username: '',
        password: '',
        passwordConfirmation: ''
    };

    const handleSubmit = () => {
        setAccountCreatedFlag(true);
    }

    return (
        <>
            {accountCreatedFlag ?
                <h2>Your account has been created!</h2> :
                <>
                    <h2>You are qualified for an Auto Loan!</h2>
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
                </>
            }
        </>
    );
}

export default NewAccount