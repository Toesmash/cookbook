import React from 'react';
import { shallow } from 'enzyme';
import RecipeForm from '../../components/RecipeForm';
import dummyData from '../../redux/fixtures/dummyData';

test('Render RecipeForm without recipe data', () => {
  const wrapper = shallow(<RecipeForm />);
  expect(wrapper).toMatchSnapshot();
});

test('Render RecipeForm with recipe data', () => {
  const wrapper = shallow(<RecipeForm recipe={dummyData[0]} />);
  expect(wrapper).toMatchSnapshot();
});

test('Render error when submitting incomplete RecipeForm', () => {
  const wrapper = shallow(<RecipeForm />);
  wrapper.find('form').simulate('submit', { preventDefault: () => { } });
  expect(wrapper).toMatchSnapshot();
});