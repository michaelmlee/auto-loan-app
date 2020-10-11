import { Dispatch } from "redux";

export const QUERY_CAR_MAKE: string = 'QUERY_CAR_MAKE'
export const QUERY_CAR_MODEL: string = 'QUERY_CAR_MODEL'

export const queryCarMake = (payload: any): any => ({
    type: QUERY_CAR_MAKE,
    payload
});

export const queryCarModel = (payload: any): any => ({
    type: QUERY_CAR_MODEL,
    payload
});

