import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import LandingPage, { AppStates } from "./components/LandingPage";

describe('App', () => {
  const wrapper = shallow(<App />);

    it('LandingPage', () => {
      const el = <LandingPage pastFailedState={AppStates.Passed} />;
      expect(wrapper.find(LandingPage)).toHaveLength(1);
    });
});