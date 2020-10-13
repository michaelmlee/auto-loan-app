import thunk from "redux-thunk";
import configureStore from 'redux-mock-store';
import { initialState } from "./reducers/Car.reducer";
import store from "./Store";
import { queryCarMakeLoading } from "./actions/Car.actions";

describe('Store', () => {
    it('createStore', () => {
        const middlewares: Array<any> = [thunk];
        const mockStore = configureStore(middlewares);
        const fakeStore = mockStore({...initialState});
        fakeStore.dispatch(<any>queryCarMakeLoading());
        expect(store.getState().car).toEqual(fakeStore.getState());
    });
});