import React from 'react';
import { mount } from 'enzyme';
import Disqualification from "./Disqualification";

describe('Disqualification', () => {
    const error: string = "message";
    const wrapper = mount(<Disqualification error={error} />);

    it('should render', () => {
        const heading = wrapper.find('h5');
        expect(heading).toBeDefined();
    });

    it('should render heading 6', () => {
        const heading = wrapper.find('h6');
        expect(heading).toBeDefined();
    });
});