import * as yup from "yup";

/* eslint-disable no-template-curly-in-string */
export const userSchema = yup.object({
    price: yup.number().typeError("price must be a positive whole number").min(1).integer("price must be a positive whole number")
        .required("required field"),
    make: yup.string().required("required field"),
    model: yup.string().required("required field"),
    income: yup.number().typeError("income must be a whole number greater than or equal to 0").min(0).integer("income must be a whole number greater than or equal to 0")
        .required("required field"),
    creditScore: yup.number().typeError("must be a number between 300-850").max(850, "must be less than or equal to 850").min(300,"must be greater than or equal to 300").required("required field")
});

export const newAccountSchema = yup.object({
    username: yup.string()
        .required('A username is required')
        .max(80, 'A username can have at most ${max} characters')
        .min(4, 'A username must have at least ${min} character')
        .matches(
            /^[a-zA-Z0-9_@+,\-.]*$/,
            'A username can only contain alphanumeric characters'
        ),
    password: yup.string()
        .required('A password is required')
        .max(150, 'A password can have at most ${max} characters')
        .min(8, 'A password must have at least ${min} character')
        .matches(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
            'A password must contain at least one uppercase, lowercase, number and special character'
        ),
    passwordConfirmation: yup.string()
        .oneOf([yup.ref('password'), undefined], 'Passwords must match')
})