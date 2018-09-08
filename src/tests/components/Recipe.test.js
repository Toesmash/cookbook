import React from 'react';
import { shallow } from 'enzyme';
import { Recipe } from '../../components/Recipe';
import dummyData from '../../redux/fixtures/dummyData';

let wrapper, history, removeRecipe;

beforeEach(() => {
  history = { push: jest.fn() };
  removeRecipe = jest.fn();
  wrapper = shallow(<Recipe removeRecipe={removeRecipe} history={history} recipe={dummyData[0]} />);
});

test('Render Recipe component', () => {
  expect(wrapper).toMatchSnapshot();
});

test('Test Recipe onRemove call', () => {
  wrapper.find('button').at(1).simulate('click');
  expect(removeRecipe).toHaveBeenLastCalledWith(dummyData[0].id);
  expect(history.push).toHaveBeenLastCalledWith('/');
});