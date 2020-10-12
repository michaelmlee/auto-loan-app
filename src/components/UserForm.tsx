import React from "react";
import { useSelector } from "react-redux";
import {
    Button,
    FormHelperText,
    MenuItem,
    Select,
    TextField
} from '@material-ui/core';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from '@material-ui/core/InputLabel';
import { CarRootState } from '../store/reducers/Car.reducer';
import { CarModel } from "../store/actions/Car.actionsTypes";
import { FormikProps } from "formik";
import { Grid } from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const UserForm: React.FunctionComponent<FormikProps<any>>  = (props : FormikProps<any>) => {
    const classes = useStyles();
    const {
        values: { price, make, model, income, creditScore},
        handleChange,
        setFieldTouched,
        errors,
        touched,
        isValid,
        handleSubmit
    } = props;

    const carMakeAndModel = useSelector((state: CarRootState) => state.car);
    const change = (field: string, event: React.SyntheticEvent) => {
        handleChange(event);
        setFieldTouched(field, true, false);
    };
    return (
        <Grid container spacing={4} justify="center" alignItems="center">
            <Grid item xs={10}>
                <form className={classes.max} onSubmit={handleSubmit}>
                    <TextField
                        name={"price"}
                        label={"Auto Purchase Price"}
                        value={price}
                        onChange={(event: any) => change('price', event)}
                        error={touched.price && Boolean(errors.price)}
                        helperText={touched.price ? errors.price : ''}
                        variant="filled"
                        fullWidth
                    />
                    <FormControl key={"make"} variant="filled" fullWidth>
                        <InputLabel>Auto Make</InputLabel>
                        <Select
                            name={"make"}
                            value={make}
                            onChange={(event: any) => change('make', event)}
                            variant="filled"
                            fullWidth
                        >
                            {carMakeAndModel.carMake.map((value, key) => <MenuItem key={key} value={value}>{value}</MenuItem>)}
                        </Select>
                        {touched.make && Boolean(errors.make) && (
                            <FormHelperText
                                id={"make-helperText"}
                                error={touched.make && Boolean(errors.make)}
                            >
                                {errors.make}
                            </FormHelperText>
                        )}
                    </FormControl>
                    <FormControl key={"model"} variant="filled" fullWidth>
                        <InputLabel>Auto Model</InputLabel>
                        <Select
                            name={"model"}
                            value={model}
                            onChange={(event: any) => change('model', event)}
                            disabled={!make}
                            variant="filled"
                            fullWidth
                        >
                            {!!make && carMakeAndModel.carModel[make as keyof CarModel].map((value: string , key: number) =>
                                <MenuItem key={key} value={value}>{value}</MenuItem>)
                            }
                        </Select>
                        {touched.model && Boolean(errors.model) && (
                            <FormHelperText
                                id={"model-helperText"}
                                error={touched.model && Boolean(errors.model)}
                            >
                                {errors.model}
                            </FormHelperText>
                        )}
                    </FormControl>
                    <TextField
                        name={"income"}
                        label={"Estimated Yearly Income"}
                        value={income}
                        onChange={(event: any) => change('income', event)}
                        error={touched.income && Boolean(errors.income)}
                        helperText={touched.income ? errors.income : ''}
                        variant="filled"
                        fullWidth
                    />
                    <TextField
                        name={"creditScore"}
                        label={"Estimated Credit Score"}
                        value={creditScore}
                        onChange={(event: any) => change('creditScore', event)}
                        error={touched.creditScore && Boolean(errors.creditScore)}
                        helperText={touched.creditScore ? errors.creditScore : ''}
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
                        Check Qualification
                    </Button>
                </form>
            </Grid>
        </Grid>
    );
}

const useStyles = makeStyles(() => ({
    max: {
        maxWidth: 800,
        margin: "0 auto"
    }
}));

export default UserForm;