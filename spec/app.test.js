import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../client/src/components/App.jsx';

describe('App Component Test Suite', () => {
  it('Should render correctly with no props', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Should hide Slider compoenent on render by default', () => {
    const wrapper = shallow(<App />);
    const hideSlideState = wrapper.state().hideSlide;
    expect(hideSlideState).toBe(true);
  });

  it('Should be able to open guest form with a click', () => {
    const wrapper = mount(<App />);
    wrapper
      .find('button#guestButton')
      .simulate('click');

    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });

  it('Should be able to render Report Modal with a click', () => {
    const wrapper = mount(<App />);
    wrapper
      .find('button#reportButton')
      .simulate('click');

    expect(wrapper.state('hideReport')).toEqual(false);
    wrapper.unmount();
  });
});
