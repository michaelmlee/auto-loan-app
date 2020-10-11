import { Dispatch } from "redux";

export const QUERY_CAR_MAKE_LOADING: string = 'QUERY_CAR_MAKE_LOADING'
export const QUERY_CAR_MAKE_SUCCESS: string = 'QUERY_CAR_MAKE_SUCCESS'
export const QUERY_CAR_MAKE_FAIL: string = 'QUERY_CAR_MAKE_FAIL'
export const QUERY_CAR_MODEL_LOADING: string = 'QUERY_CAR_MODEL_LOADING'
export const QUERY_CAR_MODEL_SUCCESS: string = 'QUERY_CAR_MODEL_SUCCESS'
export const QUERY_CAR_MODEL_FAIL: string = 'QUERY_CAR_MODEL_FAIL'

export const queryCarMakeLoading = (payload: any): any => ({
    type: QUERY_CAR_MAKE_LOADING,
    payload
});

export const queryCarMakeSuccess = (payload: any): any => ({
    type: QUERY_CAR_MAKE_SUCCESS,
    payload
});

export const queryCarMakeFail = (payload: any): any => ({
    type: QUERY_CAR_MAKE_FAIL,
    payload
});

export const queryCarModelLoading = (payload: any): any => ({
    type: QUERY_CAR_MODEL_LOADING,
    payload
});

export const queryCarModelSuccess = (payload: any): any => ({
    type: QUERY_CAR_MODEL_SUCCESS,
    payload
});

export const queryCarModelFail = (payload: any): any => ({
    type: QUERY_CAR_MODEL_FAIL,
    payload
});


