import { fakeQueryCarMake, fakeQueryCarModel } from "../../fakeNetworkCalls/fakeNetworkCalls";
import { CarModel, CarMake } from "./Car.actionsTypes";

export const QUERY_CAR_MAKE_LOADING: string = 'QUERY_CAR_MAKE_LOADING'
export const QUERY_CAR_MAKE_SUCCESS: string = 'QUERY_CAR_MAKE_SUCCESS'
export const QUERY_CAR_MAKE_FAIL: string = 'QUERY_CAR_MAKE_FAIL'
export const QUERY_CAR_MODEL_LOADING: string = 'QUERY_CAR_MODEL_LOADING'
export const QUERY_CAR_MODEL_SUCCESS: string = 'QUERY_CAR_MODEL_SUCCESS'
export const QUERY_CAR_MODEL_FAIL: string = 'QUERY_CAR_MODEL_FAIL'

export const queryCarMakeLoading = (): object => ({
    type: QUERY_CAR_MAKE_LOADING,
});

export const queryCarMakeSuccess = (payload: CarMake): object => ({
    type: QUERY_CAR_MAKE_SUCCESS,
    payload
});

export const queryCarMakeFail = (payload: any): object => ({
    type: QUERY_CAR_MAKE_FAIL,
    payload
});

export const queryCarModelLoading = (): object => ({
    type: QUERY_CAR_MODEL_LOADING,
});

export const queryCarModelSuccess = (payload: CarModel): object => ({
    type: QUERY_CAR_MODEL_SUCCESS,
    payload
});

export const queryCarModelFail = (payload: any): object => ({
    type: QUERY_CAR_MODEL_FAIL,
    payload
});

export const queryCarMake = () => (dispatch: (arg0: any) => void) => {
    dispatch(queryCarMakeLoading());
    fakeQueryCarMake().then((response: any) => {
        dispatch(queryCarMakeSuccess(response))
        console.log(response);
    }).catch((error: any) => {
        dispatch(queryCarMakeFail(error));
    });
};

export const queryCarModel = () => (dispatch: (arg0: any) => void) => {
    dispatch(queryCarModelLoading());
    fakeQueryCarModel().then((response: any) => {
        dispatch(queryCarModelSuccess(response))
        console.log(response);
    }).catch((error: any) => {
        dispatch(queryCarModelFail(error));
    });
};

