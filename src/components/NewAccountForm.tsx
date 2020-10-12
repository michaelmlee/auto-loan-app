import React from "react";
import { Button, TextField } from "@material-ui/core";
import { FormikProps } from "formik";

const NewAccountForm: React.FunctionComponent<FormikProps<any>> = (props : FormikProps<any>) => {
    const {
        values: { username, password, passwordConfirmation},
        handleChange,
        setFieldTouched,
        errors,
        touched,
        isValid,
        handleSubmit
    } = props;

    const change = (field: string, event: any) => {
        handleChange(event);
        setFieldTouched(field, true, false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                name={"username"}
                label={"Username"}
                value={username}
                onChange={(event: any) => change('username', event)}
                error={touched.username && Boolean(errors.username)}
                helperText={touched.username ? errors.username : ''}
            />
            <TextField
                name={"password"}
                type="password"
                label={"Password"}
                value={password}
                onChange={(event: any) => change('password', event)}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password ? errors.password : ''}
            />
            <TextField
                name={"passwordConfirmation"}
                type="password"
                label={"Confirm Password"}
                value={passwordConfirmation}
                onChange={(event: any) => change('passwordConfirmation', event)}
                error={touched.passwordConfirmation && Boolean(errors.passwordConfirmation)}
                helperText={touched.passwordConfirmation ? errors.passwordConfirmation : ''}
            />
            <Button
                type="submit"
                color="primary"
                disabled={!isValid || Object.keys(touched).length === 0}
            >
                Create Account
            </Button>
        </form>
    );
}

export default NewAccountForm