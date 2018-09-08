import React from 'react';
import { shallow, mount } from 'enzyme';
import { RecipeForm, FormikRecipeForm } from '../../components/RecipeForm';
import dummyData from '../../redux/fixtures/dummyData';

test('Render RecipeForm without recipe data', () => {
  const wrapper = shallow(<FormikRecipeForm />);
  expect(wrapper).toMatchSnapshot();
});

