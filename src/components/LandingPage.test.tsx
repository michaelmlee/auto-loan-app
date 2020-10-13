import React from 'react';
import { mount } from 'enzyme';
import LandingPage, { AppState } from "./LandingPage";
import { Provider } from 'react-redux'
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";

const middlewares: Array<any> = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore({
    car: {
        carMake: ["Acura", "BMW"],
        carModel: {
            Acura: [ "MDX", "RDX"],
            BMW: [ "M3", "M4"]
        }
    }
});

describe('<LandingPage>', () => {
    it('should render default', () => {
        const pastFailedState: AppState = "";
        const wrapper = mount(
            <Provider store={store}>
                <LandingPage pastFailedState={pastFailedState}/>
            </Provider>);
        const heading = wrapper.find('h2');
        expect(heading).toBeDefined();
    });

    it('should render passed state', () => {
        const pastFailedState: AppState = "PASSED";
        const wrapper = mount(
            <Provider store={store}>
                <LandingPage pastFailedState={pastFailedState}/>
            </Provider>);
        const newAccount = wrapper.find('NewAccount');
        expect(newAccount).toBeDefined();
    });

    it('should render failed state', () => {
        const pastFailedState: AppState = "FAILED";
        const wrapper = mount(
            <Provider store={store}>
                <LandingPage pastFailedState={pastFailedState}/>
            </Provider>);
        const dq = wrapper.find('Disqualification');
        expect(dq).toBeDefined();
    });

    it('handleSubmit', () => {
        const pastFailedState: AppState = "";
        const wrapper = mount(
            <Provider store={store}>
                <LandingPage pastFailedState={pastFailedState}/>
            </Provider>);
        const handleSubmit = wrapper.find('handleSubmit');
        expect(handleSubmit).toBeDefined();
    });
});

describe('<UserForm>', () => {
    const pastFailedState: AppState = "";
    const wrapper = mount(
        <Provider store={store}>
            <LandingPage pastFailedState={pastFailedState}/>
        </Provider>);

    it('call price input field', () => {
        const input = wrapper.find('input').at(0);
        input.simulate('change', {
            persist: () => {},
            target: {
                name: 'price',
                value: '1'
            }
        });
        const newValue = wrapper.find('input').at(0).props().value;
        expect(newValue).toEqual("1");
    });

    it('call car make and then car model select field', () => {
        const select = wrapper.find('input').at(1);
        select.simulate('change', {
            persist: () => {},
            target: {
                name: 'make',
                value: 'Acura'
            }
        });
        const newValue = wrapper.find('input').at(1).props().value;
        expect(newValue).toEqual("Acura");
        const selectModel = wrapper.find('input').at(2);
        selectModel.simulate('change', {
            persist: () => {},
            target: {
                name: 'model',
                value: 'RDX'
            }
        });
        const newValueModel = wrapper.find('input').at(2).props().value;
        expect(newValueModel).toEqual("RDX");
    });

    it('call income input field', () => {
        const input = wrapper.find('input').at(3);
        input.simulate('change', {
            persist: () => {},
            target: {
                name: 'income',
                value: '5'
            }
        });
        const newValue = wrapper.find('input').at(3).props().value;
        expect(newValue).toEqual("5");
    });

    it('call creditScore input field', () => {
        const input = wrapper.find('input').at(4);
        input.simulate('change', {
            persist: () => {},
            target: {
                name: 'creditScore',
                value: '600'
            }
        });
        const newValue = wrapper.find('input').at(4).props().value;
        expect(newValue).toEqual("600");
    });

});