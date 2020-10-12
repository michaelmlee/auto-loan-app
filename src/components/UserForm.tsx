import React from "react";
import { useSelector } from "react-redux";
import {
    Button,
    FormHelperText,
    MenuItem,
    Select,
    TextField,
    withStyles
} from '@material-ui/core';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from '@material-ui/core/InputLabel';
import { CarRootState } from '../store/reducers/Car.reducer';
// import useEventCallback from "@material-ui/core/utils/useEventCallback";
import { CarModel } from "../store/actions/Car.actionsTypes";
import { creditScoreRanges } from "../utils/constants";
import { FormikProps } from "formik";

const UserForm = (props : FormikProps<any>) => {
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
    const change = (field: string, event: any) => {
        event.persist();
        handleChange(event);
        setFieldTouched(field, true, false);
    };
    return (
        <form onSubmit={handleSubmit}>
            <TextField
                name={"price"}
                label={"Auto Purchase Price"}
                value={price}
                onChange={(event: any) => change('price', event)}
                error={touched.price && Boolean(errors.price)}
                helperText={errors.price}
            />
            <InputLabel>Auto Make</InputLabel>
            <FormControl key={"make"} fullWidth>
                <Select
                    name={"make"}
                    value={make}
                    onChange={(event: any) => change('make', event)}
                >
                    {carMakeAndModel.carMake.map((value, key) => <MenuItem key={key} value={value}>{value}</MenuItem>)}
                </Select>
                <FormHelperText
                    id={"make-helperText"}
                    error={touched.make && Boolean(errors.make)}
                >
                    {errors.make}
                </FormHelperText>
            </FormControl>
            <InputLabel>Auto Model</InputLabel>
            <FormControl key={"model"} fullWidth>
                <Select
                    name={"model"}
                    value={model}
                    onChange={(event: any) => change('model', event)}
                    disabled={!make}
                >
                    {!!make && carMakeAndModel.carModel[make as keyof CarModel].map((value: string , key: number) =>
                        <MenuItem key={key} value={value}>{value}</MenuItem>)
                    }
                </Select>
                <FormHelperText
                    id={"model-helperText"}
                    error={touched.model && Boolean(errors.model)}
                >
                    {errors.model}
                </FormHelperText>
            </FormControl>
            <TextField
                name={"income"}
                label={"Estimated Yearly Income"}
                value={income}
                onChange={(event: any) => change('income', event)}
                error={touched.income && Boolean(errors.income)}
                helperText={errors.income}
            />
            <InputLabel>Estimated Credit Score</InputLabel>
            <FormControl key={"creditScore"} fullWidth>
                <Select
                    name={"creditScore"}
                    value={creditScore}
                    onChange={(event: any) => change('creditScore', event)}
                >
                    {creditScoreRanges.map((value, key) =>
                        <MenuItem key={`score-${key}`} value={value}>{value}</MenuItem>
                    )}
                </Select>
                <FormHelperText
                    id={"creditScore-helperText"}
                    error={touched.creditScore && Boolean(errors.creditScore)}
                >
                    {errors.creditScore}
                </FormHelperText>
            </FormControl>
            <Button
                type="submit"
                color="primary"
                disabled={!isValid || Object.keys(touched).length === 0}
            >
                Submit
            </Button>
        </form>
    );
}

export default UserForm;