import {QUERY_CAR_MAKE_SUCCESS, QUERY_CAR_MODEL_SUCCESS} from "../actions/Car.actions";
import {CarMake, CarModel} from "../actions/Car.actionsTypes";

export interface CarRootState {
    car: InitialStateI
}

export interface InitialStateI {
    carMake: CarMake,
    carModel: CarModel
}

const initialState: InitialStateI = {
    carMake: [],
    carModel: {}
}

const car = (state: InitialStateI = initialState, action: any) : InitialStateI => {
    switch(action.type) {
        case QUERY_CAR_MAKE_SUCCESS:
            return {
                ...state,
                carMake: action.payload
            }
        case QUERY_CAR_MODEL_SUCCESS:
            return {
                ...state,
                carModel: action.payload
            }
        default:
            return state
    }
}

export default car