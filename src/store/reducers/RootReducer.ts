import {combineReducers} from "redux";
import car from "./Car.reducer";

const RootReducer = combineReducers({
    car
});

export default RootReducer