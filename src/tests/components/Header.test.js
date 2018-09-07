import { shallow } from 'enzyme';
import React from 'react';
import Header from '../../components/Header';

test('Header rendering', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});