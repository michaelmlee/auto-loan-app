import { QUERY_CAR_MAKE_SUCCESS, QUERY_CAR_MODEL_SUCCESS } from "../actions/Car.actions";
import { CarMake, CarModel, queryCarMakeSuccessI, queryCarModelSuccessI } from "../actions/Car.actionsTypes";

export interface CarRootState {
    car: InitialStateI
}

export interface InitialStateI {
    carMake: CarMake,
    carModel: CarModel
}

export const initialState: InitialStateI = {
    carMake: [],
    carModel: {}
}

type CarActions = queryCarMakeSuccessI | queryCarModelSuccessI;

const car = (state: InitialStateI = initialState, action: CarActions) : InitialStateI => {
    switch(action.type) {
        case QUERY_CAR_MAKE_SUCCESS:
            return {
                ...state,
                carMake: action.payload
            } as InitialStateI
        case QUERY_CAR_MODEL_SUCCESS:
            return {
                ...state,
                carModel: action.payload
            } as InitialStateI
        default:
            return state
    }
}

export default car