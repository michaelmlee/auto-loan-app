import React from 'react';
import { mount } from 'enzyme';
import NewAccount from "./NewAccount";
import { Provider } from 'react-redux'
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";

// const middlewares: Array<any> = [thunk];
// const mockStore = configureStore(middlewares);
// const store = mockStore({
//     car: {
//         carMake: ["Acura", "BMW"],
//         carModel: {
//             Acura: [ "MDX", "RDX"],
//             BMW: [ "M3", "M4"]
//         }
//     }
// });

describe('<NewAccount>', () => {
    it('should render', () => {
        const wrapper = mount(<NewAccount />)
        const heading = wrapper.find('h3');
        expect(heading).toBeDefined();
    });
});

describe('<NewAccountForm>', () => {
    const wrapper = mount(<NewAccount />)

    it('should change username field', () => {
        const input = wrapper.find("input").at(0);
        input.simulate('change', {
            persist: () => {},
            target: {
                name: 'username',
                value: 'mike'
            }
        });
        const newValue = wrapper.find('input').at(0).props().value;
        expect(newValue).toEqual("mike");
    });

    it('should change password field', () => {
        const input = wrapper.find("input").at(1);
        input.simulate('change', {
            persist: () => {},
            target: {
                name: 'password',
                value: 'Asdf123$'
            }
        });
        const newValue = wrapper.find('input').at(1).props().value;
        expect(newValue).toEqual("Asdf123$");
    });

    it('should change passwordConfirmation field', () => {
        const input = wrapper.find("input").at(2);
        input.simulate('change', {
            persist: () => {},
            target: {
                name: 'passwordConfirmation',
                value: 'Asdf123$'
            }
        });
        const newValue = wrapper.find('input').at(2).props().value;
        expect(newValue).toEqual("Asdf123$");
    });
});