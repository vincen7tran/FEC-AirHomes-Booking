import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/src/components/App.jsx';

describe('App', () => {
  it('something', () => {
    const wrapper = shallow(<App />);
    const hideSlideState = wrapper.state().hideSlide;
    expect(hideSlideState).toBe(true);
  });
});
