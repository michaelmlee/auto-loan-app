import React from "react";
import { Button, TextField } from "@material-ui/core";
import { FormikProps } from "formik";
import { makeStyles } from "@material-ui/core/styles";

const NewAccountForm: React.FunctionComponent<FormikProps<any>> = (props : FormikProps<any>) => {
    const classes = useStyles();
    const {
        values: { username, password, passwordConfirmation},
        handleChange,
        setFieldTouched,
        errors,
        touched,
        isValid,
        handleSubmit
    } = props;

    const change = (field: string, event: React.SyntheticEvent) => {
        handleChange(event);
        setFieldTouched(field, true, false);
    };

    return (
        <form className={classes.max} onSubmit={handleSubmit}>
            <TextField
                name={"username"}
                label={"Username"}
                value={username}
                onChange={(event: any) => change('username', event)}
                error={touched.username && Boolean(errors.username)}
                helperText={touched.username ? errors.username : ''}
                variant="filled"
                fullWidth
            />
            <TextField
                name={"password"}
                type="password"
                label={"Password"}
                value={password}
                onChange={(event: any) => change('password', event)}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password ? errors.password : ''}
                variant="filled"
                fullWidth
            />
            <TextField
                name={"passwordConfirmation"}
                type="password"
                label={"Confirm Password"}
                value={passwordConfirmation}
                onChange={(event: any) => change('passwordConfirmation', event)}
                error={touched.passwordConfirmation && Boolean(errors.passwordConfirmation)}
                helperText={touched.passwordConfirmation ? errors.passwordConfirmation : ''}
                variant="filled"
                fullWidth
            />
            <Button
                type="submit"
                disabled={!isValid || Object.keys(touched).length === 0}
                color="primary"
                variant="contained"
                fullWidth
            >
                Create Account
            </Button>
        </form>
    );
}

const useStyles = makeStyles(() => ({
    max: {
        maxWidth: 800,
        margin: "0 auto"
    }
}));

export default NewAccountForm