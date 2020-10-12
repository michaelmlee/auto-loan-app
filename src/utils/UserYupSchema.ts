import * as yup from "yup";

export const userSchema = yup.object({
    price: yup.string()
        .required("required field")
        .matches(/(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/, "Must be a positive number or dollar amount"),
    make: yup.string().required("required field"),
    model: yup.string().required("required field"),
    income: yup.string()
        .required("required field")
        .matches(/(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/, "Must be a positive number or dollar amount"),
    creditScore: yup.number().typeError("must be a number between 300-850").max(850, "must be less than or equal to 850").min(300,"must be greater than or equal to 300").required("required field")
});