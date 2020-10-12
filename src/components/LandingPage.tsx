import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { queryCarMake, queryCarModel } from "../store/actions/Car.actions";
import { Typography } from "@material-ui/core";
import UserForm from "./UserForm";
import { Formik } from "formik";
import { userSchema } from "../utils/UserYupSchema";
import {fakeProcessApplication} from "../fakeNetworkCalls/fakeNetworkCalls";

const LandingPage: React.FunctionComponent = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(queryCarMake());
        dispatch(queryCarModel());
    })
    //TODO clean up types
    const handleSubmit = (formValues : any) => {
        fakeProcessApplication(formValues).then(response => {
            //TODO take them to qualification page
        }).catch( error => {
            //TODO take them to disqualification page
        });
    };

    const initialFormValues = {
        price: '',
        make: '',
        model: '',
        income: '',
        creditScore: ''
    };

    return (
        <>
            <h1>Auto Loan Qualification</h1>
            <Typography
                align={"left"}
                gutterBottom={true}
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id eleifend ex. Nam elementum orci quam, at pulvinar ante ultricies non. Nullam sagittis consequat felis vitae efficitur. Phasellus vitae augue enim. Etiam et felis volutpat, pharetra mi eget, volutpat massa. Morbi placerat viverra finibus. Sed vulputate a lacus id mattis.</Typography>
            <Typography align={"left"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id eleifend ex. Nam elementum orci quam, at pulvinar ante ultricies non. Nullam sagittis consequat felis vitae efficitur. Phasellus vitae augue enim. Etiam et felis volutpat, pharetra mi eget, volutpat massa. Morbi placerat viverra finibus. Sed vulputate a lacus id mattis.</Typography>
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

export default LandingPage;