import React from 'react';
import { shallow } from 'enzyme';
import CheckingForm from '../client/src/components/CheckingForm.jsx';

describe('Calendar Component Test Suite', () => {
  it('Should render correctly with no props', () => {
    const wrapper = shallow(<CheckingForm />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Should hide Calendar component on render by default', () => {
    const wrapper = shallow(<CheckingForm />);
    expect(wrapper.state('checkInActive')).toBe(false);
    expect(wrapper.state('checkoutActive')).toBe(false);
  });

  it('Should be able to open a Calendar component with a click', () => {
    const wrapper = shallow(<CheckingForm />);

    wrapper
      .find('div#checkoutCalDiv')
      .simulate('click');

    expect(wrapper.state('checkoutActive')).toBe(true);
    expect(wrapper.state('checkInActive')).toBe(false);
  });

  it('Should be able to open the check-in Calendar from the checkout Calendar with a click', () => {
    const wrapper = shallow(<CheckingForm />);
    wrapper
      .find('div#checkoutCalDiv')
      .simulate('click');
    wrapper
      .find('div#checkInCalDiv')
      .simulate('click');

    expect(wrapper.state('checkInActive')).toEqual(true);
    expect(wrapper.state('checkoutActive')).toBe(false);\
    expect(wrapper).toMatchSnapshot();
  });
});
