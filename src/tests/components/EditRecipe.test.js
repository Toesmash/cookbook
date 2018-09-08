import React from 'react';
import { shallow } from 'enzyme';
import { EditRecipe } from '../../components/EditRecipe';
import dummyData from '../../redux/fixtures/dummyData';

let editRecipe, history, wrapper;

beforeEach(() => {
  editRecipe = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<EditRecipe editRecipe={editRecipe} history={history} recipe={dummyData[1]} />);
});

test('Render EditRecipe component', () => {
  expect(wrapper).toMatchSnapshot();
});

test('Test EditRecipe onSubmit call', () => {
  wrapper.find('WithFormik(RecipeForm)').prop('onSubmit')(dummyData[1]);
  expect(editRecipe).toHaveBeenLastCalledWith(dummyData[1].id, dummyData[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
});