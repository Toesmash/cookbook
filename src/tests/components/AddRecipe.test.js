import React from 'react';
import { shallow } from 'enzyme';
import { AddRecipe } from '../../components/AddRecipe';
import dummyData from '../../redux/fixtures/dummyData';

let addRecipe, history, wrapper;

beforeEach(() => {
  addRecipe = jest.fn();
  history = { push: jest.fn() }
  wrapper = shallow(<AddRecipe addRecipe={addRecipe} history={history} />);
});

test('Render AddRecipe component', () => {
  expect(wrapper).toMatchSnapshot();
});

test('Test AddRecipe onSubmit call', () => {
  wrapper.find('WithFormik(RecipeForm)').prop('onSubmit')(dummyData[0]);
  expect(addRecipe).toHaveBeenLastCalledWith(dummyData[0]);
  expect(history.push).toHaveBeenLastCalledWith('/');
});